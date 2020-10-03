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

  parallels({x:0, y:200, numLines:100, lineThickness:1, lineHeight:100, lineSpacing:4});
  // parallels(0, 300, 20, 10, 50, 12);
  // parallels(0, 350, 80, 5, 5, 6);
}

function parallels({x,y,numLines,lineThickness,lineHeight,lineSpacing}) {

  for (let i = 0; i < numLines; i++) {

    noStroke();
    fill(255);
    rectMode(CENTER);

    rect(x, y, lineThickness, lineHeight);

    x = x + lineSpacing;
  }
}
