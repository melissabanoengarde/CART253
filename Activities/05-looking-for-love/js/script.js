/**************************************************
Activity 05: Looking for Love
Melissa Banoen-Garde

Activity 05 implements all that which we've learned
about functions, in week 5.

Objective: 1 - Use states to manage your program
           2 - Use functions to organize your program
           3 - Write a function with a parameter and return value
**************************************************/
let c1 = {
  x: undefined,
  y: 250,
  size: 100,
  vx: 0,
  vy: 0,
  speed: 5
};

let c2 = {
  x: undefined,
  y: 250,
  size: 100,
  vx: 0,
  vy: 0,
  speed: 5
};

// setup()
//
// Description of setup() goes here.
function setup() {
  createCanvas(500, 500);

  c1.x = width/3;
  c2.x = 2 * width/3;

  c1.vx = random(-c1.speed,c1.speed);
  c1.vy = random(-c1.speed,c1.speed);
  c2.vx = random(-c2.speed,c2.speed);
  c2.vy = random(-c2.speed,c2.speed);


}

// draw()
//
// Description of draw() goes here.
function draw() {
  background(0); 

}
