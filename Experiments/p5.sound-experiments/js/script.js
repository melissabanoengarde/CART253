"use strict";

/**************************************************
Week 10: p5.sound
Melissa Banoen-Garde

Experimenting with p5.sound
**************************************************/

let barkSFX;

// to display "BARK!" or not at the beginning
let showBarkText = false;

function preload() {
  barkSFX = loadSound(`assets/sounds/bark.wav`);
}


// Description of setup() goes here.
function setup() {
  createCanvas(600,600);
  userStartAudio();

  // SYNTAX: addCue(time, callback, [value])
  // add cues to sound (in seconds) which will either showBark() or hideBark()
  // in order to only show the text during barking sounds:
  barkSFX.addCue(0.1, showBark);  // *show*Bark
  barkSFX.addCue(0.3, hideBark);  // *hide*Bark
  barkSFX.addCue(0.4, showBark);  // *show*Bark
  barkSFX.addCue(0.7, hideBark);  // *hide*Bark
}


// Description of draw() goes here.
function draw() {
  background(0);

  // If showBarkText is true, we display BARK! on canvas
  if (showBarkText) {
    push();
    fill(255);
    textSize(64);
    textAlign(CENTER, CENTER);
    text(`BARK!`, width /2, height/2);
    pop();
  }
}

// Called when the appropriate cue is triggered
function showBark() {
  showBarkText = true;
}

// Called when the appropriate cue is triggered
function hideBark() {
  showBarkText = false;
}

function mousePressed() {
  barkSFX.play();
}

// mousePressed > showBark function = addCue(0.1, showBark) > hideBark function = addCue(0.3, hideBark)






/*
NOTES
addCue(); – cues sound to play
rate();
*/
