// Saturn
// Subclass Saturn.js inherits settings from superclass Planets.js

class Saturn extends Planet {

  constructor(distance, diameter, speed, rSpeed, hasRings) {

    // calling superclass Planet.js' constructor
    super(distance, diameter, speed, rSpeed, hasRings);

    // Custom fill
    this.fill = {
      r: 255,
      g: 255,
      b: 0,
      lightPosition: 2000
    };

    // Visibility
    this.visible = false;
    // Total amount of stars needed to enable Saturn's visibility
    this.totalStars = 0;
  }

  // Custom display method of Saturn's class object
  display() {
    // if 'this.visible' is NOT("!") equal to false, then...
    if (!this.visible) {
      if(scorebox.score >= this.totalStars) {
        push();

        // Custom colour of our Saturn
        // RGB parameters + position
        // Yellow
        pointLight(this.fill.r,this.fill.g,this.fill.b, this.fill.lightPosition);

        // Calling the superclass Planet.js' display method
        super.display();
        pop();
      }
    }
  }

  // Information and display of Saturn
  showInfo() {
    if (!this.visible) {
      push();

      // Saturn's plane colour + alpha value
      fill(this.fill.r, this.fill.g, this.fill.b, this.fill.alpha);

      // Calling the superclass Planet.js' showInfo method
      super.showInfo();
      pop();
    }
  }

  // Saturn resumes orbit at its established speed
  resume() {
    let resume = 0.0008;

    if (this.speed === 0) {
      this.speed = resume;
    }
  }

  environment() {
    push();
    // custom texture of environment simulation
    texture(saturnEnviro);

    // calling the superclass environment() method
    super.environment();
    pop();
  }

}
