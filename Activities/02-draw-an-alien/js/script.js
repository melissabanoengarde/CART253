/**************************************************
Activity 02: Drawing an alien
Melissa Banoen-Garde

CART 253-B
Week 2 activity drawing my alien, Terre-E.
**************************************************/

// setup()
//
// Beginning to draw alien.
function setup() {

//ENVIRONMENT
  createCanvas(640,480);
  background(0, 0, 102);

  noStroke();
  fill(0,0,0,50);
  bezier(-50,480,0,220,640,220,690,480);    //bezier(startingpt,ctrlpt1,cntrlpt2,endpt)

//ALIEN
//Body
  noStroke();

  //core
  fill(79, 104, 125);
  rectMode(CENTER);
  rect(320,400,170,180,15,15,0,0)

  //body details
  //strokeWeight(2);
  stroke(0,50);
  line(265,390,265,480);
  line(380,390,380,480);


//Head
noStroke();
ellipseMode(CENTER);
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

  //cheekbones
  fill(79, 104, 125,110)
  quad(238,240,260,320,310,370,250,240);          //quad(x1, y1, x2, y2, x3, y3, x4, y4)
  quad(400,240,380,320,330,370,390,240);


  //eyes
  angleMode(DEGREES);

  //left
  fill(0,0,0);
  rotate(30);
  ellipse(323,31,100,40);
  rotate(-30);

  //right
  rotate(150);
  ellipse(-230,-349,100,40);
  rotate(-150);

  //nostrils
  stroke(0,80);
  strokeWeight(1);

  beginShape();
  vertex(312,260);
  vertex(317,240);
  endShape();

  beginShape();
  vertex(324,240);
  vertex(329,260);
  endShape();

  //mouth
  stroke(49, 65, 78);
  strokeWeight(3);
  rect(320,320,50,2,0,0,0,200);


}

// draw()
//
// Description of draw() goes here.
function draw() {

}
