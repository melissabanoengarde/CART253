"use strict";

/**************************************************
Exercise 06: Make Some Noise
Melissa Banoen-Garde

Working with p5.sound to be implemented in the final project.
+ Added Oscillator for whenever user moves (AWSD)
+ Used a synthesizer to play random notes for whenever user
  collects a star
+ Added reverb for when star-is-collected synthesizer is triggered
**************************************************/

// An array of stars & the amount of stars in the array
let stars = [];
// Amount of stars displayed in simulation and contained in the "stars" array
let numStars = 300;
// Variable for our Star.js class object
let star;

// Variable for our User.js class object
let user;

// Synthesizer: synth and reverb variables and notes to be picked randomly from Abm7 chord
let synth;
let reverb;
let notes = [`B5`, `Eb5`, `Gb5`, `Ab5`];

// Oscillator
let oscillator;
let angle = 0;


// setup()
function setup() {
  createCanvas(1000, 800);
  userStartAudio();

  // Defining new object to call User.js class
  user = new User(width / 2, height / 2, 25);

  // Creating the synthesizer and reverb
  synth = new p5.PolySynth();
  reverb = new p5.Reverb();

  // Creating the oscillator and setting the amplitude
  oscillator = new p5.Oscillator(440, `sine`);
  oscillator.amp(0.02);

  // For-loop to create multiple stars from js Star.js class
  for (let i = 0; i < numStars; i++) {
    let x = random(0, width);    // Defining the parameters of our stars
    let y = random(0, height);
    let size = random(2,8);
    let note = random(notes);
    star = new Star (x, y, size, note, synth); // Creating a new object to call the Star.js class
    stars.push(star);   // Pushing new Star.js object in our "stars" array
  }
}


// draw()
function draw() {
  background(10);

  // Calling the User.js class methods
  user.motion();
  user.display();

  // for-loop that makes each star in the "stars" array to go through Star.js class methods.
  for (let i = 0; i < stars.length; i++) {
    let star = stars[i];

    if (!star.collected) {
      star.motion();
      star.display();
      star.checkStar(user);
    }
  }

  // Oscillation between -1 and 1
  let tanAngle = tan(angle);
  let newFreq = map(tanAngle, -1, 1, 90, 150);
  oscillator.freq(newFreq);

  // changes the angle which will change the OUTPUT of the sine function [sin(angle)] which will change which frequency will pop out of the map
  angle = angle + 0.5;
}


// Oscillation starts when key is pressed
function keyPressed() {
    oscillator.start();
}

// Oscillation stops when key is released
function keyReleased() {
  oscillator.stop();
}
