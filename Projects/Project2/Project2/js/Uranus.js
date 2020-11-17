// a subclass that inherits settings from superclass Planets.js

class Uranus extends Planet {

  constructor(distance, diameter, speed, rSpeed) {

    // calling superclass Planet.js' constructor
    super(distance, diameter, speed, rSpeed);
  }

  // Custom display method of Uranus's class object
  display() {
    push();
    // Custom colour of our Uranus
    // RGB parameters + position
    // Pale aqua
    pointLight(207, 255, 255, 2000);
    // Calling the superclass Planet.js' display method
    super.display();
    pop();
  }

}
