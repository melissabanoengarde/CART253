/**************************************************
Conditionals Experiments
Melissa Banoen-Garde

Experimenting with conditionals
**************************************************/
let displayCircle = 0;

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

  if (mouseIsPressed) {
    displayCircle = 1;
  }

if (displayCircle) {
  ellipse(250,250,100,100);
}

}
