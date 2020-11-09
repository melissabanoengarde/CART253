// a subclass that inherits settings from superclass Planets.js

class Venus extends Planet {

  constructor(distance, diameter, speed, rSpeed) {

    // calling superclass Planet.js' constructor
    super(distance, diameter, speed, rSpeed);
  }


  display() {
    push();
    fill(0,255,0, 5);
    rotateX(1.5);
    stroke(0,255,0);
    strokeWeight(0.1);
    sphere(this.diameter);
    pop();
  }
}
