"use strict";

/**************************************************
Solar System Simulation
Melissa Banoen-Garde

This is the prototype of an interactive simulation
of the solar system for my final project.
**************************************************/

// Variable for each planet
let sun;
let mercury;
let venus;
let earth;
let mars;
let jupiter;
let saturn;
let uranus;
let neptune;

// stars
// let stars = [];
// let numStars = 500;

// sun image texture
let sunImg;

// function to preload simulation's assets
function preload() {
  sunImg = loadImage('assets/images/sun1.gif');
}

// Set up of the 3D canvas and our planets
function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);

  // for loop to display the stars
  // for (let s = 0; s < numStars; s++) {
  //   stars[s] = new Star();
  // }

// OUR SOLAR SYSTEM
// distance = planet's distance from sun
// dia = size of planet
// speed = motion speed
// rspeed = rotation speed

  // new Planet(distance, diameter, speed, rSpeed)
  sun = new Planet(0, 70, 0, 0.003);
  mercury = new Planet(100, 7, 0.01, 0.002);
  venus = new Planet(130, 12, 0.005, 0.03);
  earth = new Planet(170, 13.5, 0.004, 0.01);
  mars = new Planet(205, 8, 0.004, 0.1);
  jupiter = new Planet(340, 40, 0.0015, 0.02);
  saturn = new Planet(500, 35, 0.0008, 0.002);
  uranus = new Planet(680, 25, 0.0002, 0.002);
  neptune = new Planet(800, 20, 0.0003, 0.002);
}

// draw()
//
// Description of draw() goes here.
function draw() {
  background(20);
  // camera(0,0,500,0,0,0,0,0,0,0);
  orbitControl(1, 1, 0.05);

  // for loop to call Star.js' method and go through each star
  // for (let s = 0; s < stars.length; s++) {
  //   stars[s].move();
  //   stars[s].display();
  // }

  // P L A N E T S
  // sun
  push();             // keep push pops so they spin without affecting each other
  sun.motion();
  sun.display();
  pop();

  // mercury
  push();
  mercury.motion();
  mercury.display();
  pop();

  // venus
  push();
  venus.motion();
  venus.display();
  pop();

  // earth
  push();
  earth.motion();
  earth.display();
  pop();

  // mars
  push();
  mars.motion();
  mars.display();
  pop();

  // jupiter
  push();
  jupiter.motion();
  jupiter.display();
  pop();

  // saturn
  push();
  saturn.motion();
  saturn.display();
    push();
      rotateZ(frameCount * 20);
      // rings of saturn
      fill(0,200,0);
      torus(60, 0.1, 60);
      torus(55, 0.1, 60);
      torus(50, 0.1, 60);
      torus(45, 0.1, 60);
      torus(40, 0.1, 60);
    pop();
  pop();

  // uranus
  push();
  uranus.motion();
  uranus.display();
  pop();

  // neptune
  push();
  neptune.motion();
  neptune.display();
  pop();
}








/*
NOTES:
new camera([x], [y], [z], [centerX], [centerY], [centerZ], [upX], [upY], [upZ])

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
