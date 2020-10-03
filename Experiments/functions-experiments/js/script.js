/**************************************************
Functions
Melissa Banoen-Garde

Week 5, modularity and reuse
**************************************************/


function setup() {
  createCanvas(500,500);
}

function draw() {
  background(0);

  let x = random(0,width);
  let y = random (0,height);

  ellipse(x,y,100);
}
