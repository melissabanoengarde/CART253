/**************************************************
Activity 05: Looking for Love
Melissa Banoen-Garde

Activity 05 implements all that which we've learned
about functions, in week 5.

Objective: 1 - Use states to manage your program
           2 - Use functions to organize your program
           3 - Write a function with a parameter and return value
**************************************************/

// Circle 1
let c1 = {
  x: undefined,
  y: 250,
  size: 100,
  vx: 0,
  vy: 0,
  speed: 5
};

// Circle 2
let c2 = {
  x: undefined,
  y: 250,
  size: 100,
  vx: 0,
  vy: 0,
  speed: 5
};

let state = `title`; //(will also be title, love, and sadness depending on what happens in the program.)


function setup() {
  createCanvas(500, 500);
  setupCircles();
}


function setupCircles() {
  c1.x = width / 3; 
  c2.x = 2 * width / 3;

  c1.vx = random(-c1.speed, c1.speed);
  c1.vy = random(-c1.speed, c1.speed);
  c2.vx = random(-c2.speed, c2.speed);
  c2.vy = random(-c2.speed, c2.speed);
}


function draw() {
  background(0);

  if (state === `title`) {
    title();
  }
  else if (state === `simulation`) { // do NOT forget else if concept
    simulation();
  }
  else if (state === `love`) {
    love();
  }
  else if (state === `sadness`) {
    sadness();
  }
}


function mousePressed() {
  if (state === `title`) {
    state = `simulation`;
  }
}


function title() {
  push();
  textSize(40);
  fill(255, 0, 0);
  textAlign(CENTER, CENTER);
  text(`To Love or Not to Love?`, width / 2, height / 2);
  pop();
}

function simulation() {
  move();
  checkOffScreen();
  checkOverlap();
  display();
}

function love() {
  push();
  textSize(40);
  fill(255, 0, 0);
  textAlign(CENTER, CENTER);
  text(`To Love! uwu`, width / 2, height / 2);
  pop();
}

function sadness() {
  push();
  textSize(40);
  fill(0, 0, 255);
  textAlign(CENTER, CENTER);
  text(`To not Love :,(`, width / 2, height / 2);
  pop();
}


function move() {
  // Moving circles
  c1.x += c1.vx;
  c1.y += c1.vy;

  c2.x += c2.vx;
  c2.y += c2.vy;
}


function checkOffScreen() {
  //When circles go off screen
  if (c1.x < 0 || c1.x > width || c1.y < 0 || c1.y > height ||
    c2.x < 0 || c2.x > width || c2.y < 0 || c2.y > height) {
    state = `sadness`;
  }
}


function checkOverlap() {
  //When circles touch
  let d = dist(c1.x, c1.y, c2.x, c2.y);
  if (d < c1.size / 2 + c2.size / 2) {
    state = `love`;
  }
}


function display() {
  // Display of circles
  fill(255);
  ellipse(c1.x, c1.y, c1.size);
  ellipse(c2.x, c2.y, c2.size);
}
