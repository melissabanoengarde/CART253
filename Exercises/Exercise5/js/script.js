"use strict";

/**************************************************
Exercise 05: Juggle Garden
Melissa Banoen-Garde

1 - add a form of user control
2 - add new class and objects
3 - add at least two endings

Juggling with "true" identity
**************************************************/

// Variables to store our entities
let palm;
let flags = [];

// Variables to store images
let palmsImg;
let flagImgs;

//Declaring gravity Variable
let gravityForce = 0.0025;

// Variable to store the flags we'll display
let displayFlags;
let numFlags = 30;

let state = title;
/*------------------------------------------------------------*/

// Preloading png's
function preload() {
  palmsImg = loadImage('assets/images/palms.png');
  flagImgs = loadImage('assets/images/canadian.png');
}


// Description of setup() goes here.
function setup() {
 createCanvas(1100,900);

 palm = new Palms(200, 240, palmsImg);

 // for-loop for numFlags; allows many to appear
 for (let i = 0; i < numFlags; i++) {
   let x = random(0, width);
   let y = random(-500, -200);

   let flag = new Flag(x, y, flagImgs);
   flags.push(flag);
  }
}

// Description of draw() goes here.
function draw() {
  background(250, 255, 176);

  // calling Palms.js's methods
  palm.move();
  palm.display();

  // for-loop that counts from 0 up to flags.legth
  for (let i = 0; i < flags.length; i++) {
    let flag = flags[i];
    if (flag.active) {
      flag.gravity(gravityForce);
      flag.move();
      flag.bounce(palm);
      flag.display();
    }
  }
}
