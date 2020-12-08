"use strict";

/**************************************************
Final Project: Solar-System Simulation
Melissa Banoen-Garde

User can control spaceship with keys AWSD + Q (backwards) and E (forward).
Use mousepad or mouse to control the camera's angle.
Try to approach a star and collect it!
**************************************************/

// Background colour
let bgColour = 20;

// Canvas' maximum edge to remove potential scrollbars
let canvasEdge = -4;

// An array that stores the individual planets,
// and variables for each planet's environment
// when approached by the user
let planets = [];
let earthEnviro;
let sunEnviro;
let jupiterEnviro;
let uranusEnviro;
let marsEnviro;
let neptuneEnviro;
let saturnEnviro;
let mercuryEnviro;
let venusEnviro;

// An array that stores the asteroids,
// the number of asteroids spawned per 2 seconds and in the array,
// and a variable for the Asteroid.js
let asteroids = [];
let numAsteroids = 2;
let asteroid;

// Spawns an asteroid every 2 seconds (2000 milliseconds)
// (referring to the Traffic Inferno simulation)
const spawnDelay = 1500;

// tracks the interval that spawns new asteroids
let spawnInterval;

// An array of stars,
// the number of stars in the "stars" array,
// and a variable for our Star.js class object
let stars = [];
let numStars = 1000;
let star;

// Variable for our Scorebox.js class object
let scorebox;

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

// Variable for the typefaces
let globalFont;
let symbolFont;

// A reusable green (theme colour)
let green = {
  r: 0,
  g: 180,
  b: 0,
};


// Preloading the assets of the simulation
function preload() {
  // Textures & images
  spaceshipTexture = loadImage('assets/images/spaceshiptexture.jpg');
  earthEnviro = loadImage('assets/images/earth-jungle.jpg');
  sunEnviro = loadImage('assets/images/sun3.gif');
  jupiterEnviro = loadImage('assets/images/jupiter-planet.gif');
  uranusEnviro = loadImage('assets/images/uranus-simulation.jpg');
  marsEnviro = loadImage('assets/images/mars-surface.jpg');
  neptuneEnviro = loadImage('assets/images/neptune-surface.jpg');
  saturnEnviro = loadImage('assets/images/saturn-surface-3.jpg');
  mercuryEnviro = loadImage('assets/images/mercury-surface.jpg');
  venusEnviro = loadImage('assets/images/venus-surface.jpg');


  // Sounds
  starCollectedSFX = loadSound('assets/sounds/starSFX2.m4a');

  // Typeface
  globalFont = loadFont('assets/typeface/IBMPlexMono-Regular.otf');
  symbolFont = loadFont('assets/typeface/AstroDotBasic.ttf');
}



// Setup of the 3D canvas and the planets
function setup() {
  createCanvas(windowWidth + canvasEdge, windowHeight + canvasEdge, WEBGL);
  smooth();
  // PLANETS
  // Declaring all the subclasses by establishing their own variables, then pushing them inside "planets" array
  // Sun
  let sun = new Sun(0, 70, 0, 0.003, false);
    planets.push(sun);
  // Mercury
  let mercury = new Mercury(100, 7, 0.01, 0.002, false);
    planets.push(mercury);
  // Venus
  let venus = new Venus(130, 12, 0.005, 0.03, false);
    planets.push(venus);
  // Earth
  let earth = new Earth(170, 13.5, 0.004, 0.01, false);
    planets.push(earth);
  // Mars
  let mars = new Mars(205, 8, 0.004, 0.1, false);
    planets.push(mars);
  // Jupiter
  let jupiter = new Jupiter(340, 40, 0.0015, 0.02, false);
    planets.push(jupiter);
  // Saturn
  let saturn = new Saturn(500, 35, 0.0008, 0.002, true);
    planets.push(saturn);
  // Uranus
  let uranus = new Uranus(680, 25, 0.0002, 0.002, false);
    planets.push(uranus);
  // Neptune
  let neptune = new Neptune(800, 20, 0.0003, 0.002, false);
    planets.push(neptune);


  // ASTEROIDS
  // For-loop to create multiple asteroids from the Asteroid.js class
  // for (let i = 0; i < numAsteroids; i++) {
  //   let x = random(-width, width);
  //   let y = random(-height, height);
  //   let z = random(-1000, -700);

    // Creating a new object, calling the Asteroid.js class object
    // asteroid = new Asteroid(x,y,z);

    // Pushing new Asteroid.js object in our "asteroids" array
    // asteroids.push(asteroid);
  // }

  // Frequency of asteroids spawned
  // setInterval(function, milliseconds);
  // spawnInterval = setInterval(spawnAsteroid, spawnDelay);


  // STARS
  // For-loop to create multiple stars from Star.js class
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


  // SCOREBOX
  // Defining new object to call the Scorebox.js class
  scorebox = new Scorebox();

  // USER
  // Defining new object to call User.js class
  user = new User(0, 300, 60, 20, spaceshipTexture);


  // OSCILLATOR
  // Creating the oscillator and setting the amplitude
  oscillator = new p5.Oscillator(440, `sine`);
  oscillator.amp(0.02);
}


// spawnAsteroid()
// A function that spawns two asteroids from random edges and depth of the canvas
// This function is called in the parameters of "setInterval()", in the setup function
// function spawnAsteroid() {
//   let x;
//   let y;
//   let z = random(-2000, -1500);
//   let r = random(0, 1);
//
//   if (r < 0.25) {
//     x = -width;                           // x, far-left
//     y = random(-height/3, -height/4);     // y, random between top-third & top-quarter
//   }
//   else if (r < 0.5) {
//     x = random(-width, 0);                // x, random between far-left & center
//     y = random(-height, 0);               // y, random between center & top
//   }
//   else if (r < 0.75) {
//     x = -width;                           // x, center
//     y = random(-height/3, -height/4);     // y, random between top-third & top-quarter
//   }
//   else {
//     x = random(-width, 0);                // x, random between far-left & center
//     y = random(-height, 0);               // y, random between center & top
//   }
  // Spawns a new asteroid in that position
  // let asteroid = new Asteroid(x,y,z);
  // asteroids.push(asteroid);

  // console.log(`x:` + asteroid.x, `y:` + asteroid.y, `z:` + asteroid.z);
  // console.log(`x:` + user.x, `y:` + user.y, `z:` + user.z);
// }


// draw()
function draw() {
  background(bgColour);


  // CAMERA
  cameraSetup();


  // PLANETS
  // For-loop that pushes the superclass "Planet.js" methods into each star in the "planet" array
  for (let i = 0; i < planets.length; i++) {
    let planet = planets[i];
    planet.motion();
    planet.display();
    // displays information if planet is already visible or after they become visible
    if (planet.visible === true || !planet.visible) {
      planet.showInfo();
    }
  }


  // ASTEROIDS
  // For-loop that makes each asteroid in the "asteroids" array go through the Asteroid.js class methods
  for (let i = 0; i < asteroids.length; i++) {
      let asteroid = asteroids[i];
      asteroid.motion();
      asteroid.display();
    }


  // STARS
  // For-loop that makes each star in the "stars" array to go through Star.js class methods.
  for (let i = 0; i < stars.length; i++) {
    let star = stars[i];

    if (!star.collected) {
      star.motion();
      star.display();
      star.checkStar(user);
      }
    }

  // SCOREBOX
  // Calling the Scorebox.js class methods
  scorebox.showInfo();
  scorebox.display();


  // USER
  // Calling the User.js class methods
  user.motion();
  user.display();


  // OSCILLATOR
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




// Camera
// The camera follows the user in the simulation
function cameraSetup() {
  // mouseX's and mouseY's variables, mapping the range in which the user-controlled camera can move
  let mousecamXmap = map(mouseX, 0, width, -300, 300);
  let mousecamYmap = map(mouseY, 0, height, -300, 400);
  // Camera that follows the spaceship and can be controlled by the user with mouse
  camera(camX, camY, (height/2) / tan(PI * 30 / 180) + camZ, camX + mousecamXmap, camY + mousecamYmap, mousecamXmap+mousecamYmap, 0, 1, 0);
  // new camera([x], [y], [z], [centerX], [centerY], [centerZ], [upX], [upY], [upZ])
}

// Allows user to zoom in/out with mouse wheel or touchpad
// From "Conditionals, 4.5: Mouse Input"
function mouseWheel(event) {
  // event.delta contains the distance it scrolled in pixels
  camZ += event.delta;
}







/*******************************************************************************
NOTES:
new camera([x], [y], [z], [centerX], [centerY], [centerZ], [upX], [upY], [upZ])

camera(0, 0, (height/2) / tan(PI/6), 0, 0, 0, 0, 1, 0)  [default camera position]
  from https://processing.org/tutorials/p3d/

spaceship texture: https://www.pinterest.ca/pin/731975745662291861/
*/
