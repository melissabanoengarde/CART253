// Earth
// Subclass Earth.js inherits settings from superclass Planets.js

class Earth extends Planet {

  constructor(distance, diameter, speed, rSpeed, hasRings) {

    // calling superclass Planet.js' constructor
    super(distance, diameter, speed, rSpeed, hasRings);

    // Visibility
    this.visible = false;
    // this.totalStars = 0;

    this.fill = {
      r: 19,
      g: 154,
      b: 161,
      lightPosition: 2000,
      alpha: 150
     };

     // Title tag
     this.symbol = `O`;
     this.title = `EARTH`;

     // Information on info board
     this.info = `Earth\n
                  \nFirst Recorded: 5th Century BC
                  \nRecorded by: Greek Philosophers
                  \nTemperature: -88 to 58 degrees Celsius
                  \nRotation Time: 1 Earth Day
                  \nOrbit Duration: 365.25 Earth Days
                  \nRuled by: Gaea, goddess of the Earth, mother to all gods`;
   }

  // Don't need to call motion because this subclass already inherits the superclass

  // Custom display method of Saturn's class object
  display() {
    if (!this.visible) {

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
      pointLight(this.fill.r, this.fill.g, this.fill.b, this.fill.lightPosition);

      // Calling the superclass Planet.js' display method
      super.display();
      pop();
    }
  }

  // Information and display of Earth
  showInfo() {
    let earthInfo;
    if (!this.visible) {
      push();
      // Earth infos
      earthInfo = createGraphics(280, 250);
      earthInfo.fill(green.r, green.g, green.b);
      earthInfo.background(20, 220);
      earthInfo.textSize(10);
      earthInfo.textFont(globalFont);
      earthInfo.textAlign(LEFT);
      earthInfo.text(this.info, 10, 20, 260, 250);
      texture(earthInfo);

      // Calling the superclass Planet.js' showInfo method
      super.showInfo();
      pop();
    }
  }

  // Earth resumes orbit at its established speed
  resume() {
    let resume = 0.004;
    // resumes to its initial speed
    if (this.speed === 0) {
      this.speed = resume;
    }
  }

  // Creates Earth's 360 environment
  environment() {

      push();
      texture(earthEnviro);

      // Calling the superclass' environment method
      super.environment();
      pop();
  }

}
