"use strict";

/**************************************************
Sound Activity: Musical Toy
Melissa Banoen-Garde

Using oscillators to add sound to movement and using a
synth to add sound to collision.
**************************************************/

// The balls
let balls = [];
// F-minor
let notes = [`F3`, `G3`, `Ab4`, `Bb4`, `C4`, `Db4`, `Eb4`, `F4`];

// setup()
//
// Creates the canvas
function setup() {
 createCanvas(800, 800);
 userStartAudio();
}

// draw()
//
// Description of draw() goes here.
function draw() {
  background(20);

  // for-loop that goes through the balls array, calling Ball.js's methods for each one
  for (let i = 0; i < balls.length; i++) {
    let ball = balls[i];
    ball.move();
    ball.bounce();
    ball.display();
  }
}

function mousePressed() {
  createBall(mouseX, mouseY);  // passes the values of current mouse position to creatBall (x, y)
}

function createBall(x, y) {
  let note = random(notes); // note parameters will be using random notes from notes' array
  // creating new ball object
  let ball = new Ball(x ,y, note);
  // adding ball in balls array
  balls.push(ball);
}
