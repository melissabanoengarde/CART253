/**************************************************
Exercise 02: Dodge-Em
Melissa Banoen-Garde

Dodge asteroid, we must.
**************************************************/
let spaceShip;

let asteroid;

let asteroid2;

let meteoroid;

function preload() {
  spaceShip = loadImage("assets/images/spaceship.png");
  asteroid = loadImage("assets/images/asteroid.png");
  asteroid2 = loadImage("assets/images/asteroid2.png");
  meteoroid = loadImage("assets/images/meteoroid.png");
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
  speed: 12
}

let obstacle2 = {
  x: 0,
  y: 250,
  size: 100,
  vx: 0,
  vy: 0,
  speed: 15
}

let obstacle3 = {
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

  obstacle2.y = random(0, height);
  obstacle2.vx = obstacle2.speed;

  obstacle3.y = random(0, height);
  obstacle3.vx = obstacle3.speed;

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



  //ASTEROID 1
  //Movement
  obstacle.x += obstacle.vx;
  obstacle.y += obstacle.vy;


  if (obstacle.x > windowWidth) {
    obstacle.x = 0;
    obstacle.y = random(0, windowHeight);
  }

  //Display
  image(asteroid, obstacle.x, obstacle.y, 180, 180);


  //ASTEROID 2
  //Movement
  obstacle2.x += obstacle2.vx;
  obstacle2.y += obstacle2.vy;

  if (obstacle2.x > windowWidth) {
    obstacle2.x = 0;
    obstacle2.y = random(0, windowHeight);
  }

  //Display
  image(asteroid2, obstacle2.x, obstacle2.y, 130, 130);



  // ASTEROID 2
  // Movement
  obstacle3.x += obstacle3.vx;
  obstacle3.y += obstacle3.vy;

  if (obstacle3.x > windowWidth) {
    obstacle3.x = 0;
    obstacle3.y = random(0, windowHeight);
  }

  //Display
  image(meteoroid, obstacle3.x, obstacle3.y, 150, 150);



  //CRASH
  let d = dist(user.x, user.y, obstacle.x, obstacle.y);
  let d2 = dist(user.x, user.y, obstacle2.x, obstacle2.y);
  let d3 = dist(user.x, user.y, obstacle3.x, obstacle3.y);
  if (d < obstacle.size / 2 + user.size / 2 || d2 < obstacle2.size / 2 + user.size / 2 || d3 < obstacle3.size/2.5 + user.size/2.5) {
    noLoop();
  }



}
