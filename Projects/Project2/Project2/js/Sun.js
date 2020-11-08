// a subclass that inherits settings from superclass Planets.js

class Sun extends Planet {

  constructor() {

    // calling superclass Planet.js' constructor
    super();

    // this.distance = undefined;   // distance from the sun (center)
    this.diameter = 70;   // size of planet
    // this.speed = underfined;         // motion speed
    this.rSpeed = 0.003;       // rotation speed
    // this.angle = 0;

  }

  motion() {
    super.motion();
  }
    // Don't need to call move because this subclass already inherits the superclass

  display() {
    push();
    super.display();
    sphere(this.diameter);
    pop();
  }

}
