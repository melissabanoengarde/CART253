"use strict";

/**************************************************
Activity: Object-Oriented Programming activity
Melissa Banoen-Garde

The objective is to get comfortable with defining classes,
work with interacting classes via collision, and learn to feel
okay about acceleration and GRAVITY by programming a juggling
simulation.
**************************************************/

let paddle;

// Description of setup() goes here.
function setup() {
  createCanvas(windowWidth, windowHeight);

  paddle = new Paddle(300, 20);
}


// Description of draw() goes here.
function draw() {
  background(0);

  paddle.move();      //first method of Paddle.js
  paddle.display();   // calls method that makes it appear on screen
}
