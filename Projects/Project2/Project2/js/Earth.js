// a subclass that inherits settings from superclass Planets.js

class Earth extends Planet {

  constructor(distance, diameter, speed, rSpeed) {

  // calling superclass Planet.js' constructor
  super(distance, diameter, speed, rSpeed);

   }


 // Don't need to call motion because this subclass already inherits the superclass

  display() {
    push();
    super.display();
    sphere(this.diameter);
    pop();
  }

}
