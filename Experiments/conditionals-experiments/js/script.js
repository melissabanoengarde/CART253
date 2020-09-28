/**************************************************
Conditionals Experiments
Melissa Banoen-Garde

Experimenting with conditionals
**************************************************/
let angle = 0;


function setup() {
  createCanvas(500, 500);
}


function draw() {

  background(127);

  push();
  fill(255,0,0);
  rectMode(CENTER);
  translate(width/2,height/2);
  rotate(angle);
  rect(width/2,height/2,100,100)
  pop();

angle += 0.01;

}
