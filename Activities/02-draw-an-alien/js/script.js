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
  ellipse(320,418,55,90);

  //feet
  fill(169, 169, 188);
  ellipse(298,460,30,15);
  fill(169, 169, 188);
  ellipse(343,460,30,15);

//Head
  fill(155, 155, 176);
  ellipse(320,295,145,210);

  //eyes
  fill(0,0,0);
  ellipse(288,280,48,130);
  ellipse(352,280,48,130);

}

// draw()
//
// Description of draw() goes here.
function draw() {

}
