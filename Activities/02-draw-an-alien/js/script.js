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
  fill(184,184,199);
  ellipse(320,418,55,90);

  //feet
  fill(169, 169, 188);
  ellipse(298,460,30,15);
  fill(169, 169, 188);
  ellipse(343,460,30,15);

//Head
  fill(155,155,176);
  ellipse(320,295,145,210);

  //eyes
  fill(0,0,0);
  ellipse(288,283,53,140);
  ellipse(352,283,53,140);

  //nostrils
  fill(0,0,0,150);
  ellipse(317,350,3,3);
  ellipse(324,350,3,3);

  //mouth


}

// draw()
//
// Description of draw() goes here.
function draw() {

}
