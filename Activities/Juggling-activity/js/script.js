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

// Declaring gravity variable
let gravityForce = 0.0025;

// Declaring balls variables with empty array
let balls = [];
let numBalls = 3;

// setup()
//
// Description of setup() goes here.
function setup() {
  createCanvas(windowWidth, windowHeight);

  // creating new Paddle object
  paddle = new Paddle(300, 20);

  //for-loop for numBall; allows many balls to appear on screen
  for (let i = 0; i < numBalls; i++) {
    let x = random(0, width);
    let y = random(-400,-100);
    // creating new Ball object
    let ball = new Ball(x, y);
    balls.push(ball); // pushing ball variable into balls array
  }
}

// draw()
//
// Description of draw() goes here.
function draw() {
  background(219, 255, 181);

  // calling Paddle.js's methods
  paddle.move();
  paddle.display();

  // for-loop that counts from 0 up to balls.length
  for (let i = 0; i < balls.length; i++) {
    let ball = balls[i]; // pulling out ball at current index we're counting from
    ball.gravity(gravityForce);   // calling gravity() with gravityForce as an argument
    ball.move();
    ball.bounce();
    ball.display();
  }
}
