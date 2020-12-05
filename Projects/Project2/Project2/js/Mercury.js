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
      lightPosition: 2000
    };

    // Visibility
    this.visible = false;
    // Total amount of stars needed to enable Neptune's visibility
    this.totalStars = 3;
  }


  // Custom display method of Mercury's class object
  display() {
    // if 'this.visible' is NOT("!") true (therefor, false), then...
    if (!this.visible) {
      if(scorebox.score >= this.totalStars) {
        push();
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

}
