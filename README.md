<!DOCTYPE html>
<html lang="ar">
<head>
  <meta charset="UTF-8">
  <title>لعبة تجنب الفخاخ</title>
  <style>
    body {
      margin: 0;
      background: #111;
      color: white;
      font-family: Tahoma, sans-serif;
      text-align: center;
      overflow: hidden;
    }

    canvas {
      background: #000;
      display: block;
      margin: 20px auto;
      border: 2px solid white;
    }

    #startScreen, #restartButton, #musicToggle, #saveName, #playerNameInput {
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
      font-size: 20px;
      padding: 10px 25px;
      border-radius: 10px;
      background: #222;
      border: 2px solid white;
      color: white;
      cursor: pointer;
      z-index: 5;
    }

    #startScreen {
      top: 40%;
    }

    #playerNameInput {
      top: 50%;
      width: 200px;
    }

    #saveName {
      top: 58%;
    }

    #restartButton {
      top: 65%;
      display: none;
    }

    #musicToggle {
      top: 10px;
      right: 20px;
      left: auto;
      transform: none;
    }
  </style>
</head>
<body>
  <canvas id="gameCanvas" width="800" height="600"></canvas>
  <button id="startScreen">ابدأ اللعبة</button>
  <input id="playerNameInput" placeholder="ادخل اسمك" />
  <button id="saveName">حفظ الاسم</button>
  <button id="restartButton">🔁 إعادة اللعب</button>
  <button id="musicToggle">🔊 إيقاف الموسيقى</button>

  <audio id="pointSound" src="https://cdn.pixabay.com/download/audio/2022/03/15/audio_45b1b97d15.mp3"></audio>
  <audio id="gameOverSound" src="https://cdn.pixabay.com/download/audio/2022/03/15/audio_5f95a9fae6.mp3"></audio>
  <audio id="bgMusic" src="https://cdn.pixabay.com/download/audio/2022/03/30/audio_8c6b0537c2.mp3" loop></audio>

  <script>
    const canvas = document.getElementById("gameCanvas");
    const ctx = canvas.getContext("2d");

    const startBtn = document.getElementById("startScreen");
    const restartBtn = document.getElementById("restartButton");
    const musicToggle = document.getElementById("musicToggle");
    const pointSound = document.getElementById("pointSound");
    const gameOverSound = document.getElementById("gameOverSound");
    const bgMusic = document.getElementById("bgMusic");
    const playerNameInput = document.getElementById("playerNameInput");
    const saveNameBtn = document.getElementById("saveName");

    let playerName = localStorage.getItem("playerName") || "لاعب مجهول";

    const player = { x: 50, y: 250, size: 30, speed: 5 };
    const traps = [];
    const points = [];
    const keys = {};

    let score = 0, level = 1, highScore = localStorage.getItem("highScore") || 0;
    let gameOver = false, gameStarted = false, musicOn = true;

    function createTraps(n, speed) {
      traps.length = 0;
      for (let i = 0; i < n; i++) {
        traps.push({ x: 100 + Math.random() * 600, y: Math.random() * 600, w: 20, h: 80, speed });
      }
    }

    function createPoints(n) {
      points.length = 0;
      for (let i = 0; i < n; i++) {
        points.push({ x: 100 + Math.random() * 600, y: Math.random() * 550, r: 8 });
      }
    }

    function drawPlayer() {
      ctx.fillStyle = "green";
      ctx.fillRect(player.x, player.y, player.size, player.size);
    }

    function drawTraps() {
      ctx.fillStyle = "red";
      traps.forEach(t => ctx.fillRect(t.x, t.y, t.w, t.h));
    }

    function drawPoints() {
      ctx.fillStyle = "yellow";
      points.forEach(p => {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fill();
      });
    }

    function moveTraps() {
      traps.forEach(trap => {
        trap.y += trap.speed;
        if (trap.y > canvas.height) trap.y = -trap.h;
      });
    }

    function checkCollisions() {
      const playerRect = { x: player.x, y: player.y, w: player.size, h: player.size };

      traps.forEach(t => {
        if (playerRect.x < t.x + t.w && playerRect.x + playerRect.w > t.x &&
            playerRect.y < t.y + t.h && playerRect.y + playerRect.h > t.y) {
          gameOver = true;
          gameOverSound.play();
          if (score > highScore) {
            localStorage.setItem("highScore", score);
            highScore = score;
          }
          restartBtn.style.display = "block";
        }
      });

      for (let i = points.length - 1; i >= 0; i--) {
        const p = points[i];
        const dx = player.x + player.size / 2 - p.x;
        const dy = player.y + player.size / 2 - p.y;
        if (Math.sqrt(dx * dx + dy * dy) < player.size / 2 + p.r) {
          points.splice(i, 1);
          score++;
          pointSound.currentTime = 0;
          pointSound.play();
          if (score % 5 === 0) {
            level++;
            createTraps(3 + level, 2 + level * 0.5);
          }
        }
      }

      if (points.length === 0) createPoints(5);
    }

    function drawScore() {
      ctx.fillStyle = "white";
      ctx.font = "20px Arial";
      ctx.fillText("اللاعب: " + playerName, 20, 20);
      ctx.fillText("النقاط: " + score, 20, 50);
      ctx.fillText("المرحلة: " + level, 20, 80);
      ctx.fillText("أعلى نتيجة: " + highScore, 600, 30);
    }

    function drawGameOver() {
      ctx.fillStyle = "red";
      ctx.font = "50px Arial";
      ctx.fillText("نهاية اللعبة", 250, 280);
      ctx.font = "20px Arial";
      ctx.fillText("اضغط [مسافة] أو زر إعادة للبدء من جديد", 200, 330);
    }

    function handleMovement() {
      if (keys["ArrowUp"] && player.y > 0) player.y -= player.speed;
      if (keys["ArrowDown"] && player.y + player.size < canvas.height) player.y += player.speed;
      if (keys["ArrowLeft"] && player.x > 0) player.x -= player.speed;
      if (keys["ArrowRight"] && player.x + player.size < canvas.width) player.x += player.speed;
    }

    function resetGame() {
      score = 0; level = 1; gameOver = false;
      player.x = 50; player.y = 250;
      createTraps(3 + level, 2 + level * 0.5);
      createPoints(5);
      restartBtn.style.display = "none";
      gameLoop();
    }

    function gameLoop() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      if (!gameOver) {
        handleMovement();
        moveTraps();
        checkCollisions();
        drawPlayer();
        drawTraps();
        drawPoints();
        drawScore();
        requestAnimationFrame(gameLoop);
      } else {
        drawGameOver();
        drawScore();
      }
    }

    startBtn.onclick = () => {
      startBtn.style.display = "none";
      playerNameInput.style.display = "none";
      saveNameBtn.style.display = "none";
      gameStarted = true;
      if (musicOn) bgMusic.play();
      resetGame();
    };

    restartBtn.onclick = () => {
      if (gameOver) resetGame();
    };

    window.addEventListener("keydown", e => {
      keys[e.key] = true;
      if (gameOver && e.key === " ") resetGame();
    });
    window.addEventListener("keyup", e => keys[e.key] = false);

    musicToggle.onclick = () => {
      musicOn = !musicOn;
      if (musicOn) {
        bgMusic.play();
        musicToggle.textContent = "🔊 إيقاف الموسيقى";
      } else {
        bgMusic.pause();
        musicToggle.textContent = "🔈 تشغيل الموسيقى";
      }
    };

    saveNameBtn.onclick = () => {
      const name = playerNameInput.value.trim();
      if (name) {
        playerName = name;
        localStorage.setItem("playerName", name);
        alert("تم حفظ الاسم بنجاح!");
      }
    };
  </script>
</body>
</html>
