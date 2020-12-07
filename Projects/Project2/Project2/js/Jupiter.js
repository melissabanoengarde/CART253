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
  }

   // Custom display method of Jupiter's class object
   display() {
     if (this.visible) {
       push();
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

}
