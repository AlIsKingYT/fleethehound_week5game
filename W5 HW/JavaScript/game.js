//Canvas
var c = document.querySelector('#myCanvas');
var ctx = c.getContext('2d');


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

if (w) nextY -= player.speed;
if (s) nextY += player.speed;
if (a) nextX -= player.speed;
if (d) nextX += player.speed;



//Player
var playerImage = new Image();
playerImage.src = 'images/player.png';

var player = {
  x: 10,
  y: 765,
  w: 160,
  h: 110,
  speed: 3.5
};


let nextX = player.x;
let nextY = player.y;


//Walls and rooms


// Check for collisions with each wall


for (var i = 0; i < walls.length; i++) {
  ctx.fillStyle = "black";
  ctx.fillRect(walls[i].x, walls[i].y, walls[i].w, walls[i].h);
}


// Only update position if no collision
if (!collides) {
  player.x = nextX;
  player.y = nextY;
}


  


playerImage.onload = function () {
  setInterval(main, 1000 / 60);
};

var collides = false;
//MAin Function
function main() {



for (let i = 0; i < walls.length; i++) {
  const wall = walls[i];
  if (
    nextX < wall.x + wall.w &&
    nextX + player.w > wall.x &&
    nextY < wall.y + wall.h &&
    nextY + player.h > wall.y
  ) {
    collides = true;
    break;
  }
}

// Only update position if no collision
if (!collides) {
  player.x = nextX;
  player.y = nextY;
}



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