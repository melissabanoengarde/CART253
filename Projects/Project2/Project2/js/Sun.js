// Sun
// Subclass Sun.js inherits settings from superclass Planets.js

class Sun extends Planet {

  constructor(distance, diameter, speed, rSpeed, hasRings) {

    // calling superclass Planet.js' constructor
    super(distance, diameter, speed, rSpeed, hasRings);

    // Visibility
    this.visible = true;

    // Custom fill
    this.fill = {
      r: 255,
      g: 106,
      b: 0,
      pointLight: 2000,
      alpha: 150
    };

    // Title tag
    this.symbol = `A`;
    this.title = `SUN`;
  }

  // Don't need to call motion because this subclass already inherits the superclass

  // Custom display method of the Sun's class object
  display() {
    if (this.visible) {
    push();
    // Title of planet
    push();
    let tag;
    let symbol_xPos = this.x + 8;
    let symbol_yPos = this.y + 100;
    let text_xPos = this.x - 22;
    let text_yPos = this.y + 100;

    fill(green.r, green.g, green.b);

    // Symbol
    textFont(symbolFont);
    textSize(this.symbolSize);
    text(this.symbol, symbol_xPos, symbol_yPos);

    // Title
    textFont(globalFont);
    textSize(this.titleSize);
    text(this.title, text_xPos, text_yPos);
    pop();

    // Custom fill of our Sun: RGB values + light position
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
