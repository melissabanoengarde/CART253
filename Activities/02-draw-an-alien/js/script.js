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

  //fill(50)
  //triangle(220,160,220,130,253,136);
  //triangle(264,220,310,230,302,187);

  //fill(0,0,0);
  //arc(260,180,90,60,0,PI+QUARTER_PI,CHORD);
  //arc(365,180,100,100,PI,0,CHORD);
  //ellipse(270,180,53,170);
  //ellipse(365,180,53,170);

  //nostrils
  fill(0,0,0,150);
  ellipse(317,350,3,3);
  ellipse(324,350,3,3);

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
