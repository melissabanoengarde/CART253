// Sun
// Subclass Sun.js inherits settings from superclass Planets.js

class Sun extends Planet {

  constructor(distance, diameter, speed, rSpeed, hasRings) {

    // calling superclass Planet.js' constructor
    super(distance, diameter, speed, rSpeed, hasRings);

    // Visibility
    this.visible = true;

    this.fill = {
      r: 255,
      g: 106,
      b: 0,
      pointLight: 2000,
      alpha: 150
    };
  }


  // (!) Don't need to call motion because this subclass already inherits the superclass

  // Custom display method of the Sun's class object
  display() {
    if (this.visible) {
    push();

    // Custom colour of our Sun
    // RGB parameters + position
    pointLight(this.fill.r, this.fill.g, this.fill.b, this.fill.pointLight);

    // Calling the superclass Planet.js' display method
    super.display();
    pop();
    }
  }

  // Information and display of Sun
  showInfo() {
    if (this.visible) {
      push();

      fill(this.fill.r, this.fill.g, this.fill.b, this.fill.a);

      // Calling the superclass Planet.js' showInfo method
      super.showInfo();
      pop();
    }
  }

  environment() {
    push();
    texture(sunEnviro);

    super.environment();
    pop();
  }

}


// new Sun(0, 70, 0, 0.003, false)
