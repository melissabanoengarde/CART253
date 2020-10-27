"use strict";

/**************************************************
Exercise 05: Juggle Garden
Melissa Banoen-Garde

1 - add a form of user control
2 - add new class and objects
3 - add at least two endings

Juggling with "true" identity
**************************************************/

// variable storing currently active state object (begins empty)
let currentState;
// let timer;

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


// Preloading png's
function preload() {
  palmsImg = loadImage('assets/images/palms.png');
  canadianFlag = loadImage('assets/images/canadian.png');
  filipinoFlag = loadImage('assets/images/filipino.png');
  quebecoisFlag = loadImage('assets/images/quebecois.png');
}


// Description of setup() goes here.
function setup() {
 createCanvas(1100, 900);

 currentState = new Title();

}

// Description of draw() goes here.
function draw() {
  currentState.draw();
}

function mousePressed() {
   currentState.mousePressed();
}
