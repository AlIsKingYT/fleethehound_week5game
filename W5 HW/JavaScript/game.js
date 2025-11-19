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
  { x: 1700, y: 400, w: 300, h: 600 },

  //Border Wall
   { x: 0, y: 0, w: 300, h: 5 },
   { x: 0, y: 0, w: 5, h: 1000 },
   { x: 0, y: 880, w: 1700, h: 5 },
   { x: 1875, y: 100, w: 5, h: 300 }

];

//Player
var playerImage = new Image();
playerImage.src = 'images/player.png';

var player = {
  x: 10,
  y: 785,
  w: 50,
  h: 70,
  speed: 5
};

let nextX = player.x;
let nextY = player.y;

//Hound
var houndImage = new Image();
houndImage.src = 'images/hound.png';

var hound = {
  x: 709,
  y: 78,
  w: 250,
  h: 165,
};

//Almond
var almondImage = new Image();
almondImage.src = 'images/almond.gif';

var almond = {
  x: 1335,
  y: 798,
  w: 150,
  h: 85,
};

var almondCollected = false;

//Keys
var key01 = new Image();
key01.src = 'images/key01.png';

var key02 = new Image();
key02.src = 'images/key02.png';

var key03 = new Image();
key03.src = 'images/key03.png';

var finalKey = new Image();
finalKey.src = 'images/finalkey.png';

var key01Image = {
  x: 30,
  y: 50,
  w: 60,
  h: 30,
};

var key02Image = {
  x: 825,
  y: 785,
  w: 60,
  h: 30,
};

var key03Image = {
  x: 1780,
  y: 320,
  w: 60,
  h: 30,
};

var keyFinalImage = {
  x: 10,
  y: 600,
  w: 60,
  h: 30,
};

var collectedKeys = {
  key01: false,
  key02: false,
  key03: false,
  finalKey: false
};

function checkKeyPickup() {
  if (!collectedKeys.key01 && isColliding(player, key01Image)) collectedKeys.key01 = true;
  if (!collectedKeys.key02 && isColliding(player, key02Image)) collectedKeys.key02 = true;
  if (!collectedKeys.key03 && isColliding(player, key03Image)) collectedKeys.key03 = true;
  if (!collectedKeys.finalKey && isColliding(player, keyFinalImage)) collectedKeys.finalKey = true;
}

function checkAlmondPickup() {
  if (!almondCollected && isColliding(player, almond)) {
    almondCollected = true;
    window.location.href = "https://www.youtube.com/watch?v=izPVtcnftiQ&t=2s";
  }
}

function isColliding(rect1, rect2) {
  return (
    rect1.x < rect2.x + rect2.w &&
    rect1.x + rect1.w > rect2.x &&
    rect1.y < rect2.y + rect2.h &&
    rect1.y + rect1.h > rect2.y
  );
}

// Doors
var door01A = new Image();
door01A.src = 'images/door01a.png';

var door01B = new Image();
door01B.src = 'images/door01b.png';

var door02 = new Image();
door02.src = 'images/door02.png';

var door03 = new Image();
door03.src = 'images/door03.png';

var finalDoor = new Image();
finalDoor.src = 'images/finaldoor.png';

var door01AImage = {
  x: 650,
  y: 569,
  w: 70,
  h: 141,
};

var door01BImage = {
  x: 1000,
  y: 570,
  w: 70,
  h: 141,
};

var door02Image = {
  x: 1682,
  y: 109,
  w: 70,
  h: 141,
};

var door03Image = {
  x: 100,
  y: 300,
  w: 70,
  h: 171,
};

var finalDoorImage = {
  x: 1300,
  y: 717,
  w: 201,
  h: 80,
};

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

  checkKeyPickup();

  checkAlmondPickup();

  ctx.clearRect(0, 0, c.width, c.height);

  let nextX = player.x;
  let nextY = player.y;

  if (w) nextY -= player.speed;
  if (s) nextY += player.speed;
  if (a) nextX -= player.speed;
  if (d) nextX += player.speed;

  let collides = false;
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

  if (!collides) {
    if (!collectedKeys.key01) {
      if (
        nextX < door01AImage.x + door01AImage.w &&
        nextX + player.w > door01AImage.x &&
        nextY < door01AImage.y + door01AImage.h &&
        nextY + player.h > door01AImage.y
      ) collides = true;

      if (
        nextX < door01BImage.x + door01BImage.w &&
        nextX + player.w > door01BImage.x &&
        nextY < door01BImage.y + door01BImage.h &&
        nextY + player.h > door01BImage.y
      ) collides = true;
    }

    if (!collectedKeys.key02) {
      if (
        nextX < door02Image.x + door02Image.w &&
        nextX + player.w > door02Image.x &&
        nextY < door02Image.y + door02Image.h &&
        nextY + player.h > door02Image.y
      ) collides = true;
    }

    if (!collectedKeys.key03) {
      if (
        nextX < door03Image.x + door03Image.w &&
        nextX + player.w > door03Image.x &&
        nextY < door03Image.y + door03Image.h &&
        nextY + player.h > door03Image.y
      ) collides = true;
    }

    if (!collectedKeys.finalKey) {
      if (
        nextX < finalDoorImage.x + finalDoorImage.w &&
        nextX + player.w > finalDoorImage.x &&
        nextY < finalDoorImage.y + finalDoorImage.h &&
        nextY + player.h > finalDoorImage.y
      ) collides = true;
    }
  }

  // Only update position if no collision
  if (!collides) {
    player.x = nextX;
    player.y = nextY;
  }

  for (var i = 0; i < walls.length; i++) {
    ctx.fillRect(walls[i].x, walls[i].y, walls[i].w, walls[i].h);
  }

  ctx.drawImage(playerImage, player.x, player.y, player.w, player.h);
  
  ctx.drawImage(houndImage, hound.x, hound.y, hound.w, hound.h);

  if (!almondCollected) ctx.drawImage(almondImage, almond.x, almond.y, almond.w, almond.h);

  if (!collectedKeys.key01) ctx.drawImage(key01, key01Image.x, key01Image.y, key01Image.w, key01Image.h);

  if (!collectedKeys.key02) ctx.drawImage(key02, key02Image.x, key02Image.y, key02Image.w, key02Image.h);

  if (!collectedKeys.key03) ctx.drawImage(key03, key03Image.x, key03Image.y, key03Image.w, key03Image.h);

  if (!collectedKeys.finalKey) ctx.drawImage(finalKey, keyFinalImage.x, keyFinalImage.y, keyFinalImage.w, keyFinalImage.h);

  if (!collectedKeys.key01) ctx.drawImage(door01A, door01AImage.x, door01AImage.y, door01AImage.w, door01AImage.h);

  if (!collectedKeys.key01) ctx.drawImage(door01B, door01BImage.x, door01BImage.y, door01BImage.w, door01BImage.h);

  if (!collectedKeys.key02) ctx.drawImage(door02, door02Image.x, door02Image.y, door02Image.w, door02Image.h);

  if (!collectedKeys.key03) ctx.drawImage(door03, door03Image.x, door03Image.y, door03Image.w, door03Image.h);

  if (!collectedKeys.finalKey) ctx.drawImage(finalDoor, finalDoorImage.x, finalDoorImage.y, finalDoorImage.w, finalDoorImage.h);
}