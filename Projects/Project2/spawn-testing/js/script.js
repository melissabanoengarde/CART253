"use strict";

/**************************************************
Asteroid Spawn Test
Melissa Banoen-Garde

Testing out the skeleton here since the amount of
code on P2 is overwhelming and trials has not been
working.
**************************************************/

let asteroids = [];
let numAsteroids = 2;
let asteroid;

// spawns an asteroid every 2 seconds
const spawnDelay = 2000;

// tracks the interval that spawns a new asteroid
let spawnInterval;

// setup()
//
// Description of setup() goes here.
function setup() {
  createCanvas(700, 700, WEBGL);

  for (let i = 0; i < numAsteroids; i++) {
    let x = random(-width, width);
    let y = random(-height, height);
    let z = random(-1000, 1000);

    asteroid = new Asteroid(x, y, z);
    asteroids.push(asteroid);
  }

  spawnInterval = setInterval(spawnAsteroid, spawnDelay);
}

function spawnAsteroid() {
  let x;
  let y;
  let z;
  let r = random(0, 1);

  if (r < 0.25) {
    x = width;
    y = 0;
    // y = height / 2;
    z = 700;
  } else if (r < 0.5) {
    x = -width;
    y = 0;
    // y = height / 2;
    z = -800;
  } else if (r < 0.75) {
    x = 0;
    y = height/2;
    z = -800;
  } else {
    x = 0;
    y = height/2;
    z = -800;
  }
  let asteroid = new Asteroid(x, y, z);
  asteroids.push(asteroid);

  console.log(`x:` + asteroid.x, `y:` + asteroid.y, `z:` + asteroid.z);
}

// draw()
//
// Description of draw() goes here.
function draw() {
  debugMode();
  orbitControl();

  background(240);

  for (let i = 0; i < asteroids.length; i++) {
    let asteroid = asteroids[i];

    asteroid.motion();
    asteroid.display();
  }
}
