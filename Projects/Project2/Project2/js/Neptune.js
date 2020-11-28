// Neptune
// Subclass Neptune.js inherits settings from superclass Planets.js

class Neptune extends Planet {

  constructor(distance, diameter, speed, rSpeed) {

  // calling superclass Planet.js' constructor
  super(distance, diameter, speed, rSpeed);

  // custom fill
  this.fill = {
    r: 52,
    g: 139,
    b: 207,
    lightPosition: 2000
  };

  }

  // Custom display method of Neptune's class object
  display() {
    push();
    // Custom colour of Neptune
    // RGB parameters + position
    // Powder blue
    pointLight(this.fill.r, this.fill.g, this.fill.b, this.fill.lightPosition);
    // Calling the superclass Planet.js' display method
    super.display();
    pop();
  }

}
