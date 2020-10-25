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
let canadianFlags = [];
let filipinoFlags = [];
let quebecoisFlags = [];

// Variables to store images
let palmsImg;
let canadianFlag;
let filipinoFlag;
let quebecoisFlag;

//Declaring gravity Variable
let gravityForce = 0.0025;

// Variable to store the flags displayed
let numCanadianFlags = 30;
let numFilipinoFlags = 30;
let numQuebecFlags = 30;

// let state = title;
/*------------------------------------------------------------*/

// Preloading png's
function preload() {
  palmsImg = loadImage('assets/images/palms.png');
  canadianFlag = loadImage('assets/images/canadian.png');
  filipinoFlag = loadImage('assets/images/filipino.png');
  quebecoisFlag = loadImage('assets/images/quebecois.png');
}


// Description of setup() goes here.
function setup() {
 createCanvas(1100,900);

 palm = new Palms(200, 240, palmsImg);

 // for-loop for numCanadiancanadianFlags; allows many to appear
 for (let i = 0; i < numCanadianFlags; i++) {
   let x = random(0, width);
   let y = random(-600, -200);

   let canadian = new Canadian(x, y, canadianFlag);
   canadianFlags.push(canadian);
  }

// for-loop for numFilipinoFlags
  for (let i = 0; i < numFilipinoFlags; i++) {
    let x = random(0, width);
    let y = random(-600, -200);

    let filipino = new Filipino(x, y, filipinoFlag);
    filipinoFlags.push(filipino);
   }

  // for-loop for numQuebecFlags
   for (let i = 0; i < numQuebecFlags; i++) {
     let x = random(0, width);
     let y = random(-600, -200);

     let quebecois = new Quebecois(x, y, quebecoisFlag);
     quebecoisFlags.push(quebecois);
    }
}

// Description of draw() goes here.
function draw() {
  background(255);

  // calling Palms.js's methods
  palm.move();
  palm.display();


// for-loop that counts from 0 up to canadianFlags.legth
  /* CANDIAN */
  for (let i = 0; i < canadianFlags.length; i++) {
    let canadianFlag = canadianFlags[i];
    if (canadianFlag.active) {
      canadianFlag.gravity(gravityForce);
      canadianFlag.move();
      canadianFlag.bounce(palm);
      canadianFlag.display();
    }
  }

  /* FILIPINO */
  for (let i = 0; i < filipinoFlags.length; i++) {
    let filipinoFlag = filipinoFlags[i];
    if (filipinoFlag.active) {
      filipinoFlag.gravity(gravityForce);
      filipinoFlag.move();
      filipinoFlag.bounce(palm);
      filipinoFlag.display();
    }
  }

  /* QUEBECOIS */
  for (let i = 0; i < quebecoisFlags.length; i++) {
    let quebecoisFlag = quebecoisFlags[i];
    if (quebecoisFlag.active) {
      quebecoisFlag.gravity(gravityForce);
      quebecoisFlag.move();
      quebecoisFlag.bounce(palm);
      quebecoisFlag.display();
    }
  }

}
