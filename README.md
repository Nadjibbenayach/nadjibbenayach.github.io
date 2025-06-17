<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>2D Trap Dodger Game</title>
  <style>
    body {
      text-align: center;
      font-family: sans-serif;
      color: white;
      background: #111;
      margin: 0;
      overflow: hidden;
    }

    canvas {
      background: #000;
      display: block;
      margin: auto;
      border: 2px solid #fff;
    }

    #controls {
      margin-top: 10px;
      display: none;
    }

    .btn {
      background: #333;
      border: 2px solid white;
      color: white;
      padding: 10px 20px;
      margin: 5px;
      font-size: 16px;
      border-radius: 8px;
      cursor: pointer;
    }

    @media (max-width: 768px) {
      #controls {
        display: block;
      }
    }
  </style>
</head>
<body>
  <h1>🕹️ 2D Trap Dodger Game</h1>
  <p>Use ⬅️➡️⬆️⬇️ keys or buttons | Collect 🟡 | Avoid 🔴</p>
  <canvas id="gameCanvas" width="800" height="600"></canvas>

  <div id="controls">
    <button class="btn" onclick="keys['ArrowUp']=true; setTimeout(()=>keys['ArrowUp']=false,100)">⬆️</button><br>
    <button class="btn" onclick="keys['ArrowLeft']=true; setTimeout(()=>keys['ArrowLeft']=false,100)">⬅️</button>
    <button class="btn" onclick="keys['ArrowDown']=true; setTimeout(()=>keys['ArrowDown']=false,100)">⬇️</button>
    <button class="btn" onclick="keys['ArrowRight']=true; setTimeout(()=>keys['ArrowRight']=false,100)">➡️</button>
  </div>

  <audio id="pointSound" src="https://cdn.pixabay.com/download/audio/2022/03/15/audio_45b1b97d15.mp3?filename=video-game-pick-up-38299.mp3"></audio>
  <audio id="gameOverSound" src="https://cdn.pixabay.com/download/audio/2022/03/15/audio_5f95a9fae6.mp3?filename=game-over-arcade-6435.mp3"></audio>

  <script>
    const canvas = document.getElementById("gameCanvas");
    const ctx = canvas.getContext("2d");

    const player = { x: 50, y: 250, size: 30, speed: 5 };
    const keys = {};
    let score = 0;
    let gameOver = false;
    let highScore = localStorage.getItem("highScore") || 0;

    const traps = [];
    const points = [];

    const pointSound = document.getElementById("pointSound");
    const gameOverSound = document.getElementById("gameOverSound");

    function createTraps(n) {
      traps.length = 0;
      for (let i = 0; i < n; i++) {
        traps.push({
          x: 150 + i * 120,
          y: Math.random() * 600,
          w: 20,
          h: 80,
          speed: 3
        });
      }
    }

    function createPoints(n) {
      points.length = 0;
      for (let i = 0; i < n; i++) {
        points.push({
          x: 100 + Math.random() * 600,
          y: Math.random() * 550,
          r: 8
        });
      }
    }

    function drawPlayer() {
      ctx.fillStyle = "green";
      ctx.fillRect(player.x, player.y, player.size, player.size);
    }

    function drawTraps() {
      ctx.fillStyle = "red";
      traps.forEach(trap => {
        ctx.fillRect(trap.x, trap.y, trap.w, trap.h);
      });
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

    function handleMovement() {
      if (keys["ArrowUp"] && player.y > 0) player.y -= player.speed;
      if (keys["ArrowDown"] && player.y + player.size < canvas.height) player.y += player.speed;
      if (keys["ArrowLeft"] && player.x > 0) player.x -= player.speed;
      if (keys["ArrowRight"] && player.x + player.size < canvas.width) player.x += player.speed;
    }

    function checkCollisions() {
      const playerRect = { x: player.x, y: player.y, w: player.size, h: player.size };

      // Trap collision
      for (let trap of traps) {
        if (
          playerRect.x < trap.x + trap.w &&
          playerRect.x + playerRect.w > trap.x &&
          playerRect.y < trap.y + trap.h &&
          playerRect.y + playerRect.h > trap.y
        ) {
          gameOver = true;
          gameOverSound.play();
          if (score > highScore) {
            localStorage.setItem("highScore", score);
            highScore = score;
          }
          break;
        }
      }

      // Point collision
      for (let i = points.length - 1; i >= 0; i--) {
        const p = points[i];
        const dx = player.x + player.size / 2 - p.x;
        const dy = player.y + player.size / 2 - p.y;
        if (Math.sqrt(dx * dx + dy * dy) < player.size / 2 + p.r) {
          points.splice(i, 1);
          score++;
          pointSound.currentTime = 0;
          pointSound.play();
        }
      }

      if (points.length === 0) {
        createPoints(5);
      }
    }

    function drawScore() {
      ctx.fillStyle = "white";
      ctx.font = "20px Arial";
      ctx.fillText("Score: " + score, 20, 30);
      ctx.fillText("High Score: " + highScore, 650, 30);
    }

    function drawGameOver() {
      ctx.fillStyle = "red";
      ctx.font = "50px Arial";
      ctx.fillText("GAME OVER", 250, 300);
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

    createTraps(5);
    createPoints(5);
    gameLoop();

    window.addEventListener("keydown", e => keys[e.key] = true);
    window.addEventListener("keyup", e => keys[e.key] = false);
  </script>
</body>
</html>
