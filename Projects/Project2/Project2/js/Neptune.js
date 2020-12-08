// Neptune
// Subclass Neptune.js inherits settings from superclass Planets.js

class Neptune extends Planet {

  constructor(distance, diameter, speed, rSpeed, hasRings) {

  // Calling superclass Planet.js' constructor
  super(distance, diameter, speed, rSpeed, hasRings);

  // Custom fill
  this.fill = {
    r: 52,
    g: 139,
    b: 207,
    lightPosition: 2000,
    alpha: 150
  };

  // Visibility
  // Neptune is not visible at the start
  this.visible = false;

  // Total amount of stars needed to enable Neptune's visibility
  this.totalStars = 0;
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

  // Information and display of Neptune
  showInfo() {
    if (!this.visible) {
      push();

      // Neptune's plane colour + alpha value
      fill(this.fill.r, this.fill.g, this.fill.b, this.fill.alpha);

      // Calling the superclass Planet.js' showInfo method
      super.showInfo();
      pop();
    }
  }

  // Neptune resumes orbit at its established speed
  resume() {
    let resume = 0.0003;

    if (this.speed === 0) {
      this.speed = resume;
    }
  }

  environment() {
    push();
    // custom texture of environment simulation
    texture(neptuneEnviro);

    // calling the superclass environment() method
    super.environment();
    pop();
  }

}
