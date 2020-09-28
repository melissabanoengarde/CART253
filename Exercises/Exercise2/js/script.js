/**************************************************
Exercise 02: Dodge-Em
Melissa Banoen-Garde

This activity implements what we learned in Week 4;
conditionals, booleans, loops, mouse input,
movement, and intermediate drawing. As well as learn
new functions (dist(), noLoop(), noCursor()).
**************************************************/
let spaceShip;

function preload() {
  spaceShip = loadImage ("assets/images/spaceship.png");
}


//VARIABLES
let user = {
  x: 0,
  y: 250,
  size: 100,
  fill: 255
}

let covid19 = {
  x: 0,
  y: 250,
  size: 100,
  vx: 0,
  vy: 0,
  speed: 15,
  fill: {
    r: 255,
    g: 0,
    b: 0
  }
}

let numStatic = 1500;

//SETUP******************************************/

function setup() {

  createCanvas(windowWidth, windowHeight);

  covid19.y = random(0, height);
  covid19.vx = covid19.speed;

  noCursor();
}

//DRAW********************************************/

function draw() {

  background(0);

  //STATIC
  for (let i = 0; i < numStatic; i++) {
    let x = random(0, width);
    let y = random(0, height);
    stroke(255);
    point(x, y);
  }

  //USER'S SPACESHIP
  //Movement
  user.x = mouseX;
  user.y = mouseY;

  //Display
  image(spaceShip, mouseX, mouseY, 100, 100);



  //COVID19 CIRCLE
  //Movement
  covid19.x += covid19.vx;
  covid19.y += covid19.vy;

  if (covid19.x > windowWidth) {
    covid19.x = 0;
    covid19.y = random(0, windowHeight);
  }

  //Display
  fill(covid19.fill.r, covid19.fill.g, covid19.fill.b);
  noStroke();
  ellipse(covid19.x, covid19.y, covid19.size);


  //Catching COVID19
  let d = dist(user.x, user.y, covid19.x, covid19.y);
  if (d < covid19.size / 2 + user.size / 2) {
    noLoop();
  }

}
