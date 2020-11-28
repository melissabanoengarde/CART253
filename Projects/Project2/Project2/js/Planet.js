// PLANET
// This will be the superclass in which the subclasses (other planets) will inherit

class Planet {

  constructor(distance, diameter, speed, rSpeed) {
    this.distance = distance;   // distance from the sun (center)
    this.diameter = diameter;   // size of planet
    this.speed = speed;         // motion speed
    this.rSpeed = rSpeed;       // rotation speed
    this.angle = 0;
    this.rotateX = 1.5;
    this.strokeWeight = 0.1;
  }

  // What permits the planets to orbit
  motion() {
    push();
    this.x = this.distance * cos(this.angle);
    this.y = this.distance * sin(this.angle);
    // what permits the planets to return to its initial position after circulating around the sun
    this.angle += this.speed;       // planets' motion
    pop();
  }

// The planets' appearance
  display() {
    push();
    /* (!) keep translate and rotateZ within push-pops of display */
    translate(this.x, this.y);
    rotateZ(frameCount * this.rSpeed);       // planet's rotation
    rotateX(this.rotateX);
    stroke(0, 255, 0);
    strokeWeight(this.strokeWeight);
    sphere(this.diameter);
    pop();

  }

  infoDisplay() {
    // Customized in Planet.js' subclasses
  }

}


// using if-statements for mousehover on planet is hard because of their motion
// orbitting maths https://www.w3schools.com/graphics/game_movement.asp
    // fill(0,255,0, 5);
