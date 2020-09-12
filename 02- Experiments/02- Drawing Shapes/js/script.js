/**************************************************
Template p5 project
Melissa Banoen-Garde

Programming exercise: Drawing shapes, referring to video "02-Drawing Shapes"
Notes are added for prompt purposes
**************************************************/

// setup()
//
// Description of setup() goes here.
function setup() {

  createCanvas(500,500);         //always place canvas at the beginning; dimension of canvas; 500x500 pixels

  background (251,255,114); //RGB values

  //point (250,250);         //this line here are instructions called a FUNCTION CALL

  //rect(0,0,500,250);

  //line(0,0,500,500);

  //ellipse(250, 250, 150, 150);     //x & y are the centre of the ellipse

  //line(500,0,0,500);

  //rectMode(CENTER);       //normally "rectMode(CORNER)"; places rect for you

  //rect(250,250,100,100);    // becasue of "rectMode(CENTER), the following rects will remain in the centre"
  //rect(250,250,70,70);

  ellipseMode(CORNER)
  ellipse(250,250,100,100);
  ellipse(250,250,80,80);
  ellipse(250,250,60,60);
  ellipse(250,250,40,40);
  ellipse(250,250,20,20);
}

// draw()
//
// Description of draw() goes here.
function draw() {

}
