//Canvas
var c = document.querySelector('#myCanvas');
var ctx = c.getContext('2d');

//Player
var playerImage = new Image();
playerImage.src = 'images/player.png';

var player = {
  x: 10,
  y: 765,
  w: 169,
  h: 121,
  speed: 3.5
};

window.onload = function() {
    document.getElementById('popup-overlay').style.display = 'block';
    document.getElementById('popup-box').style.display = 'block';
};

document.getElementById('close-popup').onclick = function() {
    document.getElementById('popup-overlay').style.display = 'none';
    document.getElementById('popup-box').style.display = 'none';
};

//Walls and rooms
var walls = [
  //Room 1
  { x: 0, y: 700, w: 150, h: 60 },
  { x: 100, y: 470, w: 50, h: 290 },
  { x: 100, y: 160, w: 50, h: 140 },
  { x: 0, y: 130, w: 150, h: 60 },

  // Wall 1
  { x: 300, y: 0, w: 1700, h: 110 },

  // Obstacle
  { x: 270, y: 370, w: 250, h: 200 },

  // Room 2
  { x: 670, y: 710, w: 50, h: 290 },
  { x: 670, y: 420, w: 50, h: 150 },
  { x: 670, y: 420, w: 350, h: 50 },
  { x: 1000, y: 420, w: 50, h: 150 },
  { x: 1000, y: 710, w: 50, h: 290 },

  // Room 3
  { x: 1300, y: 350, w: 50, h: 150 },
  { x: 1300, y: 330, w: 50, h: 120 },
  { x: 1300, y: 405, w: 180, h: 45 },
  { x: 1435, y: 435, w: 45, h: 165 },
  { x: 1470, y: 555, w: 130, h: 45 },

  // Room 4
  { x: 1700, y: 250, w: 50, h: 150 },

  // Exit
  { x: 1000, y: 745, w: 300, h: 50 },
  { x: 1500, y: 745, w: 300, h: 50 },

  // Wall 2
  { x: 1700, y: 400, w: 300, h: 600 }
];

playerImage.onload = function () {
  setInterval(main, 1000 / 60);
};

function main() {

  ctx.clearRect(0, 0, c.width, c.height);

  for (var i = 0; i < walls.length; i++) {
    ctx.fillRect(walls[i].x, walls[i].y, walls[i].w, walls[i].h);
  }

  if (w) player.y -= player.speed;
  if (s) player.y += player.speed;
  if (a) player.x -= player.speed;
  if (d) player.x += player.speed;

  ctx.drawImage(playerImage, player.x, player.y, player.w, player.h);
}