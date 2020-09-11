/**************************************************
Template p5 project
Pippin Barr

Here is a description of this template p5 project.
**************************************************/

// setup()
//
// Description of setup() goes here.
function setup() {

  createCanvas(500,500);
  background(242,86,100);    //RGB, colours ranging from 0 to 255

//PACMAN
  //arc(x, y, w, h, start, stop, [mode], [detail]), angle specified in radians
  //radians work clockwise, think of unit circle but clockwise
  noStroke();
  fill(204, 0, 0,100);
  arc(70, 250, 100, 100, QUARTER_PI, PI+HALF_PI+QUARTER_PI);

  fill(230,0,0);
  arc(70, 250, 80, 80, QUARTER_PI, PI+HALF_PI+QUARTER_PI);

  fill(255, 51, 51);
  arc(70, 250, 60, 60, QUARTER_PI, PI+HALF_PI+QUARTER_PI);

  fill(255, 77, 77);
  arc(70, 250, 40, 40, QUARTER_PI, PI+HALF_PI+QUARTER_PI);

  fill(255, 128, 128);
  arc(70, 250, 20, 20, QUARTER_PI, PI+HALF_PI+QUARTER_PI);

//TRIANGLES
//A triangle is a plane created by connecting three points,
//triangle(x1, y1, x2, y2, x3, y3)
  stroke(250,250,0);
  fill(255,255,192);
  triangle(180, 270, 210, 270, 195,245);

  fill(255,255,145);
  triangle(240, 250, 270, 250, 255 ,225);

  fill(255,255,85);
  triangle(300, 270, 330, 270, 315 ,245);

  fill(255,255,33);
  triangle(360, 290, 390, 290, 375 ,265);

  fill(250,250,0);    //fill(R,G,B,a), "a" stands for object's transparency, up to 100(%)
  triangle(420, 270, 450, 270, 435 ,245);  //
}

// draw()
//
// Description of draw() goes here.
function draw() {

}
