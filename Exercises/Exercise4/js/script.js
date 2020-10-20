"use strict";

/**************************************************
Exercise 4: The Age of Aquarium
Melissa Banoen-Garde

Using arrays and all that was covered in week 6.
**************************************************/

// User's specs
let red = {
  x: 0,
  y: 0,
  size: 30,
  vx: 0,
  vy:0,
  speed: 4,
  trail: [],
  trailSize: 7
};

// Food's specs
let mass = [];
let massAmount = 15;


function setup() {
  createCanvas(500, 500);

// movement of blues all over screen
  for (let i = 0; i < massAmount; i++) {
    mass[i] = createBlues(random(0,width), random(0,height));
  }
}

// Creates BLUES
function createBlues(x,y) {
  let food = {
    x: x,
    y: y,
    size: 15,
    vx: 0,
    vy: 0,
    eaten: false
  };
  return food;
}

/*----------------------------------------------------------------------*/
function draw() {
  background(245,245,245);
  noStroke();

  userInput();
  userMove();
  trailPosition();
  moveFood();
  displayUser();

  for (let i = 0; i < food.length; i++) {
    moveFood(foodAmount[i]);
    displayFood(food[i]);
  }
}

  // Check whether the user has eaten either food
  checkFood(food);

  // Display the user and foods
  displayFood(food);


// Sets the user position to the mouse position
function userInput() {
  if (keyIsDown(65)) {         //A = Left
     user.vx = -user.speed;
   }
   else if (keyIsDown(68)) {  //D = Right
     user.vx = user.speed;
   }
   else {
     user.vx = 0;             //halt
   }

   if (keyIsDown(87)) {      //W = Up
     user.vy = -user.speed;
   }
   else if (keyIsDown(83)) { //S = Down
     user.vy = user.speed;
   }
   else {
     user.vy = 0;           //halt
   }
}

// Allows user to move   (thank you for the constrain suggestion from E3, Samuel!)
function userMove() {
  user.x = constrain(user.x + user.vx, 0, width);
  user.y = constrain(user.y + user.vy, 0, height);
}

function trailPosition(){
  for (let i = 0; i < user.trail.length; i++) {
   let position = user.trail[i];
   rect(position.x, position.y, user.size);
  }

  fill(255,0,0);
  rect(user.x, user.y, user.size);

 let newTrailPosition = {
   x: user.x,
   y: user.y,
  };

 user.trail.push(newTrailPosition);

 if (user.trail.length > user.trailSize){
   user.trail.shift();
 }
}

function moveFood(food){
  let swap = random(0,1);
  if (swap < 0.05) {
    food.vx = random(-food.speed,food.speed);
    fish.vy = random(-food.speed, food.speed);
  }

  food.x = food.x + food.vx;
  food.y = food.y + food.vy;

  food.x = constrain(food.x, 0, width);
  food.y = constrain(food.y, 0, height);
}


// When user EATS the food
function checkFood(food){
  if (!food.eaten) {
    let d = dist(user.x, user.y, food.x, food.y);
    if (d < user.size / 2 + food.size / 2) {
      food.eaten = true;
    }
  }
}


// Draws the user as a square
function displayUser() {
  push();
  fill(255,0,0);
  rect(user.x, user.y, user.size);
  pop();
}

function displayFood(food){
  if (!food.eaten){
    push();
    fill(0,0,255);
    ellipse(food.x, food.y, food.size);
    pop();
  }
}
