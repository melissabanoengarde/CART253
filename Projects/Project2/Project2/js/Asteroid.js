"use strict";
// Asteroid
// Asteroid in which the user must avoid

class Asteroid {

  constructor(x, y/*, z,*/, size, speed) {
    this.x = x;
    this.y = y;
    // this.z = z;
    // Velocity
    this.vx = 0;
    this.vy = 0;
    // this.vz = 0;
    this.size = size;

    this.speed = speed;
  }

  // Method of the asteroid's movements
  motion() {
    // velocity randomized between a speed of 8 and 15
    this.vx = this.speed;
    this.vy = this.speed;
    // this.vz = this.speed;

    // allows asteroids to move
    this.x += this.vx;
    this.y += this.vy;
    // this.z += this.vz;
  }


  // Asteroids' appearance
  display() {
    push();
    fill(255, 0, 0); // testing testing
    sphere(this.size);
    pop();
  }

}
