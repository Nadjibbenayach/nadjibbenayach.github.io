// game.js
const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');
const statusText = document.getElementById('status');
const rollBtn = document.getElementById('rollDice');

// تعريف المسارات (مواقع المربعات على الشاشة)
const path = [
    {x: 50, y: 50}, {x: 150, y: 50}, {x: 250, y: 50}, {x: 350, y: 50}, 
    {x: 350, y: 150}, {x: 350, y: 250}, {x: 250, y: 250}, {x: 150, y: 250},
    {x: 50, y: 250}, {x: 50, y: 150}
];

// تعريف اللاعبين
let players = [
    { id: 1, pos: 0, color: 'red', score: 0 },
    { id: 2, pos: 0, color: 'blue', score: 0 },
    { id: 3, pos: 0, color: 'green', score: 0 }
];

let turn = 0; // دور اللاعب الأول (0)

function drawBoard() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    // رسم المربعات
    path.forEach((spot, index) => {
        ctx.fillStyle = "#bdc3c7";
        ctx.fillRect(spot.x, spot.y, 40, 40);
        ctx.strokeRect(spot.x, spot.y, 40, 40);
    });

    // رسم اللاعبين
    players.forEach((p, index) => {
        ctx.fillStyle = p.color;
        // إزاحة بسيطة لكل لاعب لكي لا يختفوا خلف بعضهم
        ctx.beginPath();
        ctx.arc(path[p.pos].x + 20, path[p.pos].y + 20 - (index * 5), 10, 0, Math.PI * 2);
        ctx.fill();
    });
}

rollBtn.onclick = () => {
    let roll = Math.floor(Math.random() * 6) + 1;
    players[turn].pos = (players[turn].pos + roll) % path.length;
    
    statusText.innerText = `اللاعب ${turn + 1} رمى ${roll} وانتقل!`;
    
    // تغيير الدور
    turn = (turn + 1) % 3;
    drawBoard();
};

drawBoard();
