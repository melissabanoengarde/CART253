/**************************************************
Functions
Melissa Banoen-Garde

Week 5, modularity and reuse
**************************************************/
let circle = {
  x: 0,
  y: 250,
  size: 100,
  vx: 1,
  vy:0
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
  background(0);

move();
wrap();
display();



//DEFINING move()
  function move() {
    circle.x = circle.x + circle.vx;
    circle.y = circle.y + circle.vy;
  }

function wrap () {
  if (circle.x > width) {
    //CALLING reset()
    reset();
  }
}

//DEFINING display
function display() {
  fill(255,0,0);
  ellipse(circle.x, circle.y, circle.size);
  }
}

//DEFINING reset()
function reset() {
  circle.x = 0;
  circle.vx = circle.vx +2;
  circle.vy -= 0.25; //moves diagonally
  circle.size +=5;

  function mousePressed() {
  // CALLING reset()
  reset();
  }

}
