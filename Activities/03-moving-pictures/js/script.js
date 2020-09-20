/**************************************************
Template p5 project
Melissa Banoen-Garde

Here is a description of this template p5 project.
**************************************************/

let bg ={
  r:0,
  g:0,
  b:0
};

let circleL ={
  x:0,
  y:250,
  size:100,
  fill:255,
  alpha:200

};

let circleR ={
  x:700,
  y: 250,
  size:75,
  fill:255,
  alpha:200

};

// setup()
//
// Description of setup() goes here.
function setup() {
  createCanvas(500,500);
  noStroke();
  circleL.y = height/2;
  circleR.x = width;
  circleR.y = height/2;

}

// draw()
//
// Description of draw() goes here.
function draw() {
  background(bg.r, bg.g, bg.g);
  bg.r = bg.r +1;

}
