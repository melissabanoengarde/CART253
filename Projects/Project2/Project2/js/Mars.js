// a subclass that inherits settings from superclass Planets.js

class Mars extends Planet {

  constructor(distance, diameter, speed, rSpeed) {

  // calling superclass Planet.js' constructor
  super(distance, diameter, speed, rSpeed);

  }

  // Custom display method of Mars' class object
  display() {
    push();
    // Custom colour of Mars
    // RGB parameters + position
    // Red
    pointLight(255, 0, 0, 2000);
    // Calling the superclass Planet.js' display method
    super.display();
    pop();
  }

}
