class Mercury extends Planet {

  constructor(distance, diameter, speed, rSpeed) {

    super(distance, diameter, speed, rSpeed);

  }

  // Custom display method of Mercury's class object
  display() {
    push();
    // Custom colour of Mercury
    // RGB parameters + position
    // Light grey
    pointLight(224, 224, 224, 2000);
    // Calling the superclass Planet.js' display method
    super.display();
    pop();
  }

}
