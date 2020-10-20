"use strict";

/**************************************************
Exercise 4: The Age of Aquarium
Melissa Banoen-Garde

Using arrays and all that was covered in week 6.
**************************************************/

// User's specs
let user = {
  x: 0,
  y: 0,
  size: 30,
  vx: 0,
  vy:0,
  speed: 4,
  trail: [],
  trailSize: 10
};

// Food's specs
let food = [];
let foodAmount = 15;


function setup() {
  createCanvas(500, 500);

  for (let i = 0; i < foodAmount; i++) {
    food[i] = createFood(random(0,width), random(0,height));
  }
}

// Creates new JS object of the food and returns it
function createFood(x,y) {
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
  displayUser();

  for (let i = 0; i < food.length; i++) {
    moveFood(foodAmount[i]);
    displayFood(food[i]);
  }
}

  // Check whether the user has eaten either food
  checkFood(food1);
  checkFood(food2);
  checkFood(food3);
  checkFood(food4);
  checkFood(food5);
  checkFood(food6);

  // Display the user and foods
  /*displayFood(food1);
  displayFood(food2);
  displayFood(food3);
  displayFood(food4);
  displayFood(food5);
  displayFood(food6); */
// }

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

// When user eats the food
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
