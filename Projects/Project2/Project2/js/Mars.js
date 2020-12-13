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
    // Total amount of stars needed to enable Neptune's visibility
    this.visible = false;
    this.totalStars = 2;

    // Title tag
    this.symbol = `E`;
    this.title = `MARS`;

    // Information on Info board
    this.info = `Mars\n
                \nFirst Recorded: 2nd Millennium BC
                \nRecorded by: Egyptian astronomers
                \nTemperature: -87 to -5 degrees Celsius
                \nRotation Time: 24.6 Hours
                \nOrbit Duration: 686.98 Earth Days (1.88 Earth Years)
                \nRuled by: Ares, god of war`;
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
    let marsInfo;
    if (!this.visible) {
      push();
      // Mars infos
      marsInfo = createGraphics(280, 250);
      marsInfo.fill(green.r, green.g, green.b);
      marsInfo.background(20, 220);
      marsInfo.textSize(10);
      marsInfo.textFont(globalFont);
      marsInfo.textAlign(LEFT);
      marsInfo.text(this.info, 10, 20, 260, 250);
      texture(marsInfo);

      // Calling the superclass Planet.js' showInfo method
      super.showInfo();
      pop();
    }
  }

  // Mars resumes orbit at its established speed
  resume() {
    let resume = 0.004;
    if (!this.visible) {
      // resumes to its initial speed
      if (this.speed === 0) {
        this.speed = resume;
      }
    }
  }

  // Creating Mars' 360 environment
  environment() {
    if (!this.visible) {
    push();
    // custom texture of environment simulation
    texture(marsEnviro);

    // calling the superclass environment() method
    super.environment();
    pop();
    }
  }

}
