// Jupiter
// Subclass Jupiter.js inherits settings from superclass Planets.js

class Jupiter extends Planet {

  constructor(distance, diameter, speed, rSpeed, hasRings) {

    super(distance, diameter, speed, rSpeed, hasRings);


    // Visibility
    this.visible = false;
    this.totalStars = 0;

    // Custom fill
    this.fill = {
      r: 196,
      g: 157,
      b: 98,
      pointLight: 2000
    };

    // Title tag
    this.symbol = `F`;
    this.title = `JUPITER`;

    // Information and display of Earth
    this.info = `Jupiter\n
                \nFirst Recorded: 7th or 8th century BC
                \nRecorded by: Babylonian astronomers
                \nTemperature: -108 degrees Celsius
                \nRotation Time: 9.84 Hours
                \nOrbit Duration: 4 332.82 Earth Days (11.86 Earth Years)
                \nRuled by: Dias, leader, king and father of thunder and the Olympian gods`;
  }

   // Custom display method of Jupiter's class object
   display() {
     if (!this.visible) {
       push();
       // Title of planet
       push();
       let tag;
       let symbol_xPos = this.x + 22;
       let symbol_yPos = this.y + 60;
       let text_xPos = this.x - 32;
       let text_yPos = this.y + 60;
       let planeWidth = textWidth(this.symbol);
       let planeHeight = textAscent() + textDescent();

       fill(green.r, green.g, green.b);

       // Symbol
       textFont(symbolFont);
       textSize(this.symbolSize);

       // Creating text with transparent background fill
       // I was able to do this with Pippin's help!
       tag = createGraphics(planeWidth, planeHeight);
       tag.background(0, 0, 0, 0);
       tag.textFont(symbolFont);
       tag.textAlign(CENTER);
       tag.textSize(this.symbolSize);
       tag.fill(green.r, green.g, green.b);
       tag.text(this.symbol, tag.width / 2, tag.height / 2);

       push();
       fill(255, 0, 0);
       noFill();
       noStroke();
       texture(tag); // using the transparent background tag created above
       translate(symbol_xPos, symbol_yPos);
       plane(planeWidth, planeHeight);
       pop();

       // Title
       textFont(globalFont);
       textSize(this.titleSize);
       text(this.title, text_xPos, text_yPos);
       pop();

       // Custom colour of our Jupiter
       // RGB parameters + position
       // Brown
       pointLight(this.fill.r, this.fill.g, this.fill.b, this.fill.pointLight);

       // Calling the superclass Planet.js' display method
       super.display();
       pop();
     }
   }

   // Information and display of Jupiter
   showInfo() {
     let jupiterInfo;
     if (!this.visible) {
       push();
       // Jupiter infos
       jupiterInfo = createGraphics(280, 250);
       jupiterInfo.fill(green.r, green.g, green.b);
       jupiterInfo.background(20, 220);
       jupiterInfo.textSize(10);
       jupiterInfo.textFont(globalFont);
       jupiterInfo.textAlign(LEFT);
       jupiterInfo.text(this.info, 10, 20, 260, 250);
       texture(jupiterInfo);

       // Calling the superclass Planet.js' showInfo method
       super.showInfo();
       pop();
     }
   }

   // Jupiter resumes orbit at its established speed
   resume() {
     let resume = 0.0015;
     // resumes to its initial speed
     if (this.speed === 0) {
       this.speed = resume;
     }
   }

   // Creating Jupiter's 360 environment
   environment() {
     if (!this.visible) {
     push();
     // custom texture of environment simulation
     texture(jupiterEnviro);

     // calling the superclass environment() method
     super.environment();
     pop();
     }
   }
}
