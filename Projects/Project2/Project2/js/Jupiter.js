// Jupiter
// Subclass Jupiter.js inherits settings from superclass Planets.js

class Jupiter extends Planet {

  constructor(distance, diameter, speed, rSpeed) {

    super(distance, diameter, speed, rSpeed);

    }

    // Custom display method of Jupiter's class object
    display() {
      push();
      // Custom colour of our Jupiter
      // RGB parameters + position
      // Brown
      pointLight(196, 157, 98, 2000);
      // Calling the superclass Planet.js' display method
      super.display();
      pop();
    }

}
