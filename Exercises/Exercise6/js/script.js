"use strict";

/**************************************************
Exercise 06: Make Some Noise
Melissa Banoen-Garde

Working with p5.sound and progressing the final project.
**************************************************/

// An array of stars & the amount of stars in the array
let stars = [];
let numStars = 200;
let star;

// User's object variable
let user;

// Notes to be picked randomly (Cmaj7)
let notes = [`C4`, `E4`, `G4`, `B4`];



// setup()
function setup() {
  createCanvas(1000, 800);
  userStartAudio();

  // Defining new object to call User.js class
  user = new User(width / 2, height / 2, 25);

  // For-loop to create multiple stars from js Star.js class
  for (let i = 0; i < numStars; i++) {
    let x = random(0, width);    // Defining the parameters of our stars
    let y = random(0, height);
    let size = random(2,8);
    let note = random(notes);
    star = new Star (x,y,size, note); // Creating a new object to call the Star.js class
    stars.push(star);           // Pushing new Star.js object in our "stars" array
  }
}

// draw()
//
// Description of draw() goes here.
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
}

// function keyPressed() {
//   createStars();
// }

// function createStars() {
//   // for-loop that makes each star in the "stars" array to go through Star.js class methods.
//   for (let i = 0; i < stars.length; i++) {
//     let star = stars[i];
//
//     if (!star.active) {
//       star.motion();
//       star.display();
//       star.checkStar(user);
//     }
//   }
// }
