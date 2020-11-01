"use strict";

/**************************************************
PROJECT 2
Melissa Banoen-Garde

sketching a solar system simulation with attempt to
draw with accuracy
**************************************************/

//Texture images of respective planets
let neptuneImg;
let earthImg;

// A preload of all elements in the simulation (img, sound, font)
function preload() {
  neptuneImg = loadImage('assets/images/neptune.jpg');
  earthImg = loadImage('assets/images/earth.jpg');
}

// Description of setup() goes here.
function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  angleMode(DEGREES);
}


// Description of draw() goes here.
function draw() {
  background(20);
  noStroke();
  orbitControl(); // allows user to drag the screen

// neptune
rotateY(frameCount/2);
translate(0,0, 0);
sphere(100,100,100);
texture(neptuneImg);

// earth
translate(400, 0, 0);
rotateY(frameCount * 6);
sphere(70,70,70);
texture(earthImg);


  




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
