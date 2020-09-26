/**************************************************
Conditionals Experiments
Melissa Banoen-Garde

Experimenting with conditionals
**************************************************/

let backgroundShade = 0;
let circle = {
  x:0,
  y:250,
  size: 100,
  speed:1
}

// setup()
//
// Description of setup() goes here.
function setup() {
  createCanvas(500,500);


}

// draw()
//
// Description of draw() goes here.
function draw() {
  background(backgroundShade);

  circle.x = circle.x + circle.speed;

  // if (circle.x > width) {
  //   circle.speed = -circle.speed;
  // }
  //
  // if (circle.x < 0) {
  //   circle.speed = -circle.speed;
  // }
  //
  // if (mouseY < height/2) {
  //   fill(255,0,0);
  // }
  //
  // if (mouseY > height/2) {
  //   fill(0,0,255);
  // }

  fill(255,255,255);

if (circle.x > width/3){
    if (circle.x < 2 * width/3){
      fill(225,0,0);
    }
}

  ellipse(circle.x, circle.y, circle.size);
}
