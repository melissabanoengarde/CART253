"use strict";

/**************************************************
Week 10: p5.sound
Melissa Banoen-Garde

Experimenting with p5.sound
**************************************************/

let barkSFX;

function preload() {
  barkSFX = loadSound(`assets/sounds/bark.wav`);

}


// Description of setup() goes here.
function setup() {
  createCanvas(600,600);
  userStartAudio();

}


// Description of draw() goes here.
function draw() {
  background(0);

}


function mousePressed() {

}







/*
NOTES
addCue(); – cues sound to play
rate();
*/
