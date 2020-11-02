"use strict";

/**************************************************
Solar System Simulation
Melissa Banoen-Garde

Prototype of project 2
**************************************************/

let numStars = 1000;


// Set up of the 3D canvas and our planets
function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);



}

// draw()
//
// Description of draw() goes here.
function draw() {
  background(20);

  for (let i = 0; i < numStars; i++) {
    let x = (width/2);
    let y = (height/2);
    let z = random(-1000,1000);
    noStroke();
    fill(255);
    translate(random(-width, width), random(-height, height), z);
    // rotateY(frameCount * 0.002);
    ellipse(x, y, 10);
  }
  // noFill();
  // stroke(255);
  // strokeWeight(1);
  // rotateY(frameCount * 0.002);
  // // sphere(50,16,24);
  // ellipse(300, 300, 20, 20);

}








/*
NOTES:
new camera([x], [y], [z], [centerX], [centerY], [centerZ], [upX], [upY], [upZ])
*/
