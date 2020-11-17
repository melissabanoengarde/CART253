// Venus
// Subclass Venus.js inherits settings from superclass Planets.js

class Venus extends Planet {

  constructor(distance, diameter, speed, rSpeed) {

    // calling superclass Planet.js' constructor
    super(distance, diameter, speed, rSpeed);
  }


  // Custom display method of Venus's class object
  display() {
    push();
    // Custom colour of our Venus
    // RGB parameters + position
    // Pale pink
    pointLight(255, 217, 236, 2000);
    // Calling the superclass Planet.js' display method
    super.display();
    pop();
  }
}
