// Uranus
// Subclass Uranus.js inherits settings from superclass Planets.js

class Uranus extends Planet {

  constructor(distance, diameter, speed, rSpeed, hasRings) {

    // Calling superclass Planet.js' constructor
    super(distance, diameter, speed, rSpeed, hasRings);

    // Custom fill
    this.fill = {
      r: 207,
      g: 255,
      b: 255,
      lightPosition: 2000,
      alpha: 150
    };

    // Visibility
    // Uranus is not visible at the start
    this.visible = false;
    // Total amount of stars needed to enable Neptune's visibility
    this.totalStars = 2;
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

  // Information and display of Uranus
  showInfo() {
    if (!this.visible) {
      push();

      // Uranus's plane colour + alpha value
      fill(this.fill.r, this.fill.g, this.fill.b, this.fill.alpha);

      // Calling the superclass Planet.js' showInfo method
      super.showInfo();
      pop();
    }
  }

  // Uranus resumes orbit at its established speed
  resume() {
    let resume = 0.0002;

    if (this.speed === 0) {
      this.speed = resume;
    }
  }

}
