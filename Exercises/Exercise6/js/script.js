"use strict";

/**************************************************
Exercise 06: Make Some Noise
Melissa Banoen-Garde

Working with p5.sound and progressing the final project.
**************************************************/

// An array of stars & the amount of stars in the array
let stars = [];
let numStars = 150;
let star;

let user;

// setup()
//
// Description of setup() goes here.
function setup() {
  createCanvas(1000, 800);

  // For-loop to create multiple stars from js Star.js class
  for (let i = 0; i < numStars; i++) {
    let x = random(0, width);    // Defining the parameters of our stars 
    let y = random(0, height);
    let size = random(2,5);
    star = new Star (x,y,size); // Creating a new object to call the Star.js class
    stars.push(star);           // Pushing new Star.js object in our "stars" array
  }
}

// draw()
//
// Description of draw() goes here.
function draw() {
  background(20);

  // for-loop that makes each star in the "stars" array to go through Star.js class methods.
  for (let i = 0; i < stars.length; i++) {
    let star = stars[i];
    star.motion();
    star.display();
  }

}
