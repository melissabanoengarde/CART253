// Neptune
// Subclass Neptune.js inherits settings from superclass Planets.js

class Neptune extends Planet {

  constructor(distance, diameter, speed, rSpeed) {

  // calling superclass Planet.js' constructor
  super(distance, diameter, speed, rSpeed);

  }

  // Custom display method of Neptune's class object
  display() {
    push();
    // Custom colour of Neptune
    // RGB parameters + position
    // Powder blue
    pointLight(52, 139, 207, 2000);
    // Calling the superclass Planet.js' display method
    super.display();
    pop();
  }

}
