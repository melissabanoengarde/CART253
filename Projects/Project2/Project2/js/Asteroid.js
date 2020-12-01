"use strict";
// Asteroid
// Asteroid in which the user must avoid otherwise collected stars will be lost

class Asteroid {

  constructor(x, y, z) {
    this.x = x;
    this.y = y;
    this.z = z;

    this.vx = 0;
    this.vy = 0;
    this.vz = 0;
    this.minSpeed = 10;
    this.maxSpeed = 20;

    this.size = 30;

  }

  // Method of the asteroid's movements
  motion() {
    this.vx = random(this.minSpeed, this.maxSpeed);
    this.vy = random(this.minSpeed, this.maxSpeed);
    this.vz = random(this.minSpeed, this.maxSpeed);

    // allows asteroids to move
    this.x += this.vx;
    this.y += this.vy;
    this.z += this.vz;
  }


  // Asteroids' appearance
  display() {
    push();
    // extension of motion
    // (must be placed within the push and pops of 3D primitives)
    translate(this.x, this.y, this.z);
    
    fill(255, 0, 0); // testing testing
    sphere(this.size);
    pop();
  }

}
