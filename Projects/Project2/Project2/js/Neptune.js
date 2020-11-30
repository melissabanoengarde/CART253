// Neptune
// Subclass Neptune.js inherits settings from superclass Planets.js

class Neptune extends Planet {

  constructor(distance, diameter, speed, rSpeed) {

  // Calling superclass Planet.js' constructor
  super(distance, diameter, speed, rSpeed);

  // Custom fill
  this.fill = {
    r: 52,
    g: 139,
    b: 207,
    lightPosition: 2000
  };

  // Visibility
  // Neptune is not visible at the start
  this.visible = false;
  // Total amount of stars needed to enable Neptune's visibility
  this.totalStars = 12;
  }

  // Custom display method of Neptune's class object
  display() {
    // if 'this.visible' is NOT("!") true (therefor, false), then...
    if (!this.visible) {
      if(scorebox.score >= this.totalStars) {
        push();
        // Custom colour of Neptune
        // RGB parameters + light position
        // Powder blue
        pointLight(this.fill.r, this.fill.g, this.fill.b, this.fill.lightPosition);

        // Calling the superclass Planet.js' display method
        super.display();
        pop();
      }
    }
  }

}
