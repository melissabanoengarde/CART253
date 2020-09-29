/**************************************************
Exercise 02: Dodge-Em
Melissa Banoen-Garde

Dodge asteroid, we must.
**************************************************/
let spaceShip;

let asteroid;

let asteroid2;

let meteoroid;

let asteroid3;

function preload() {
  spaceShip = loadImage("assets/images/spaceship.png");
  asteroid = loadImage("assets/images/asteroid.png");
  asteroid2 = loadImage("assets/images/asteroid2.png");
  meteoroid = loadImage("assets/images/meteoroid.png");
  asteroid3 = loadImage("assets/images/asteroid3.png");
}


//VARIABLES
let user = {
  x: 250,
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
  speed: 15,
  acceleration: 2
}

let obstacle2 = {
  x: 0,
  y: 100,
  size: 170,
  vx: 0,
  vy: 0,
  speed: 20
}

let obstacle3 = {
  x: 0,
  y: 450,
  size: 100,
  vx: 0,
  vy: 0,
  speed: 25
}

let obstacle4 = {
  x: 0,
  y: 250,
  size: 100,
  vx: 0,
  vy: 0,
  speed: 15,
  acceleration: 2
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

  obstacle4.y = random(0, height);
  obstacle4.vx = obstacle4.speed;

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
  image(spaceShip, user.x, user.y, 120, 120);


//OBSTACLES....
  //ASTEROID 1
  //Movement
  obstacle.x -= obstacle.vx;
  obstacle.speed += obstacle.acceleration;
  obstacle.y -= obstacle.vy;


  if (obstacle.x < -windowWidth) {
    obstacle.x = windowWidth;
    obstacle.y = random(0, windowHeight);
  }

  //Display
  image(asteroid, obstacle.x, obstacle.y, 200, 200);



  //ASTEROID 2
  //Movement
  obstacle2.x += obstacle2.vx;
  // obstacle2.speed += obstacle2.acceleration;
  obstacle2.y += obstacle2.vy;

  if (obstacle2.x > windowWidth) {
    obstacle2.x = 0;
    obstacle2.y = random(0, windowHeight);
  }

  //Display
  imageMode(CENTER);
  image(asteroid2, obstacle2.x, obstacle2.y, 170, 170);
  ellipse(obstacle2.x, obstacle2.y, obstacle2.size);    //to configure d2



  //METEOROID
  // Movement
  obstacle3.x += obstacle3.vx;
  obstacle3.y += obstacle3.vy;

  if (obstacle3.x > windowWidth) {
    obstacle3.x = 0;
    obstacle3.y = random(0, windowHeight);
  }

  //Display
  image(meteoroid, obstacle3.x, obstacle3.y, 150, 150);


  //ASTEROID 3
  //Movement
  obstacle4.x -= obstacle4.vx;
  obstacle4.speed += obstacle4.acceleration;
  obstacle4.y -= obstacle4.vy;

  if (obstacle4.x < -windowWidth) {
    obstacle4.x = windowWidth;
    // obstacle4.y = 100;
    obstacle4.y = random(0, windowHeight);
  }

  //Display
  image(asteroid3, obstacle4.x, obstacle4.y, 200, 200);



  //CRASH
  let d = dist(user.x, user.y, obstacle.x, obstacle.y);
  let d2 = dist(user.x, user.y, obstacle2.x, obstacle2.y);
  let d3 = dist(user.x, user.y, obstacle3.x, obstacle3.y);
  let d4 = dist(user.x, user.y, obstacle4.x, obstacle4.y);
  if (d < obstacle.size / 2 + user.size / 2 || d2 < obstacle2.size / 2 + user.size / 2 || d3 < obstacle3.size/2.5 + user.size/2.5 || d4 < obstacle4.size/2 + user.size/2) {
    noLoop();
  }



}
