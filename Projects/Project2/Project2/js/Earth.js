// Earth
// Subclass Earth.js inherits settings from superclass Planets.js

class Earth extends Planet {

  constructor(distance, diameter, speed, rSpeed, hasRings) {

    // calling superclass Planet.js' constructor
    super(distance, diameter, speed, rSpeed, hasRings);

    // Visibility
    this.visible = true;

    this.planeFill = {
      r: 217,
      g: 245,
      b: 191,
      a: 150
     };

     // Title tag
     this.symbol = `O`;
     this.title = `EARTH`;
   }

  // Don't need to call motion because this subclass already inherits the superclass

  // Custom display method of Saturn's class object
  display() {
    if (this.visible) {
      push();
      // Title of planet
      push();
      let tag;
      let symbol_xPos = this.x + 18;
      let symbol_yPos = this.y + 32;
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

      // Custom colour of our Earth
      // RGB parameters + position
      // Green
      pointLight(16, 156, 0, 2000);

      // Calling the superclass Planet.js' display method
      super.display();
      pop();
    }
  }

  // Information and display of Earth
  showInfo() {
    if (this.visible) {
      push();

      // custom plane colour fill
      fill(this.planeFill.r, this.planeFill.g, this.planeFill.b, this.planeFill.a);

      // Calling the superclass Planet.js' showInfo method
      super.showInfo();
      pop();
    }
  }

  // Earth resumes orbit at its established speed
  resume() {
    let resume = 0.004;

    if (this.speed === 0) {
      this.speed = resume;
    }
  }

  environment() {
    push();
    texture(earthEnviro);

    super.environment();
    pop();
  }

}
