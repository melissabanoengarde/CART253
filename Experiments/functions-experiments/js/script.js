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
  background(0);
  oval(undefined, undefined, 250,450);
}


// draw()
//
// Description of draw() goes here.
function oval(x=250,y=250,w=100,h=100) {    //this becomes its default setup
ellipse(x,y,w,h);

}
