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

    this.planeFill = {
      r: 255,
      g: 0,
      b: 0,
      a: 150,
    };

    // Title tag
    this.symbol = `E`;
    this.title = `MARS`;

    // Total amount of stars needed to enable Neptune's visibility
    this.totalStars = 0;
  }

  // Custom display method of Mars' class object
  display() {
    if (!this.visible) {
      if(scorebox.score >= this.totalStars) {
        push();
        // Title of planet
        push();
        let tag;
        let symbol_xPos = this.x + 20;
        let symbol_yPos = this.y + 25;
        let text_xPos = this.x - 15;
        let text_yPos = this.y + 25;

        fill(green.r, green.g, green.b);

        push();
        // Symbol
        textFont(symbolFont);
        textSize(this.symbolSize);
        text(this.symbol, symbol_xPos, symbol_yPos);
        pop();

        push();
        // Title
        textFont(globalFont);
        textSize(this.titleSize);
        text(this.title, text_xPos, text_yPos);
        pop();
        pop();

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

  // Information and display of Mars
  showInfo() {
    if (!this.visible) {
      push();

      fill(this.planeFill.r, this.planeFill.g, this.planeFill.b, this.planeFill.a);

      // Calling the superclass Planet.js' showInfo method
      super.showInfo();
      pop();
    }
  }

  // Mars resumes orbit at its established speed
  resume() {
    let resume = 0.004;

    if (this.speed === 0) {
      this.speed = resume;
    }
  }

  environment() {
    push();
    // custom texture of environment simulation
    texture(marsEnviro);

    // calling the superclass environment() method
    super.environment();
    pop();
  }

}
