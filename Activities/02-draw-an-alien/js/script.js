/**************************************************
Template p5 project
Melissa Banoen-Garde

Activity 02: Drawing an alien
**************************************************/

// setup()
//
// Beginning to draw alien.
function setup() {

//ENVIRONMENT
  createCanvas(640,480);
  background(209, 130, 51);

//ALIEN
//Body
  noStroke();

  //core
  fill(98, 128, 157);
  rectMode(CENTER);
  rect(320,400,170,180,15,15,0,0)

  //feet
  //fill(169, 169, 188);
  //ellipse(298,460,30,15);
  //fill(169, 169, 188);
  //ellipse(343,460,30,15);

//Head
  fill(88, 116, 141);
  ellipse(320,160,200,280);
  rect(320,180,230,150,50,50,90,90);
  //fill(255);
  quad(238,240,260,320,310,370,250,240);          //quad(x1, y1, x2, y2, x3, y3, x4, y4)
  quad(400,240,380,320,330,370,390,240);
  ellipse(320,355,35,36);
  //fill(0);
  rect(320,310,50,80,0,0,0,0);
  rect(320,300,110,50,0,0,0,0);
  rect(320,330,80,20,0,0,0,0);
  rect(320,350,38,20,0,0,0,0);

  //eyes
  stroke(0);
  strokeWeight(45);

  beginShape();
  vertex(245,160);
  vertex(285,200);
  endShape();

  beginShape();
  vertex(395,160);
  vertex(350,200);
  endShape();
  noStroke();

  //nostrils
  stroke(0,80);
  strokeWeight(1);

  beginShape();
  vertex(310,240);
  vertex(315,260);
  endShape();

  beginShape();
  vertex(324,260);
  vertex(329,240);
  endShape();

  //mouth
  //stroke(204, 0, 0);
  //strokeWeight(2);
  //rectMode(CENTER);
  //rect(320,365,15,8,0,0,50,50);


}

// draw()
//
// Description of draw() goes here.
function draw() {

}
