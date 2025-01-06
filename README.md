<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Alphabet Bird Game</title>
  <style>
    body {
      margin: 0;
      overflow: hidden;
      background-color: #87ceeb;
      font-family: Arial, sans-serif;
    }

    .game-container {
      position: relative;
      width: 100vw;
      height: 100vh;
      overflow: hidden;
    }

    .bird {
      position: absolute;
      width: 40px;
      height: 40px;
      background-color: yellow;
      border-radius: 50%;
      top: 50%;
      left: 20%;
      transform: translate(-50%, -50%);
    }

    .column {
      position: absolute;
      width: 80px;
      height: 100vh;
      background-color: green;
      top: 0;
      animation: moveColumns 4s linear infinite;
    }

    .column1 {
      left: 50%;
    }

    .column2 {
      left: 75%;
    }

    .letter {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      font-size: 24px;
      font-weight: bold;
      color: white;
    }

    @keyframes moveColumns {
      from {
        transform: translateX(100%);
      }
      to {
        transform: translateX(-100%);
      }
    }
  </style>
</head>
<body>
  <div class="game-container">
    <div class="bird"></div>
    <div class="column column1">
      <span class="letter">A</span>
    </div>
    <div class="column column2">
      <span class="letter">B</span>
    </div>
  </div>
  <script>
    const bird = document.querySelector('.bird');
    const columns = document.querySelectorAll('.column');
    let birdPosition = window.innerHeight / 2;
    let gravity = 2;
    let letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split('');
    let currentLetterIndex = 0;

    function updateBirdPosition() {
      birdPosition += gravity;
      bird.style.top = `${birdPosition}px`;

      if (birdPosition + bird.offsetHeight > window.innerHeight) {
        resetGame();
      }
    }

    function resetGame() {
      alert("Game Over!");
      birdPosition = window.innerHeight / 2;
      currentLetterIndex = 0;
      updateLetters();
    }

    function flapBird() {
      birdPosition -= 50; // ارتفاع الطائر عند الضغط
    }

    function updateColumns() {
      columns.forEach((column) => {
        const randomGap = Math.random() * 200 - 100;
        column.style.top = `${randomGap}px`;
      });
    }

    function updateLetters() {
      columns.forEach((column, index) => {
        const letter = column.querySelector('.letter');
        letter.textContent = letters[(currentLetterIndex + index) % letters.length];
      });
      currentLetterIndex++;
    }

    function gameLoop() {
      updateBirdPosition();
      requestAnimationFrame(gameLoop);
    }

    document.addEventListener('keydown', flapBird);
    document.addEventListener('click', flapBird);

    updateLetters();
    updateColumns();
    gameLoop();
  </script>
</body>
</html>
