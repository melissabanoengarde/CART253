"use strict";

/**************************************************
Week 10: p5.sound
Melissa Banoen-Garde

Experimenting with p5.sound
**************************************************/

let oscillator;
let t = 0;

// Description of setup() goes here.
function setup() {
  createCanvas(600,600);
  userStartAudio();

    // SYNTAX: new p5.Oscillator([freq], [type]), 440Hz is the default frequency & sine wave is usually the default
  oscillator = new p5.Oscillator(440, `sine`);

  // Amplitude
  oscillator.amp(0.2);
}


// Description of draw() goes here.
function draw() {
  background(0);

  // as you increase the angle, it oscillates between -1 and 1
  let noiseValue = noise(t);
  let newFreq = map(noiseValue, 0, 1, 100, 300);
  oscillator.freq(newFreq);

  t = t + 0.5;
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
