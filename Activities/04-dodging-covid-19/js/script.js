/**************************************************
Activity 04: Dodging COVID-19
Melissa Banoen-Garde

This activity implements what we learned in Week 4;
conditionals, booleans, loops, mouse input,
movement, and intermediate drawing. As well as learn
new functions (dist(), noLoop(), noCursor()).
**************************************************/

let covid19 = {
  x: 0,
  y: 250,
  size: 100,
  vx: 0,
  vy: 0,
  speed: 5,
  fill: {
    r: 255,
    g: 0,
    b: 0
  }
}


// setup()
//
// Description of setup() goes here.
function setup() {

  createCanvas(windowWidth, windowHeight);

  covid19.y = random(0,height);
  covid19.vx = covid19.speed;

}


// draw()
//
// Description of draw() goes here.
function draw() {

  background(133, 163, 224);

  covid19.x += covid19.vx;
  covid19.y += covid19.vy;

  if (covid19.x > windowWidth) {
    covid19.x = 0;
    covid19.y = random(0,windowHeight);
  }


  fill(covid19.fill.r,covid19.fill.g,covid19.fill.b);
  noStroke();

  ellipse(covid19.x,covid19.y,covid19.size);

}
