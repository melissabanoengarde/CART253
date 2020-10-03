/**************************************************
Functions
Melissa Banoen-Garde

Week 5, modularity and reuse
**************************************************/


// setup()
//
// Description of setup() goes here.
function setup() {
  createCanvas(500, 500);
}


// draw()
//
// Description of draw() goes here.
function draw() {
  background(0);

  // parallels(100,100,50,40,20,69);     //function call
  parallels(50,250, 5, 5,200,30);
  parallels(250, 400, 6, 2, 150,30);
  parallels(20,300, 10,8, 200,20);
}

function parallels(x,y, numLines, lineThickness, lineHeight, lineSpacing) {        //function definitions
  for (let i = 0; i < numLines; i++) {
    noStroke();
    fill(2,100,200);
    rectMode(CENTER);
    rect(x, y, lineThickness, lineHeight); //skinny rect that looks like a line
    x = x + lineSpacing; //determines the amount of pixels between each line
  }

}
