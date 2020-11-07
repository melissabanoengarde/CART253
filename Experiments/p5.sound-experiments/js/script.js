"use strict";

/**************************************************
Week 10: p5.sound
Melissa Banoen-Garde

Experimenting with p5.sound
**************************************************/

let oscillator;
let angle = 0;

// Description of setup() goes here.
function setup() {
  createCanvas(600,600);
  userStartAudio();

    // SYNTAX: new p5.Oscillator([freq], [type]), 440Hz is the default frequency & sine wave is usually the default
  oscillator = new p5.Oscillator(440, `tan`);

  // Amplitude
  oscillator.amp(0.2);
}


// Description of draw() goes here.
function draw() {
  background(0);

  // as you increase the angle, it oscillates between -1 and 1
  let sinAngle = tan(angle);
  let newFreq = map(sinAngle, -1, 1, 30, 90);
  oscillator.freq(newFreq);

  // changes the angle which will change the OUTPUT of the sine function [sin(angle)] which will change which frequency will pop out of the map [map(sinAngle, -1, 1, 440, 880)]
  angle = angle + 0.5;
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
