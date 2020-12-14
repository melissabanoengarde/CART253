// Sun
// Subclass Sun.js inherits settings from superclass Planets.js

class Sun extends Planet {

  constructor(distance, diameter, speed, rSpeed, hasRings) {

    // calling superclass Planet.js' constructor
    super(distance, diameter, speed, rSpeed, hasRings);

    // Visibility
    this.visible = false;
    // this.totalStars = 0;

    // Custom fill
    this.fill = {
      r: 255,
      g: 106,
      b: 0,
      pointLight: 2000,
      alpha: 100
    };

    // Title tag
    this.symbol = `A`;
    this.title = `SUN`;

    // Information on Info board
    this.info = `Sun\n
                 \nAge: 4.6 Billion Years
                 \nType: Yellow Dwarf (G2V)
                 \nTemperature: 5 500 degrees Celsius
                 \nDiameter: 1 392 684 km (109 times Earth)
                 \nAtmosphere: 73% Hydrogen, 24% Helium, 1% Oxygen, 0.3% Carbon
                 \nGreek God: Helious, god of prophecy and solar incarnation`;
  }

  // Don't need to call motion because this subclass already inherits the superclass

  // Custom display method of the Sun's class object
  display() {
    if (!this.visible) {
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
    let sunInfo;
    if (!this.visible) {
        push();
        // Sun infos
        sunInfo = createGraphics(280, 250);
        sunInfo.fill(green.r, green.g, green.b);
        sunInfo.background(20, 220);
        sunInfo.textSize(10);
        sunInfo.textFont(globalFont);
        sunInfo.textAlign(LEFT);
        sunInfo.text(this.info, 10, 20, 260, 250);
        texture(sunInfo);

        // Calling the superclass Planet.js' showInfo method
        super.showInfo();
        pop();
    }
  }

  // Creates the Sun's 360 enviroment
  environment() {
    push();

    // Image of the view
    texture(sunEnviro);

    // Calling the superclass environment() method
    super.environment();
    pop();

  }

}
