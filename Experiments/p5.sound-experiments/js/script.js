"use strict";

/**************************************************
Week 10: p5.sound
Melissa Banoen-Garde

Experimenting with p5.sound
**************************************************/

let oscillator;

// Description of setup() goes here.
function setup() {
  createCanvas(600,600);
  userStartAudio();

    // SYNTAX: new p5.Oscillator([freq], [type]), 440Hz is the default frequency & sine wave is usually the default
  oscillator = new p5.Oscillator(440, `sine`);

  // Amplitude
  oscillator.amp(0.1);
}


// Description of draw() goes here.
function draw() {
  background(0);

  // Frenquency
  let newFreq = map(mouseY, height, 0, 20, 20000);   // (20-20000 range of hearing frequency)
  oscillator.freq(newFreq);

  push();
  textSize(32);
  textAlign(LEFT, CENTER);
  fill(255);
  text(newFreq, 100, height/2) // displays current frequency 
  pop();
}


function mousePressed() {
  oscillator.start();
}

function mouseReleased() {
  oscillator.stop();
}




/*
NOTES
addCue(); – cues sound to play
rate();
*/
