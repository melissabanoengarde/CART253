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

                                                                                  // stars
                                                                                  // let stars = [];
                                                                                  // let numStars = 500;


// Setup of the 3D canvas and our planets
function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);

  let sun = new Sun();                                                                                 // for loop to display the stars
  planets.push(sun);                                                                               // for (let s = 0; s < numStars; s++) {
                                                                                  //   stars[s] = new Star();
                                                                                  // }



  // sun = new Planet(0, 70, 0, 0.003);
  // mercury = new Planet(100, 7, 0.01, 0.002);
  // venus = new Planet(130, 12, 0.005, 0.03);
  // earth = new Planet(170, 13.5, 0.004, 0.01);
  // mars = new Planet(205, 8, 0.004, 0.1);
  // jupiter = new Planet(340, 40, 0.0015, 0.02);
  // saturn = new Planet(500, 35, 0.0008, 0.002);
  // uranus = new Planet(680, 25, 0.0002, 0.002);
  // neptune = new Planet(800, 20, 0.0003, 0.002);
}

// draw()
//
// Description of draw() goes here.
function draw() {
  background(20);
  camera(0, 0, (height/2) / tan(PI/6), 0, 0, 0, 0, 1, 0);
  // orbitControl(1, 1, 0.05);
  let planet = new Planet();
                                                                                  // for loop to call Star.js' method and go through each star
                                                                                  // for (let s = 0; s < stars.length; s++) {
                                                                                  //   stars[s].move();
                                                                                  //   stars[s].display();
                                                                                  // }

  // P L A N E T S
  // sun
  push();             // keep push pops so they spin without affecting each other
  let sun = new Sun();
  sun.motion();
  sun.display();
  pop();

//   // mercury
//   push();
//   mercury.motion();
//   mercury.display();
//   pop();
//
//   // venus
//   push();
//   venus.motion();
//   venus.display();
//   pop();
//
//   // earth
//   push();
//   earth.motion();
//   earth.display();
//   pop();
//
//   // mars
//   push();
//   mars.motion();
//   mars.display();
//   pop();
//
//   // jupiter
//   push();
//   jupiter.motion();
//   jupiter.display();
//   pop();
//
//   // saturn
//   push();
//   saturn.motion();
//   saturn.display();
//     push();
//       rotateZ(frameCount * 20);
//       // rings of saturn
//       fill(0,200,0);
//       torus(60, 0.1, 60);
//       torus(55, 0.1, 60);
//       torus(50, 0.1, 60);
//       torus(45, 0.1, 60);
//       torus(40, 0.1, 60);
//     pop();
//   pop();
//
//   // uranus
//   push();
//   uranus.motion();
//   uranus.display();
//   pop();
//
//   // neptune
//   push();
//   neptune.motion();
//   neptune.display();
//   pop();
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
*/
