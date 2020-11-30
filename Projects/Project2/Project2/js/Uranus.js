// Uranus
// Subclass Uranus.js inherits settings from superclass Planets.js

class Uranus extends Planet {

  constructor(distance, diameter, speed, rSpeed) {

    // Calling superclass Planet.js' constructor
    super(distance, diameter, speed, rSpeed);

    // Custom fill
    this.fill = {
      r: 207,
      g: 255,
      b: 255,
      lightPosition: 2000
    };

    // Visibility
    // Uranus is not visible at the start
    this.visible = false;
    // Total amount of stars needed to enable Neptune's visibility
    this.totalStars = 13;
  }

  // Custom display method of Uranus's class object
  display() {
    // if 'this.visible' is NOT("!") true (therefor, false), then...
    if (!this.visible) {
      if(scorebox.score >= this.totalStars) {
        push();
        // Custom colour of Uranus
        // RGB parameters + light position
        // Pale aqua
        pointLight(this.fill.r, this.fill.g, this.fill.b, this.fill.lightPosition);
        // Calling the superclass Planet.js' display method
        super.display();
        pop();
      }
    }
  }

}
