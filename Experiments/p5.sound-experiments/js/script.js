"use strict";

/**************************************************
Week 10: p5.sound
Melissa Banoen-Garde

Experimenting with p5.sound
**************************************************/

let synth;
// Notes array which is our scale
let notes = [`F2`, `G2`, `F2`, `C3`, `C3`, `F2`, `Eb3`, `C3`]; // F-minor scale
let currentNote = 0;

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
 setInterval(playRandomNote, 150);  // SYNTAX: setInterval(function, milliseconds)
          // ^ you only need to tell it the name of the function to call
}


function playRandomNote() {
  let note = notes[currentNote];
  synth.play(note, 1, 0, 0.1);
     // play([note], [velocity], [secondsFromNow], [sustainTime])

  currentNote = currentNote + 1;

  // this RESTARTS the scale to the bottom again
  if (currentNote === notes.length) {
    currentNote = 0;
  }
}




/*
SYNTAX:

new p5.PolySynth([synthVoice], [maxVoices])

play([note], [velocity], [secondsFromNow], [sustainTime])

*/
