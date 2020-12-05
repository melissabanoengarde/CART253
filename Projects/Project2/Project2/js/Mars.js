// Mars
// Subclass Mars.js inherits settings from superclass Planets.js

class Mars extends Planet {

  constructor(distance, diameter, speed, rSpeed, hasRings) {

  // calling superclass Planet.js' constructor
  super(distance, diameter, speed, rSpeed, hasRings);

  // Custom fill
  this.fill = {
    r: 255,
    g: 0,
    b: 0,
    lightPosition: 2000
  };

  // Visibility
  this.visible = false;
  // Total amount of stars needed to enable Neptune's visibility
  this.totalStars = 5;
  }

  // Custom display method of Mars' class object
  display() {
    if (!this.visible) {
      if(scorebox.score >= this.totalStars) {
        push();
        // Custom colour of Mars
        // RGB parameters + position
        // Red
        pointLight(this.fill.r, this.fill.g, this.fill.b, this.fill.lightPosition);

        // Calling the superclass Planet.js' display method
        super.display();
        pop();
      }
    }
  }

}
