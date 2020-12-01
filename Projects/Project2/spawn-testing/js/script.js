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

// setup()
//
// Description of setup() goes here.
function setup() {
  createCanvas(700,700,WEBGL);

  for (let i = 0; i < numAsteroids; i++) {
    let x = random(-width, width);
    let y = random(-height, height);
    let z = random(-1000, 1000);
    let size = random(8, 15);

    asteroid = new Asteroid(x,y,z,size);
    asteroids.push(asteroid);
  }
}

// draw()
//
// Description of draw() goes here.
function draw() {
  background(240);

  for(let i = 0; i < asteroids.length; i++) {
    let asteroid = asteroids[i];

    asteroid.motion();
    asteroid.display();
  }
}
