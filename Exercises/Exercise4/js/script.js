"use strict";

/**************************************************
Exercise 4: The Age of Aquarium
Melissa Banoen-Garde

Red must get through the week, avoiding the blues.

User = red ellipse
Blue circles = the blues
Yellow Circle = End of the Week
**************************************************/

// User's specs
let red = {
  x: 200,
  y: 15,
  size: 30,
  vx: 0,
  vy: 0,
  speed: 5,
}; 

// End of week specs
let endOfWeek = {
  x: 200,
  y: 865,
  size: 40,
};

// Mass of blues
let mass = [];
let massAmount = 40;

let state = `title`;


function setup() {
  createCanvas(400, 900);

  for (let i = 0; i < massAmount; i++) {
    mass[i] = createBlue(random(0, width), random(18, height), random(7, 25));
  }
}

// blue display
function createBlue(x, y, size) {
  let blue = {
    x: x,
    y: y,
    size: size,
    vx: 0,
    vy: 0,
    speed: 2
  };
  return blue;
}

function draw() {

  if (state === `title`) {
    title();
  } else if (state === `simulation`) {
    simulation();
  } else if (state === `lose`) { //lose
    lose();
  } else if (state === `win`) { //win
    win();
  }
}

function keyPressed() {
  if (state === `title`) {
    state = `simulation`;
  }
}

function title() {
  let text1 = `Red must get through the week, \n avoiding the blues.`
  let text2 = `[ Press any key to begin ]`
  push();
  background(230);
  fill(255, 0, 0);
  textSize(80);
  textAlign(CENTER, CENTER);
  text(`Red`, width / 2, height / 3);

  textSize(16);
  textAlign(CENTER, CENTER);
  text(text1, width / 2, height / 2 - 30);

  textSize(12);
  textAlign(CENTER, BOTTOM);
  text(text2, width / 2, height / 2 + 50);
  pop();
}


function simulation() {
  background(245, 245, 245);
  noStroke();

  // ALL THING RED
  userInput();
  redMove();
  display();

  // ALL THINGS BLUE
  for (let i = 0; i < mass.length; i++) {
    moveBlue(mass[i]);
    displayBlue(mass[i]);
    checkTouchBlue(mass[i]);
  }

  checkTouchEndOfWeek();
}

function lose() {
  push();
  fill(255, 0, 0);
  textSize(30);
  textAlign(CENTER, CENTER);
  text(`Bad weeks happen, it's ok.`, width / 2, height / 2);
  pop();
}

function win() {
  push();
  fill(255, 0, 0);
  textSize(20);
  textAlign(CENTER, CENTER);
  text(`Phew! Made it through another week.`, width / 2, height / 2);
  pop();
}

function userInput() {
  //User's handle input
  if (keyIsDown(65)) { //A = Left
    red.vx = -red.speed;
  } else if (keyIsDown(68)) { //D = Right
    red.vx = red.speed;
  } else {
    red.vx = 0; //halt
  }

  if (keyIsDown(87)) { //W = Up
    red.vy = -red.speed;
  } else if (keyIsDown(83)) { //S = Down
    red.vy = red.speed;
  } else {
    red.vy = 0; //halt
  }
}

function redMove() {
  // Red's Move
  red.x = constrain(red.x + red.vx, 0, width);
  red.y = constrain(red.y + red.vy, 0, height);
}

function display() {
  // Red's display
  fill(255, 0, 0);
  ellipse(red.x, red.y, red.size);

  // End of week circle display
  fill(255, 200, 0);
  ellipse(endOfWeek.x, endOfWeek.y, endOfWeek.size);
}


function moveBlue(blue) {
  let change = random(0, 1);
  if (change < 0.05) {
    blue.vx = random(-blue.speed, blue.speed);
    blue.vy = random(-blue.speed, blue.speed);
  }

  // Move blues
  blue.x = blue.x + blue.vx;
  blue.y = blue.y + blue.vy;

  // Constrain blues to the canvas
  blue.x = constrain(blue.x, 0, width);
  blue.y = constrain(blue.y, 0, height);
}

function displayBlue(blue) {
  push();
  fill(0, 0, 255);
  ellipse(blue.x, blue.y, blue.size);
  pop();
}

// if Red touches a blue (lose)
function checkTouchBlue(blue) {
  let d = dist(red.x, red.y, blue.x, blue.y);
  if (d < red.size / 2 + blue.size / 2) {
    state = `lose`;
  }
}

// if Red touched end of week bar (win)
function checkTouchEndOfWeek() {
  let d2 = dist(red.x, red.y, endOfWeek.x, endOfWeek.y);
  if (d2 < red.size / 2 + endOfWeek.size / 2) {
    state = `win`;
  }
}
