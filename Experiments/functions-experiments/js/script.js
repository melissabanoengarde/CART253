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

  parallels(100,100);     //function call
  parallels(50,50);
  parallels(250, 400);
  parallels(251,300);
}

function parallels(x,y) {        //function definitions
  for (let i = 0; i < 20; i++) {
    noStroke();
    fill(2,100,200);
    rectMode(CENTER);
    rect(x, y, 2, 150); //skinny rect that looks like a line
    x = x + 10; //determines the amount of pixels between each line
  }

}
