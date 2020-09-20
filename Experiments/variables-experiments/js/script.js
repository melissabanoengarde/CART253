/**************************************************
Variables Experiments
CART 253-B
Melissa Banoen-Garde

Experimenting with variables, referring to videos
posted on Moodle and lecture notes--both provided
by Pippin Barr.
**************************************************/

let bgShade = 0;
let circleX = 250;
let circleY = 250;
let circleSize = 200;       //"let" means declaring a variable to js

// setup()
//
// Description of setup() goes here.
function setup() {
  createCanvas(500,500);

}

// draw()
//
// Description of draw() goes here.
function draw() {
  background(bgShade);
  ellipse(circleX,circleY,circleSize);


}
