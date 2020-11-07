"use strict";

/**************************************************
Week 10: p5.sound
Melissa Banoen-Garde

Experimenting with p5.sound
**************************************************/

let synth;
// Notes array which is our scale
let notes = [`F4`, `G4`, `Ab4`, `Bb4`, `C4`, `Db`, `Eb4`, `F5`]; // F-minor scale

// Description of setup() goes here.
function setup() {
  createCanvas(600,600);

  synth = new p5.PolySynth();

  userStartAudio();
}


// Description of draw() goes here.
function draw() {
  background(0);
}

function keyPressed() {
 // allows you to call a number every milli seconds
 setInterval(playRandomNote, 500);  // SYNTAX: setInterval(function, milliseconds)
          // ^ you only need to tell it the name of the function to call
}

function playRandomNote() {
  let randomNote = random(notes);
  synth.play(randomNote, 0.2, 0, 1);
     // play([note], [velocity], [secondsFromNow], [sustainTime])
}




/*
SYNTAX:

new p5.PolySynth([synthVoice], [maxVoices])

play([note], [velocity], [secondsFromNow], [sustainTime])

*/
