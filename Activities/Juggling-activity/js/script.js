"use strict";

/**************************************************
Juggling Activity
Melissa Banoen-Garde

The objective of this activty is to get comfortable with
defining classes, work with interacting classes via collision,
and learn to feel okay about acceleration and GRAVITY by
programming a juggling simulation.
**************************************************/

// Declaring paddle variable
let paddle;

// setup()
//
// Description of setup() goes here.
function setup() {
  createCanvas(windowWidth, windowHeight);

  // creating new Paddle object
  paddle = new Paddle(300, 20);
}

// draw()
//
// Description of draw() goes here.
function draw() {
  background(219, 255, 181);

  // calling Paddle.js's methods
  paddle.move();
  paddle.display();

}
