/**************************************************
Variables Experiments
CART 253-B
Melissa Banoen-Garde

Experimenting with variables, referring to videos
posted on Moodle and lecture notes--both provided
by Pippin Barr.
**************************************************/

let bgShade = 0;
// let circleX = 0;
// let circleY = 250;
// let circleSize = 200;               //"let" means declaring a variable to js
// let circleSpeed = 2;
// let circleAcceleration = 0.25;
let circle = {
  x: 0,
  y: 250,
  size: 100,
  speed:1,
  fill: 250                          //these are property values, here we have 4 properties
};

// setup()
//
// Description of setup() goes here.
function setup() {
  createCanvas(500,500);

}

// draw()
//
// Variables experiment below
function draw() {
  background(bgShade);

  // circle.speed = random(-5,7)
  circle.x += circle.speed;
  // circle.y = random(0,height);
  circle.size = random(10,100);


  // circle.fill = random(255,200);
  fill(circle.fill);
  ellipse(circle.x,circle.y,circle.size);



  // console.log("circleX:" + circleX);


}
