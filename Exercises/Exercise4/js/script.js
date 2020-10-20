"use strict";

/**************************************************
Exercise 4: The Age of Aquarium
Melissa Banoen-Garde

Using arrays and all that was covered in week 6.
**************************************************/

let user = {
  x: 0,
  y: 0,
  size: 30,
  vx: 0,
  vy:0,
  speed: 4
};

// Foods
let food1;
let food2;
let food3;
let food4;
let food5;
let food6;

function setup() {
  createCanvas(500, 500);

  food1 = createFood(50, 500/2);
  food2 = createFood(150, 500/2);
  food3 = createFood(200, 500/2);
  food4 = createFood(250, 500/2);
  food5 = createFood(300, 500/2);
  food6 = createFood(350, 500/2);
}

function createFood(x,y) {
  let food = {
    x: x,
    y: y,
    size: 15,
    eaten: false
  };
  return food;
}


function draw() {
  background(245,245,245);


  userInput();
  userMove();

  // Check whether the user has eaten either food
  checkFood(food1);
  checkFood(food2);
  checkFood(food3);
  checkFood(food4);
  checkFood(food5);
  checkFood(food6);

  // Display the user and foods
  displayUser();
  displayFood(food1);
  displayFood(food2);
  displayFood(food3);
  displayFood(food4);
  displayFood(food5);
  displayFood(food6);
}

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
  user.x = constrain( user.x + user.vx, 0, width);
  user.y = constrain( user.y + user.vy, 0, height);
}

function checkFood(food){
  if (!food1.eaten) {
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
  noStroke();
  rect(user.x, user.y, user.size);
  pop();
}

function displayFood(food){
  if (!food.eaten){
    push();
    noStroke();
    fill(0,0,255);
    ellipse(food.x, food.y, food.size);
    pop();
  }
}
