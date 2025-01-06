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
      background-image: url('https://via.placeholder.com/40'); /* صورة الطائر */
      background-size: cover;
      border-radius: 50%;
      top: 50%;
      left: 20%;
      transform: translate(-50%, -50%);
    }

    .column {
      position: absolute;
      width: 80px;
      height: 200px;
      background-color: green;
      border: 2px solid #006400;
      border-radius: 10px;
      animation: moveColumns 4s linear infinite;
    }

    .letter {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      font-size: 32px;
      font-weight: bold;
      color: white;
      text-shadow: 2px 2px 2px #000;
    }

    .score {
      position: absolute;
      top: 10px;
      left: 10px;
      font-size: 24px;
      color: #fff;
      text-shadow: 2px 2px 2px #000;
    }

    @keyframes moveColumns {
      from {
        transform: translateX(100vw);
      }
      to {
        transform: translateX(-100vw);
      }
    }
  </style>
</head>
<body>
  <div class="game-container">
    <div class="score">Score: 0</div>
    <div class="bird"></div>
  </div>
  <script>
    const bird = document.querySelector('.bird');
    const gameContainer = document.querySelector('.game-container');
    const scoreDisplay = document.querySelector('.score');
    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split('');
    let birdPosition = window.innerHeight / 2;
    let gravity = 2;
    let score = 0;
    let currentLetterIndex = 0;

    function createColumn() {
      const column = document.createElement('div');
      column.classList.add('column');
      column.style.top = `${Math.random() * (window.innerHeight - 200)}px`;
      column.style.left = '100vw';

      const letter = document.createElement('span');
      letter.classList.add('letter');
      letter.textContent = letters[currentLetterIndex];
      currentLetterIndex = (currentLetterIndex + 1) % letters.length;
      column.appendChild(letter);

      gameContainer.appendChild(column);

      column.addEventListener('animationend', () => {
        column.remove();
      });
    }

    function updateBirdPosition() {
      birdPosition += gravity;
      bird.style.top = `${birdPosition}px`;

      if (birdPosition + bird.offsetHeight > window.innerHeight || birdPosition < 0) {
        resetGame();
      }
    }

    function resetGame() {
      alert(`Game Over! Your score: ${score}`);
      birdPosition = window.innerHeight / 2;
      score = 0;
      scoreDisplay.textContent = `Score: ${score}`;
      gameContainer.querySelectorAll('.column').forEach(col => col.remove());
    }

    function flapBird() {
      birdPosition -= 50;
    }

    function checkCollision() {
      const columns = document.querySelectorAll('.column');
      columns.forEach(column => {
        const columnRect = column.getBoundingClientRect();
        const birdRect = bird.getBoundingClientRect();

        if (
          birdRect.right > columnRect.left &&
          birdRect.left < columnRect.right &&
          birdRect.bottom > columnRect.top &&
          birdRect.top < columnRect.bottom
        ) {
          const letter = column.querySelector('.letter').textContent;
          if (letter === letters[(currentLetterIndex - 1 + letters.length) % letters.length]) {
            score++;
            scoreDisplay.textContent = `Score: ${score}`;
            column.remove();
          } else {
            resetGame();
          }
        }
      });
    }

    function gameLoop() {
      updateBirdPosition();
      checkCollision();
      requestAnimationFrame(gameLoop);
    }

    document.addEventListener('keydown', flapBird);
    document.addEventListener('click', flapBird);

    setInterval(createColumn, 2000);
    gameLoop();
  </script>
</body>
</html>
