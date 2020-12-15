"use strict";

/**************************************************
Project 2: SOLARYSTEM
Melissa Banoen-Garde

Controls:
A = Left    W = UP     E = Forward
D = Right   S = DOWN   Q = Backwards

Use mousepad or mouse to control the camera's angle.

Solarystem begins with simply two planets and the sun.
The user is to control a spaceship around the solar system and
collect stars. Following the feedback of my proposal, I figured
out a way to exemplify — although miniature in comparison to the
actual efforts — the lengths undergone by the human race, in its array of
celestial discoveries. Therefore, the user must collect a precise amount of
stars to unlock a new planet. Once appeared, the user may approach it
to view its description and occupy its environment.
**************************************************/

// Variables for the starting state, the Title.js and Instruction.js
// class object states
let state = `title`;
let title;
let instructions;

// Background colour
let bgColour = 20;

// Canvas' maximum edge to remove potential scrollbars
let canvasEdge = -4;

// An array that stores the individual planets,
// and variables for each planet's 'VR' environment
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

// An array of stars,
// the number of stars in the "stars" array,
// and a variable for our Star.js class object
let stars = [];
let numStars = 800;
let star;

// Variable for our Scorebox.js class object
let scorebox;

// Variable for our User.js class object
let user;

// Variable for our user's spaceship texture
let spaceshipTexture;

// Sound effect for when a star is collected
// and the simulation's 'score' / soundtrack
let starCollectedSFX;
let soundtrack;

// Oscillator
let oscillator;
let angle = 0;

// Variables for our camera following the user
let camX = 0;
let camY = 200;
let camZ = 0;

// Variable for the typefaces
let globalFont;
let symbolFont;
let titleFont;

// A reusable green (theme colour)
let green = {
  r: 0,
  g: 180,
  g2: 250,
  b: 0,
};


// Preloading the assets of the simulation
function preload() {
  // Textures & images
  spaceshipTexture = loadImage('assets/images/spaceshiptexture.jpg');
  earthEnviro = loadImage('assets/images/earth-surface pano.jpg');
  sunEnviro = loadImage('assets/images/sun-pano.gif');
  jupiterEnviro = loadImage('assets/images/jupiter-surface pano.jpg');
  uranusEnviro = loadImage('assets/images/uranus-surface pano.jpg');
  marsEnviro = loadImage('assets/images/mars-surface pano.jpg');
  neptuneEnviro = loadImage('assets/images/neptune-surface pano.jpg');
  saturnEnviro = loadImage('assets/images/saturn-surface pano.jpg');
  mercuryEnviro = loadImage('assets/images/mercury-surface pano.jpg');
  venusEnviro = loadImage('assets/images/venus-surface pano.jpg');

  // Sounds
  starCollectedSFX = loadSound('assets/sounds/starSFX2.m4a');
  soundtrack = loadSound('assets/sounds/p2soundtrack.m4a');

  // Typeface
  globalFont = loadFont('assets/typeface/IBMPlexMono-Regular.otf');
  symbolFont = loadFont('assets/typeface/AstroDotBasic.ttf');
  titleFont = loadFont('assets/typeface/ENGIN.otf');
}


// Setting up the 3D canvas, initializing the class objects, and other elements of the simulation
function setup() {
  createCanvas(windowWidth + canvasEdge, windowHeight + canvasEdge, WEBGL);
  smooth();

  initializeStates();
  initializePlanets();
  initializeStars();
  initializeUI();
  initializeSound();
}

// Initializing and defining the new objects to call the Title.js and Instruction.js class object states
function initializeStates() {
  title = new Title();
  instructions = new Instruction();
}

// Initializing the planets class objects
// Declaring all the subclasses by establishing their own variables, then pushing them inside "planets" array
function initializePlanets() {
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
}

// Initializing the Star.js class object
function initializeStars() {
  // For-loop to create multiple stars from Star.js class
  for (let i = 0; i < numStars; i++) {

    // Defining the parameters of our stars
    let x = random(-width, width);
    let y = random(-height, height);

    // "200" so they don't appear too close to the screen
    let z = random(-1000, 200);
    let size = random(1, 5);

    // Creating a new object to call the Star.js class
    star = new Star(x, y, z, size, starCollectedSFX);

    // Pushing new Star.js object in our "stars" array
    stars.push(star);
  }
}

// Initializing the User.js class object and the user's "tools" such as their scorecount
function initializeUI() {
  // Defining new object to call the Scorebox.js class
  scorebox = new Scorebox();

  // Defining new object to call User.js class
  user = new User(0, 300, 350, 10, spaceshipTexture);
}

// Initializing all sounds in the simulation
function initializeSound() {
  // Oscillator
  // Creating the oscillator and setting the amplitude
  oscillator = new p5.Oscillator(440, `sine`);
  oscillator.amp(0.008);

  // Setting soundtrack volume
  soundtrack.setVolume(0.5);
}


// Setting the order of the states. The states will switch according to the key
// pressed by the user (see keyPressed function)
function draw() {
  if (state === `title`) {
    titlePage();
  } else if (state === `instructions`) {
    instructionsPage();
  } else if (state === `simulation`) {
    simulation();
  }
}

// Title state
// Calling the display method of the Title.js class object
function titlePage() {
  title.globe();
  title.display();
}

// Instructions state
// Calling the display method of the Instruction.js class object
function instructionsPage() {
  instructions.display();
}

// Simulation state
// This is where all the class objects' methods are called
function simulation() {
  background(bgColour);

  runCamera();
  runPlanets();
  runStars();
  runUI();
  runSound();
}

// Camera function that follows the user in the simulation
function runCamera() {
  // mouseX's and mouseY's variables, mapping the mouse's display range
  let mousecamXmap = map(mouseX, 0, width, -300, 300);
  let mousecamYmap = map(mouseY, 0, height, -300, 400);

  // Camera that follows the spaceship and can be controlled by the user with mouse or touchpad
  camera(camX, camY, (height / 2) / tan(PI * 30 / 180) + camZ, camX + mousecamXmap, camY + mousecamYmap, mousecamXmap + mousecamYmap, 0, 1, 0);
}

// Planet function that runs the superclass' methods through all the elements in the "planet" array
function runPlanets() {
  // For-loop that pushes the superclass "Planet.js" methods into each star in the "planet" array
  for (let i = 0; i < planets.length; i++) {
    let planet = planets[i];

    // Displays information if planet is already visible or after they become visible
    if (!planet.visible) {
      planet.motion();
      planet.display();
      planet.showInfo();
    }
  }
}

// Star function to call the Star.js class object's methods
function runStars() {
  // For-loop that makes each star in the "stars" array to go through Star.js class methods
  for (let i = 0; i < stars.length; i++) {
    let star = stars[i];

    // Star dissappears from view when it is collected
    if (!star.collected) {
      star.motion();
      star.display();
      star.checkStar(user);
    }
  }
}

// Runs the user's and Scorebox.js' methods
function runUI() {
  // Scorebox
  // Calling the Scorebox.js class methods
  scorebox.showInfo();
  scorebox.display();

  // User
  // Calling the User.js class methods
  user.motion();
  user.display();
}

// Runs all sounds in the simulation
function runSound() {
  // Oscillator
  // Oscillation between -1 and 1
  let tanAngle = tan(angle);
  let newFreq = map(tanAngle, -1, 1, 90, 150);
  oscillator.freq(newFreq);

  // Changes the angle which will change the OUTPUT of the sine function
  // [sin(angle)] changing which frequency will pop out of the map
  angle = angle + 0.5;
}

// Coordinates which key directs the user to the according state
function keyPressed() {
  // if "I" is pressed, user is directed to the instruction page
  if (keyIsDown(73) && state === `title`) {
    state = `instructions`;
  }
  // if "enter" is pressed, user is directed to the simulation
  else if (keyIsDown(13) && state === `title`) {
    state = `simulation`;

    // Begins soundtrack, loop is placed here so distortion doesn't grow
    // from drawing over and over again
    soundtrack.loop();
  }
  // if user is on the instruction page and presses "B", user is directed back to the title page
  else if (keyIsDown(66) && state === `instructions`) {
    state = `title`;
  }

  // This ensures that the oscillation works during the simulation,
  // only when the handle input keys are pressed
  if (state === `simulation`) {
    if (keyIsDown(65) || keyIsDown(68) || keyIsDown(87) || keyIsDown(83) || keyIsDown(69) || keyIsDown(81)) {
      oscillator.start();
    }
  }
}

// Oscillation stops when key is released
function keyReleased() {
  oscillator.stop();
}

// Allows user to zoom in/out with mouse wheel or touchpad
// From "Conditionals, 4.5: Mouse Input"
function mouseWheel(event) {
  let minZoom = -50;
  let maxZoom = 250;

  // event.delta contains the distance it scrolled in pixels
  camZ += event.delta;
  camZ = constrain(camZ, minZoom, maxZoom);
}


/*******************************************************************************
NOTES:
- new camera([x], [y], [z], [centerX], [centerY], [centerZ], [upX], [upY], [upZ])
- camera(0, 0, (height/2) / tan(PI/6), 0, 0, 0, 0, 1, 0)  [default camera position]
  from https://processing.org/tutorials/p3d/
- spaceship texture: https://www.pinterest.ca/pin/731975745662291861/
*******************************************************************************/
