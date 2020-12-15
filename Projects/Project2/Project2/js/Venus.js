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
    // Total amount of stars needed to enable Neptune's visibility
    this.visible = false;
    this.totalStars = 4;

    // Title tag
    this.symbol = `D`;
    this.title = `VENUS`;

    // Information on Info board
    this.info = `Venus\n
                 \nFirst Recorded: 17th century BC
                 \nRecorded by: Babylonian astronomers
                 \nTemperature: 462 degrees Celsius
                 \nRotation Time: 243 Earth Days
                 \nOrbit Duration: 224.7 Earth Days
                 \nRuled by: Aphrodite, goddess of romance and lust`;
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
    let venusInfo;
    if (!this.visible) {
      if(scorebox.score >= this.totalStars) {
        push();
        // Venus infos
        venusInfo = createGraphics(280, 250);
        venusInfo.fill(green.r, green.g, green.b);
        venusInfo.background(20, 220);
        venusInfo.textSize(10);
        venusInfo.textFont(globalFont);
        venusInfo.textAlign(LEFT);
        venusInfo.text(this.info, 10, 20, 260, 250);
        texture(venusInfo);

        // Calling the superclass Planet.js' showInfo method
        super.showInfo();
        pop();
      }
    }
  }

  // Venus resumes orbit at its established speed
  resume() {
    let resume = 0.005;
    if (!this.visible) {
      if(scorebox.score >= this.totalStars) {
        // resumes to its initial speed
        if (this.speed === 0) {
          this.speed = resume;
        }
      }
    }
  }

  // Creates Venus' 360 environment
  environment() {
    if (!this.visible) {
      if(scorebox.score >= this.totalStars) {
        push();
        // custom texture of environment simulation
        texture(venusEnviro);

        // calling the superclass environment() method
        super.environment();
        pop();
      }
    }
  }

}
