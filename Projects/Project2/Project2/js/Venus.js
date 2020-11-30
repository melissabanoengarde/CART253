// Venus
// Subclass Venus.js inherits settings from superclass Planets.js

class Venus extends Planet {

  constructor(distance, diameter, speed, rSpeed) {

    // calling superclass Planet.js' constructor
    super(distance, diameter, speed, rSpeed);

    // Custom fill
    this.fill = {
      r: 255,
      g: 217,
      b: 236,
      lightPosition: 2000
    };

    // Visibility
    this.visible = false;
    // Total amount of stars needed to enable Neptune's visibility
    this.totalStars = 7;
  }


  // Custom display method of Venus's class object
  display() {
    if (!this.visible) {
      if(scorebox.score >= this.totalStars) {
        push();
        // Custom colour of our Venus
        // RGB parameters + position
        // Pale pink
        pointLight(this.fill.r, this.fill.g, this.fill.b, this.fill.lightPosition);

        // Calling the superclass Planet.js' display method
        super.display();
        pop();
      }
    }
  }

}
