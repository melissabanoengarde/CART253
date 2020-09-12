/**************************************************
Template p5 project
Melissa Banoen-Garde

Activity 02: Drawing an alien
**************************************************/

// setup()
//
// Description of setup() goes here.
function setup() {

//ENVIRONMENT
  createCanvas(640,480);
  background(255,204,204);

//ALIEN
//Body
  noStroke();

  //core
  fill(184, 184, 199);
  ellipse(320,400,100,130);

  //feet
  fill(169, 169, 188);
  ellipse(290,460,35,20);
  fill(169, 169, 188);
  ellipse(350,460,35,20);

}

// draw()
//
// Description of draw() goes here.
function draw() {

}
