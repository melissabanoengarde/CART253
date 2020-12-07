// Venus
// Subclass Venus.js inherits settings from superclass Planets.js

class Venus extends Planet {

  constructor(distance, diameter, speed, rSpeed, hasRings) {

    // calling superclass Planet.js' constructor
    super(distance, diameter, speed, rSpeed, hasRings);

    // Custom fill
    this.fill = {
      r: 255,
      g: 217,
      b: 236,
      lightPosition: 2000,
      alpha: 150
    };

    // Visibility
    this.visible = false;

    // Total amount of stars needed to enable Neptune's visibility
    this.totalStars = 4;
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

  // Information and display of Venus
  showInfo() {
    if (!this.visible) {
      push();

      // Venus' plane colour + alpha value
      fill(this.fill.r, this.fill.g, this.fill.b, this.fill.alpha);

      // Calling the superclass Planet.js' showInfo method
      super.showInfo();
      pop();
    }
  }

  // Venus resumes orbit at its established speed
  resume() {
    let resume = 0.005;

    if (this.speed === 0) {
      this.speed = resume;
    }
  }

}
