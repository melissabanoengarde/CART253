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


function setup(){
  createCanvas(400,900);

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
}
