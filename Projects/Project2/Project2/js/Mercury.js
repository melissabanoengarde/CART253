class Mercury extends Planet {

  constructor(distance, diameter, speed, rSpeed) {

    super(distance, diameter, speed, rSpeed);

  }

  // Custom display of mercury
  display() {
    push();
    fill(0,255,0, 5);
    rotateX(1.5);
    stroke(0,255,0);
    strokeWeight(0.1);
    sphere(this.diameter);
    pop();
  }

}
