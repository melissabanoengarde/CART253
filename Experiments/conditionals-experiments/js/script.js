/**************************************************
Conditionals Experiments
Melissa Banoen-Garde

Experimenting with conditionals
**************************************************/

let circle = {
  x: 250,
  y: 250,
  size: 100,
  vx: 0,         //velocity on the x-axis
  vy: 0          //velocity on the y-axis
}

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

  background(0);

  circle.x += circle.vx;
  circle.y += circle.vy;

  ellipse(circle.x,circle.y,circle.size);
}
