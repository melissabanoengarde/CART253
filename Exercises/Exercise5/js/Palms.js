class Palms {

  constructor(w, h, palmsImg) {
    this.width = w;
    this.height = h;
    this.x = 0;
    this.y = (height + 25) - this.height/2;
    this.img = palmsImg;
  }

  move() {
    let leftEdge = 100;
    let rightEdge = width - 100;
    this.x = constrain(mouseX, leftEdge, rightEdge);
  }

  display() {
    push();
    imageMode(CENTER);
    image(this.img, this.x, this.y, this.width, this.height);
    pop();
  }

}
