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

    // Title tag
    this.symbol = `H`;
    this.title = `URANUS`;

    // Visibility
    // Uranus is not visible at the start
    this.visible = false;

    // Total amount of stars needed to enable Neptune's visibility
    this.totalStars = 0;
  }

  // Custom display method of Uranus's class object
  display() {
    // if 'this.visible' is NOT("!") true (therefor, false), then...
    if (!this.visible) {
      if(scorebox.score >= this.totalStars) {
        push();
        // Title of planet
        push();
        let tag;
        let symbol_xPos = this.x + 25;
        let symbol_yPos = this.y + 45;
        let text_xPos = this.x - 24;
        let text_yPos = this.y + 45;

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

  environment() {
    push();

    // custom texture of environment simulation
    texture(uranusEnviro);

    // calling the superclass environment() method
    super.environment();
    pop();
  }

}
