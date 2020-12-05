// Earth
// Subclass Earth.js inherits settings from superclass Planets.js

class Earth extends Planet {

  constructor(distance, diameter, speed, rSpeed, hasRings) {

  // calling superclass Planet.js' constructor
  super(distance, diameter, speed, rSpeed, hasRings);

  // Visibility
  this.visible = true;

 }


 // Don't need to call motion because this subclass already inherits the superclass

  // Custom display method of Saturn's class object
  display() {
    if (this.visible) {
    push();
    // Custom colour of our Earth
    // RGB parameters + position
    // Green
    pointLight(16, 156, 0, 2000);
    // Calling the superclass Planet.js' display method
    super.display();
    pop();
   }
  }

}
