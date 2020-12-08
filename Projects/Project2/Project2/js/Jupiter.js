// Jupiter
// Subclass Jupiter.js inherits settings from superclass Planets.js

class Jupiter extends Planet {

  constructor(distance, diameter, speed, rSpeed, hasRings) {

    super(distance, diameter, speed, rSpeed, hasRings);


    // Visibility
    this.visible = true;

    this.planeFill = {
      r: 255,
      g: 209,
      b: 163,
      a: 150
    };

    // Title tag
    this.symbol = `F`;
    this.title = `JUPITER`;
  }

   // Custom display method of Jupiter's class object
   display() {
     if (this.visible) {
       push();
       // Title of planet
       push();
       let tag;
       let symbol_xPos = this.x + 22;
       let symbol_yPos = this.y + 60;
       let text_xPos = this.x - 32;
       let text_yPos = this.y + 60;

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

       // Custom colour of our Jupiter
       // RGB parameters + position
       // Brown
       pointLight(196, 157, 98, 2000);
       // Calling the superclass Planet.js' display method
       super.display();
       pop();
     }
   }

   // Information and display of Jupiter
   showInfo() {
     if (this.visible) {
       push();

       fill(this.planeFill.r, this.planeFill.g, this.planeFill.b, this.planeFill.a);
       // texture(jupiterEnviro);
       // Calling the superclass Planet.js' showInfo method
       super.showInfo();
       pop();
     }
   }

   // Jupiter resumes orbit at its established speed
   resume() {
     let resume = 0.0015;

     if (this.speed === 0) {
       this.speed = resume;
     }
   }

   environment() {
     push();
     // custom texture of environment simulation
     texture(jupiterEnviro);

     // calling the superclass environment() method
     super.environment();
     pop();
   }


}
