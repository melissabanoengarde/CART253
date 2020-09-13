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
  background(209, 130, 51);

//ALIEN
//Body
  noStroke();

  //core
  fill(109, 109, 141);
  rectMode(CENTER);
  rect(320,440,300,90,40,40,0,0)

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
  stroke(204, 0, 0);
  strokeWeight(2);
  rectMode(CENTER);
  rect(320,365,15,8,0,0,50,50);


}

// draw()
//
// Description of draw() goes here.
function draw() {

}
