class Star {

  constructor(x, y, size) {
    this.x = x;
    this.y = y;
    this.size = size;
    this.vx = 0;
    this.vy = 0;
    this.speed = 0.15;
    this.active = true;

    this.fill = {
      r:0,
      g:255,
      b:0
    };
  }

  // Method of class object's movements
  motion() {
    let change = random(0, 1);
    if (change < 0.05) {
    this.vx = random(-this.speed, this.speed);
    this.vy = random(-this.speed, this.speed);
    }
    // allows stars to move
    this.x += this.vx;
    this.y += this.vy;
  }

  // Method of class object's appearance
  display() {
    push();
    noStroke();
    fill(this.fill.r, this.fill.g, this.fill.b);
    ellipse(this.x, this.y, this.size);
    pop();
  }

}
