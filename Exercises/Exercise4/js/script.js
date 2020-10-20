"use strict";

/**************************************************
Exercise 4: The Age of Aquarium
Melissa Banoen-Garde

Using arrays and all that was covered in week 6.
**************************************************/

// User's specs
let red = {
  x: 200,
  y:15,
  size: 30,
  vx: 0,
  vy:0,
  speed: 5,
};

let endOfWeekBar = {
  x:25,
  y:865,
  w:350,
  h:1.5
};


let mass = [];
let massAmount = 50;



function setup(){
  createCanvas(400,900);

  for (let i = 0; i < massAmount; i++){
    mass[i] = createBlue(random(0, width), random(0, height - 50));
  }

function createBlue(x, y) {
  let blue = {
    x: x,
    y: y,
    size: 15,
    vx: 0,
    vy: 0,
    speed:2
  };
  return blue;
}

}

function draw(){
  background(245,245,245);
  noStroke();

/* RED (USER)*/
  //User's handle input
  if (keyIsDown(65)) {         //A = Left
     red.vx = -red.speed;
   }
   else if (keyIsDown(68)) {  //D = Right
     red.vx = red.speed;
   }
   else {
     red.vx = 0;             //halt
   }

   if (keyIsDown(87)) {      //W = Up
     red.vy = -red.speed;
   }
   else if (keyIsDown(83)) { //S = Down
     red.vy = red.speed;
   }
   else {
     red.vy = 0;           //halt
   }

  // Red's Move
  red.x = constrain(red.x + red.vx, 0, width);
  red.y = constrain(red.y + red.vy, 0, height);

  // Red's display
  fill(255,0,0);
  ellipse(red.x,red.y,red.size);

  //Bar display
  fill(0);
  rect(endOfWeekBar.x, endOfWeekBar.y, endOfWeekBar.w, endOfWeekBar.h);

// ALL THINGS BLUE
  // to display
  for (let i = 0; i < mass.length; i++) {
    moveBlue(mass[i]);
    displayBlue(mass[i]);
  }

  function moveBlue(blue) {
    let change = random(0, 1);
    if (change < 0.05) {
      blue.vx = random(-blue.speed, blue.speed);
      blue.vy = random(-blue.speed, blue.speed);
    }

    // Move the blue
    blue.x = blue.x + blue.vx;
    blue.y = blue.y + blue.vy;

    // Constrain the blue to the canvas
    blue.x = constrain(blue.x, 0, width);
    blue.y = constrain(blue.y, 0, height);
  }

  function displayBlue(blue) {
    push();
    fill(0,0,255);
    ellipse(blue.x, blue.y, blue.size);
    pop();
  }

    // if Red touches a blue (lose)
  function checkTouchBlue(blue){
    let d = dist(red.x, red.y, blue.x, blue.y);
    if (d < red.size / 2 + blue.size/ 2) {
      noLoop();
    }
  }

// if Red touched end of week bar (win)
  function checkTouchBar(){
    let d2 = dist(red.x, red.y, endOfWeek.x, endOfWeek.y);
    if (d2 < red.size /2 + endOfWeek.size/2){
        noLoop();
      }
    }

}
