// a class of stars

class Star {

  constructor() {
    this.x = random(-width, width);
    this.y = random(-height, height);
    this.z = random(-1000, 1000);
  }

  move() {
    this.x += random(-1,1);
    this.y += random(-1,1);
    this.z += random(-1,1);
  }

  display() {
    fill(0, 255, 0);
    textSize(40);
    text(`*`, this.x, this.y);
  }

}
