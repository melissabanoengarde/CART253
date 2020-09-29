/**************************************************
Exercise 02: Dodge-Em
Melissa Banoen-Garde

Dodge asteroid, we must.
**************************************************/
let spaceShip;

let asteroid;

function preload() {
  spaceShip = loadImage("assets/images/spaceship.png");
  asteroid = loadImage("assets/images/asteroid.png");
}


//VARIABLES
let user = {
  x: 0,
  y: 250,
  size: 60,
  vx: 0,
  vy: 0,
  ax: 0,
  ay: 0,
  acceleration: 1,
  maxSpeed: 7
}

let obstacle = {
  x: 0,
  y: 250,
  size: 100,
  vx: 0,
  vy: 0,
  speed: 20
}

let star = {
  r:0,
  g:0,
  b:0
}

 let numStatic = 500;

//SETUP******************************************/

function setup() {

  createCanvas(windowWidth, windowHeight);

  obstacle.y = random(0, height);
  obstacle.vx = obstacle.speed;

  // noCursor();
}

//DRAW********************************************/

function draw() {

  background(5, 10, 21);

  //STARS
  for (let i = 0; i < numStatic; i++) {
    let x = random(0, width);
    let y = random(0, height);
    noStroke();
    fill(star.r,star.g,star.b);
    star.r = random(200,255);
    star.g = random(160,255);
    star.b = random(20,220);
    ellipse(x,y,2);
  }


  //USER'S SPACESHIP
  //Movement
  if (mouseX < user.x) {
    user.ax = -user.acceleration;
  } else {
    user.ax = user.acceleration;
  }

  if (mouseY < user.y) {
    user.ay = -user.acceleration;
  } else {
    user.ay = user.acceleration;
  }

  user.vx += user.ax;
  user.vx = constrain(user.vx, -user.maxSpeed, user.maxSpeed);
  user.vy += user.ay;
  user.vy = constrain(user.vy, -user.maxSpeed, user.maxSpeed);

  user.x += user.vx;
  user.y += user.vy;

  //Display
  image(spaceShip, user.x, user.y, 100, 100);



  //ASTEROID
  //Movement
  obstacle.x += obstacle.vx;
  obstacle.y += obstacle.vy;

  if (obstacle.x > windowWidth) {
    obstacle.x = 0;
    obstacle.y = random(0, windowHeight);
  }

  //Display
  noStroke();
  image(asteroid, obstacle.x, obstacle.y, 100, 100);
  image(asteroid, obstacle.x + 500, obstacle.y - 400, 150, 150);
  image(asteroid, obstacle.x - 500, obstacle.y + 500, 140, 140);



  //CRASH
  let d = dist(user.x, user.y, obstacle.x, obstacle.y);
  let d2 = dist(user.x, user.y, obstacle.x + 500, obstacle.y - 400);
  let d3 = dist(user.x, user.y, obstacle.x - 500, obstacle.y + 500);
  if (d < obstacle.size / 2 + user.size / 2 || d2 < obstacle.size / 2 + user.size / 2 || d3 < obstacle.size / 2 + user.size / 2) {
    noLoop();
  }



}
