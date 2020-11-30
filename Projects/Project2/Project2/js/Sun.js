// Sun
// Subclass Sun.js inherits settings from superclass Planets.js

class Sun extends Planet {

  constructor(distance, diameter, speed, rSpeed) {

    // calling superclass Planet.js' constructor
    super(distance, diameter, speed, rSpeed);

    // Visibility
    this.visible = true;
  }

  
  // visible() {
  //
  // }

  // (!) Don't need to call motion because this subclass already inherits the superclass

  // Custom display method of the Sun's class object
  display() {
    if (this.visible) {
    push();
    // Custom colour of our Sun
    // RGB parameters + position
    pointLight(255,106,0, 2000);
    // Calling the superclass Planet.js' display method
    super.display();
    pop();
  }
  }
}
