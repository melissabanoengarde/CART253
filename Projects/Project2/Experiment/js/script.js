"use strict";

/**************************************************
PROJECT 2
Melissa Banoen-Garde

sketching a solar system simulation with attempt to
draw with accuracy
**************************************************/

//Texture images of respective planets
// let neptuneImg;
// let earthImg;

// A preload of all elements in the simulation (img, sound, font)
// function preload() {
//   neptuneImg = loadImage('assets/images/neptune.jpg');
//   earthImg = loadImage('assets/images/earth.jpg');
// }

// Description of setup() goes here.
function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
}


// Description of draw() goes here.
function draw() {
  background(20);
  // orbitControl(); // allows user to drag the screen
  noFill();
  strokeWeight(0.5);
  translate(0,0,0);
  angleMode(DEGREES);
  rotateY(frameCount * 0.2);


  // sun  (yellow)
  stroke(255,255,0);
  sphere(100);
                                // texture(neptuneImg);

  // earth (green)
  translate(500, 0, 0);
  push();
  rotateY(frameCount * 1);
  // rotateY(frameCount * 0.05);
  stroke(0,255,0);
  sphere(50);
  pop();
                                // texture(earthImg);

  // neptune (blue)
  translate(0,-200,600);
  rotateY(frameCount *0.01);
  stroke(0,0,255);
  sphere(90);
  // venus (red)







}













/*
NOTES:

text(`text here`, x, y, width-wrap, height-wrap)

to set light, think of the world's coordinates
// -width/2,-height/2 -------- width/2,-height/2
//                |            |
//                |     0,0    |
//                |            |
// -width/2,height/2--------width/2,height/2
source: https://p5js.org/reference/#/p5/pointLight

rainforest img source: https://i.redd.it/afjau4hzzsv51.jpg

FPS TO DPS: 1 Frames Per Second to Degrees Per Second = 360

*/
