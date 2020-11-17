"use strict";

/**************************************************
Exercise 7: Progress Report
Melissa Banoen-Garde


**************************************************/

// Background colour
let bgColour = 20;

// An array that stores the planets
let planets = [];

// An array of stars, the number of stars in the "stars" array, and a variable for our Star.js class object
let stars = [];
let numStars = 2000;
let star;

// Variable for our User.js class object
let user;

// Variable for our user's spaceship texture
let spaceshipTexture;

// Sound effect for when a star is collected
let starCollectedSFX;

// Oscillator
let oscillator;
let angle = 0;

// Variables for our camera following the user
let camX = 0;
let camY = 0;
let camZ = 0;



// Preloading the assets of the simulation
function preload() {
  // textures & images
  spaceshipTexture = loadImage('assets/images/spaceshiptexture.jpg');
  // sounds
  starCollectedSFX = loadSound('assets/sounds/starSFX2.m4a');
}



// Setup of the 3D canvas and our planets
function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);

  // Declaring all the subclasses by creating their own variables, then pushing them inside "planets" array
  let sun = new Sun(0, 70, 0, 0.003);
    planets.push(sun);

  let mercury = new Mercury(100, 7, 0.01, 0.002);
    planets.push(mercury);

  let venus = new Venus(130, 12, 0.005, 0.03);
    planets.push(venus);

  let earth = new Earth(170, 13.5, 0.004, 0.01);
    planets.push(earth);

  let mars = new Mars(205, 8, 0.004, 0.1);
    planets.push(mars);

  let jupiter = new Jupiter(340, 40, 0.0015, 0.02);
    planets.push(jupiter);

  let saturn = new Saturn(500, 35, 0.0008, 0.002);
    planets.push(saturn);

  let uranus = new Uranus(680, 25, 0.0002, 0.002);
    planets.push(uranus);

  let neptune = new Neptune(800, 20, 0.0003, 0.002);
    planets.push(neptune);


  // For-loop to create multiple stars from js Star.js class
  for (let i = 0; i < numStars; i++) {
    // Defining the parameters of our stars
    let x = random(-width, width);
    let y = random(-height, height);
    // "100" so they don't appear too close to the screen
    let z = random(-1000, 200);
    let size = random(1,5);
    // Creating a new object to call the Star.js class
    star = new Star (x, y, z, size, starCollectedSFX);
    // Pushing new Star.js object in our "stars" array
    stars.push(star);
  }


  // Defining new object to call User.js class
  user = new User(0, 300, 60, 20, spaceshipTexture);


  // Creating the oscillator and setting the amplitude
  oscillator = new p5.Oscillator(440, `sine`);
  oscillator.amp(0.02);
}



// draw()
function draw() {
  background(bgColour);


  // Camera
  // mouseX's and mouseY's variables, mapping the range in which the user-controlled camera can move
  let mousecamXmap = map(mouseX, 0, width, -300, 300);
  let mousecamYmap = map(mouseY, 0, height, -300, 400);
  // Camera that follows the spaceship and can be controlled by the user with mouse
  camera(camX, camY, (height/2) / tan(PI * 30 / 180) + camZ, camX + mousecamXmap, camY + mousecamYmap, mousecamXmap+mousecamYmap, 0, 1, 0);
  // new camera([x], [y], [z], [centerX], [centerY], [centerZ], [upX], [upY], [upZ])


  // for-loop that pushes the superclass "Planet.js" methods into each star in the "stars" array
  for (let i = 0; i < planets.length; i++) {
    let planet = planets[i];
    planet.motion();
    planet.display();
  }


  // for-loop that makes each star in the "stars" array to go through Star.js class methods.
  for (let i = 0; i < stars.length; i++) {
    let star = stars[i];

    if (!star.collected) {
      star.motion();
      star.display();
      star.checkStar(user);
      }
    }


  // Calling the User.js class methods
  user.motion();
  user.display();


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









/*
NOTES:
new camera([x], [y], [z], [centerX], [centerY], [centerZ], [upX], [upY], [upZ])

camera(0, 0, (height/2) / tan(PI/6), 0, 0, 0, 0, 1, 0)  [default camera position]
  from https://processing.org/tutorials/p3d/

***Definitely could have put all the planets in a single array to call motion() and display() to save time


Planets
Sun
Mercury
Venus
Earth
Mars
Jupiter
Saturn
Uranus
Neptune

spaceship texte: https://www.pinterest.ca/pin/731975745662291861/
*/
