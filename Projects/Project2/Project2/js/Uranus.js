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
    this.totalStars = 7;

    // Information on Info board
    this.info = `First Recorded: March 13th, 1781.\n
                 \nRecorded by: William Herschel
                 \nTemperature: -197 degrees Celsius
                 \nRotation Time: 17.9 Hours
                 \nOrbit Duration: 30 687.15 Earth Days (84.02 Earth Years)
                 \nRuled by: Uranos, god of the sky, father of uranus, grandfather of Jupiter`;
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
    let uranusInfo;
    if (!this.visible) {
      push();
      // Uranus infos
      uranusInfo = createGraphics(280, 250);
      uranusInfo.fill(green.r, green.g, green.b);
      uranusInfo.background(20, 220);
      uranusInfo.textSize(10);
      uranusInfo.textFont(globalFont);
      uranusInfo.textAlign(LEFT);
      uranusInfo.text(this.info, 10, 20, 260, 250);
      texture(uranusInfo);

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
