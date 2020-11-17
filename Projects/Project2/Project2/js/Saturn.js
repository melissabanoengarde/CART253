// Saturn
// Subclass Saturn.js inherits settings from superclass Planets.js

class Saturn extends Planet {

  constructor(distance, diameter, speed, rSpeed) {

    // calling superclass Planet.js' constructor
    super(distance, diameter, speed, rSpeed);

  }

  // Custom display method of Saturn's class object
  display() {
    push();

    // Custom colour of our Saturn
    // RGB parameters + position
    // Yellow
    pointLight(255,255,0, 2000);

    // Calling the superclass Planet.js' display method
    super.display();
    pop();
  }

}


// torus([radius], [tubeRadius], [detailX], [detailY])
// new Saturn(500, 35, 0.0008, 0.002);
