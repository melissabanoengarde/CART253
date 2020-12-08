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

    // Title tag
    this.symbol = `D`;
    this.title = `VENUS`;

    // Visibility
    this.visible = false;

    // Total amount of stars needed to enable Neptune's visibility
    this.totalStars = 0;
  }


  // Custom display method of Venus's class object
  display() {
    if (!this.visible) {
      if(scorebox.score >= this.totalStars) {
        push();
        // Title of planet
        push();
        let tag;
        let symbol_xPos = this.x + 20;
        let symbol_yPos = this.y + 30;
        let text_xPos = this.x - 20;
        let text_yPos = this.y + 30;

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

  environment() {
    push();
    // custom texture of environment simulation
    texture(venusEnviro);

    // calling the superclass environment() method
    super.environment();
    pop();
  }

}
