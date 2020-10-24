// "use strict";

/**************************************************
Exercise 05: Juggle Garden
Melissa Banoen-Garde

1 - add a form of user control
2 - add new class and objects
3 - add at least two endings

Juggling with "true" identity
**************************************************/

/* Variables to store our entities
let = palm; */

// Variables to store images
let = palmsImg;

// Preloading png's
function preload() {
  palmsImg = loadImage('assets/images/palms.png');
}


// Description of setup() goes here.
function setup() {
 createCanvas(1100,900);

 palm = new Palms(200, 240, palmsImg);

}

// Description of draw() goes here.
function draw() {
  background(250, 255, 176);

  // calling Palms.js's methods
  palm.move();
  palm.display();

}
