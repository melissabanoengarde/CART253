"use strict";

/**************************************************
Solar System Simulation
Melissa Banoen-Garde

Ideas I plan to include if time and knowledge permits...

1) First state: intro + instructions of what to collect in order to unlock a planet
2) Only two planets (plus the Sun) are active. User can hover over them for infos.
   User must accumulate stars of respective planets to 'unlock' its visibility and have access to
   its infos. Thinking about incorporating change of planet's texture once hovered over it.
3) Once enough stars have been accummulated, a 'you've unlocked ____' sound
   (and maybe notification box?) is triggered to appear on screen.
5) User must avoid asteroids or they may lose a portion of the stars they've collected.
   Will figure out how to incorporate this.
4) User can move around the simulation in a spaceship. Spaceship's sprite is
   still to be determined. Stars' appearance as well but but for now I'm thinking they'll
   appear as mini spheres with different colors referring to its respective planet.
**************************************************/

// An array that stores the planets
let planets = [];

// An array of stars, the number of stars in the "stars" array, and a variable for our Star.js class object
let stars = [];
let numStars = 2000;
let star;

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
    let x = random(-width, width);    // Defining the parameters of our stars
    let y = random(-height, height);
    let z = random(-1000, 100);       // "100" so they don't appear too close to the screen
    let size = random(1,5);
    star = new Star (x, y, z, size); // Creating a new object to call the Star.js class
    stars.push(star);   // Pushing new Star.js object in our "stars" array
  }
}


// draw()
function draw() {
  background(20);
  // camera(0, 0, (height/2) / tan(PI/6), 0, 0, 0, 0, 1, 0);
  orbitControl(1, 1, 0.05);

  // for-loop that pushes the superclass "Planet.js" methods into each star in the "stars" array
  for (let i = 0; i < planets.length; i++) {
    let planet = planets[i];
    planet.motion();
    planet.display();
  }

  // for-loop that makes each star in the "stars" array to go through Star.js class methods.
  for (let i = 0; i < stars.length; i++) {
    let star = stars[i];
      star.motion();
      star.display();
    }
}

console.log(planets);










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
*/
