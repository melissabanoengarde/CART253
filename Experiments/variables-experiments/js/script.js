/**************************************************
Variables Experiments
CART 253-B
Melissa Banoen-Garde

Experimenting with variables, referring to videos
posted on Moodle and lecture notes--both provided
by Pippin Barr.
**************************************************/

let bgShade = 0;
let circleX = 0;
let circleY = 250;
let circleSize = 200;       //"let" means declaring a variable to js
let circleSpeed = 2;
let circleAcceleration = 0.25;

// setup()
//
// Description of setup() goes here.
function setup() {
  createCanvas(500,500);

}

// draw()
//
// Variables experiment below
function draw() {
  background(bgShade);
  circleX -= circleSpeed;
  circleSpeed -= circleAcceleration;
  ellipse(circleX,circleY,circleSize);


}
