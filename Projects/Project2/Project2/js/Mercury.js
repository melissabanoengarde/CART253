// Mercury
// Subclass Mercury.js inherits settings from superclass Planets.js

class Mercury extends Planet {

  constructor(distance, diameter, speed, rSpeed, hasRings) {

    super(distance, diameter, speed, rSpeed, hasRings);

    // Custom fill
    this.fill = {
      r: 224,
      g: 224,
      b: 274,
      lightPosition: 2000,
      alpha: 150
    };

    // Title tag
    this.symbol = `C`;
    this.title = `MERCURY`;

    // Visibility
    this.visible = false;

    // Total amount of stars needed to enable Neptune's visibility
    this.totalStars = 0;

    // Information on info board
    this.info = `First Recorded: 14th century BC \n
                 \nRecorded by: Assyrian astronomers
                 \nTemperature: -173 to 427 degrees Celsius
                 \nRotation Time: 59 Earth Days
                 \nOrbit Duration: 87.97 Earth Days
                 \nRuled by: Hermes, god of messengers, travel, and commerce`;
  }


  // Custom display method of Mercury's class object
  display() {
    // if 'this.visible' is NOT("!") true (therefor, false), then...
    if (!this.visible) {
      if(scorebox.score >= this.totalStars) {
        push();
        // Title of planet
        push();
        let tag;
        let symbol_xPos = this.x + 28;
        let symbol_yPos = this.y + 30;
        let text_xPos = this.x - 28;
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

        // Custom colour of Mercury
        // RGB parameters + position
        // Light grey
        pointLight(this.fill.r, this.fill.g, this.fill.b, this.fill.lightPosition);

        // Calling the superclass Planet.js' display method
        super.display();
        pop();
      }
    }
  }

  // Information and display of Mercury
  showInfo() {
    let mercuryInfo;
    if (!this.visible) {
      push();
      // Mercury infos
      mercuryInfo = createGraphics(280, 250);
      mercuryInfo.fill(green.r, green.g, green.b);
      mercuryInfo.background(20, 220);
      mercuryInfo.textSize(10);
      mercuryInfo.textFont(globalFont);
      mercuryInfo.textAlign(LEFT);
      mercuryInfo.text(this.info, 10, 20, 260, 250);
      texture(mercuryInfo);

      // Calling the superclass Planet.js' showInfo method
      super.showInfo();
      pop();
    }
  }

  // Mercury resumes orbit at its established speed
  resume() {
    let resume = 0.01;

    if (this.speed === 0) {
      this.speed = resume;
    }
  }

  environment() {
    push();
    // custom texture of environment simulation
    texture(mercuryEnviro);

    // calling the superclass environment() method
    super.environment();
    pop();
  }

}
