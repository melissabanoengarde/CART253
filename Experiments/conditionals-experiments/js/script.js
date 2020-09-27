/**************************************************
Conditionals Experiments
Melissa Banoen-Garde

Experimenting with conditionals
**************************************************/

let circle = {
  x: 250,
  y: 250,
  size: 100,
  vx: 0,         //velocity on the x-axis
  vy: 0,          //velocity on the y-axis

  //ax and ay are how fast the velocity increases
  ax: 0,        //acceleration on the x-axis
  ay: 0,      //acceleration on the y-axis
  acceleration: 0.25, //how much acceleration adds to the velocity per frame
  maxSpeed:5
}


function setup() {
  createCanvas(500,500);
}


function draw() {

  background(0);

  if (mouseX < circle.x) {
    circle.ax = -circle.acceleration;
  }
  else {
    circle.ax = circle.acceleration;
  }

  if (mouseY < circle.y) {
    circle.ay = -circle.acceleration;
  }
  else {
    circle.ay = circle.acceleration;
  }

  circle.vx += circle.ax;
  circle.vx = constrain(circle.vx, -circle.maxSpeed,circle.maxSpeed);
  circle.vy += circle.ay;
  circle.vy = constrain(circle.vy,-circle.maxSpeed,circle.maxSpeed);

  circle.x += circle.vx;
  circle.y += circle.vy;

  ellipse(circle.x,circle.y,circle.size);
}
