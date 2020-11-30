// Saturn
// Subclass Saturn.js inherits settings from superclass Planets.js

class Saturn extends Planet {

  constructor(distance, diameter, speed, rSpeed) {

    // calling superclass Planet.js' constructor
    super(distance, diameter, speed, rSpeed);

    // Custom fill
    this.fill = {
      r: 255,
      g: 255,
      b: 0,
      lightPosition: 2000
    };

    // Visibility
    this.visible = false;
    // Total amount of stars needed to enable Neptune's visibility
    this.totalStars = 15;
  }

  // Custom display method of Saturn's class object
  display() {
    // if 'this.visible' is NOT("!") true (therefor, false), then...
    if (!this.visible) {
      if(scorebox.score >= this.totalStars) {
        push();
        // Custom colour of our Saturn
        // RGB parameters + position
        // Yellow
        pointLight(this.fill.r,this.fill.g,this.fill.b, this.fill.lightPosition);

        // Calling the superclass Planet.js' display method
        super.display();
        pop();
      }
    }
  }

}


// torus([radius], [tubeRadius], [detailX], [detailY])
// new Saturn(500, 35, 0.0008, 0.002);
