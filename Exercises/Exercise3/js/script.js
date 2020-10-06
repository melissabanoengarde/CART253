/**************************************************
Exercise 03: Love, Actually
Melissa Banoen-Garde

WEEK 05: FUNCTIONS
CART 253 - B
OCT. 2020

Busy bee must reach his prized hibiscus but wait...
angry birds?
**************************************************/

// Variables
let beeImg;
let bee = {
  x: 760,
  y: 250,
  size: 100,
  vx: 0,
  vy: 0,
  speed: 5.5,
  img: beeImg
};

let bird1Img;
let bird1 = {
  x: 20,
  y: 200,
  size: 100,
  vx: 0,
  vy: 0,
  speed: 3,
  img: bird1Img
};

let bird2Img;
let bird2 = {
  x: 50,
  y: 300,
  size: 100,
  vx: 0,
  vy: 0,
  speed: 3,
  img: bird2Img
};

let bird3Img;
let bird3 = {
  x: 30,
  y: 100,
  size: 100,
  vx: 0,
  vy: 0,
  speed: 2.5,
  img: bird3Img
};

let bird4Img;
let bird4 = {
  x: 20,
  y: 250,
  size: 100,
  vx: 0,
  vy: 0,
  speed: 3.5,
  img: bird4Img
};

let hibiscusImg;
let hibiscus = {
  x: 70,
  y: 420,
  size: 200,
  vx: 0,
  vy: 0,
  img: hibiscusImg
};

let bg;
let bgLeft = 0;
let bgRight = 800;
let bgSpeed = 2;


function preload() {
  bg = loadImage('assets/images/bg.png');
  beeImg = loadImage('assets/images/bee.png');
  bird1Img = loadImage('assets/images/bird1.png');
  bird2Img = loadImage('assets/images/bird2.png');
  bird3Img = loadImage('assets/images/bird3.png');
  bird4Img = loadImage('assets/images/bird4.png');
  hibiscusImg = loadImage('assets/images/hibiscus.png');
}


let state = `title`;


function setup() {
  createCanvas(800, 500);
  setupBirds();
  hibiscusAppearance();
}

function setupBirds() {
  //Bird 1
  bird1.vx = bird1.speed;
  bird1.vy = bird1.speed;

  //Bird 2
  bird2.vx = bird2.speed;
  bird2.vy = bird2.speed;

  //Bird 3
  bird3.vx = bird3.speed;
  bird3.vy = bird3.speed;

  //Bird 4
  bird4.vx = bird4.speed;
  bird4.vy = bird4.speed;
}

function hibiscusAppearance() {
  hibiscus.x += hibiscus.vx;
  hibiscus.y += hibiscus.vy;
}

function draw() {

  if (state === `title`) {
    title();
  } else if (state === `simulation`) {
    simulation();
  } else if (state === `ggwp`) {
    ggwp();
  } else if (state === `badgame`) {
    badgame();
  }
}

function keyPressed() {
  if (state === `title`) {
    state = `simulation`;
  }
}

function title() {
  push();
  textSize(40);
  fill(255, 219, 88);
  textAlign(CENTER, CENTER);
  text(`To Bee or Not to Bee?`, width / 2, height / 2);
  pop();

  push();
  let instru = 'Instructions: A = Left, D = Right, W = Up, S = Down';
  textSize(20);
  fill(255, 219, 88);
  textAlign(CENTER, BOTTOM);
  text(instru, width / 2, height - 200);
  pop();

  push();
  textSize(16);
  fill(255, 219, 88);
  textAlign(CENTER, BOTTOM);
  text(`Press any key to begin`, width / 2, height-150);
  pop();
}

function simulation() {
  beeMove();
  birdsJitteryMovement();
  handleInput();
  scrollingBackground(); //remember, order MATTERS
  overLap();
  display();
}

function ggwp() {
  push();
  textSize(40);
  fill(255, 219, 88);
  textAlign(CENTER, CENTER);
  text(`GGWP, BOSS.`, width / 2, height / 2);
  pop();
}

function badgame() {
  push();
  textSize(40);
  fill(255, 219, 88);
  textAlign(CENTER, CENTER);
  text(`BG-BUT, STILL-WP, BOSS.`, width / 2, height / 2);
  pop();
}


// Bee's key info (AWSD)
function handleInput() {
  // Bee movements
  if (keyIsDown(65)) {
    bee.vx = -bee.speed;
  } else if (keyIsDown(68)) {
    bee.vx = bee.speed;
  } else {
    bee.vx = 0;
  }

  if (keyIsDown(87)) {
    bee.vy = -bee.speed;
  } else if (keyIsDown(83)) {
    bee.vy = bee.speed;
  } else {
    bee.vy = 0;
  }
}

function beeMove() {
  bee.x += bee.vx;
  bee.y += bee.vy;
}

function birdsJitteryMovement() {
  let change = random();
  if (change < 1) {
    // Bird 1
    bird1.x += bird1.vx;
    bird1.y += bird1.vy;
    bird1.vx = random(bird1.speed, bird1.speed);
    bird1.vy = random(-bird1.speed, bird1.speed);

    // Bird 2
    bird2.x += bird2.vx;
    bird2.y += bird2.vy;
    bird2.vx = random(bird2.speed, bird2.speed);
    bird2.vy = random(-bird2.speed, bird2.speed);

    // Bird 3
    bird3.x += bird3.vx;
    bird3.y += bird3.vy;
    bird3.vx = random(bird3.speed, bird3.speed);
    bird3.vy = random(-bird3.speed, bird3.speed);

    // Bird 4
    bird4.x += bird4.vx;
    bird4.y += bird4.vy;
    bird4.vx = random(bird4.speed, bird4.speed);
    bird4.vy = random(-bird4.speed, bird4.speed);
  }

  birdsChasingBee();
}

function birdsChasingBee() { //Birds 1 and 3 gravitating towards bee
  // Bird 3
  let dx = bird1.x - bee.x;
  let dy = bird1.y - bee.y;

  if (dx < 0) {
    bird1.vx = bird1.speed;
  } else if (dx > 0) {
    bird1.vx = -bird1.speed;
  }

  if (dy < 0) {
    bird1.vy = bird1.speed;
  } else if (dy > 0) {
    bird1.vy = -bird1.speed;
  }

  // Bird 3
  let d2x = bird3.x - bee.x;
  let d2y = bird3.y - bee.y;

  if (d2x < 0) {
    bird3.vx = bird3.speed;
  } else if (d2x > 0) {
    bird3.vx = -bird3.speed;
  }

  if (d2y < 0) {
    bird3.vy = bird3.speed;
  } else if (d2y > 0) {
    bird3.vy = -bird3.speed;
  }
}


function scrollingBackground() {
  // Background Scrolling
  imageMode(CORNER);
  image(bg, bgLeft, 0, width, height); // Left
  image(bg, bgRight, 0, width, height); // Right

  bgLeft -= bgSpeed;
  bgRight -= bgSpeed;

  if (bgLeft < -width) {
    bgLeft = bgRight + width;
  }
  if (bgRight < -width) {
    bgRight = bgLeft - bgRight;
  }
}

//Determines whether the user wins or lose
function overLap() {
  let d = dist(bee.x, bee.y, bird1.x, bird1.y);
  let d2 = dist(bee.x, bee.y, bird2.x, bird2.y);
  let d3 = dist(bee.x, bee.y, bird3.x, bird3.y);
  let d4 = dist(bee.x, bee.y, bird4.x, bird4.y);
  let d5 = dist(bee.x, bee.y, hibiscus.x, hibiscus.y);

  //Lose
  if (d < bird1.size / 3 + bee.size / 3 || d2 < bird2.size / 3 + bee.size / 3 || d3 < bird3.size / 3 + bee.size / 3 || d4 < bird4.size / 3 + bee.size / 3) {
    state = `badgame`;
  }

  //Win
  if (d5 < hibiscus.size / 8 + bee.size / 8) {
    state = `ggwp`;
  }
}

// Display of bee and birds
function display() {
  imageMode(CENTER);
  image(hibiscusImg, hibiscus.x, hibiscus.y, hibiscus.size, hibiscus.size);
  image(beeImg, bee.x, bee.y, bee.size, bee.size);
  image(bird1Img, bird1.x, bird1.y, bird1.size, bird1.size);
  image(bird2Img, bird2.x, bird2.y, bird2.size, bird2.size);
  image(bird3Img, bird3.x, bird3.y, bird3.size, bird3.size);
  image(bird4Img, bird4.x, bird4.y, bird4.size, bird4.size);

  // ellipse(bird2.x, bird2.y, bird2.size);
}
