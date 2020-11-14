// a class of stars

class Star {

  constructor(x, y, z, size) {
    this.x = x;
    this.y = y;
    this.z = z;
    this.size = size;
    this.vx = 0;
    this.vy = 0;
    this.vz = 0;
    this.speed = 0.15;

    this.fill = {
      r:0,
      g:255,
      b:0
    };

  }


  // Method of class object's Star's movements
  motion() {
    let change = random(0, 1);
    if (change < 0.05) {
    this.vx = random(-this.speed, this.speed);
    this.vy = random(-this.speed, this.speed);
    this.vz = random(-this.speed, this.speed);
    }
    // allows stars to move
    this.x += this.vx;
    this.y += this.vy;
    this.z += this.vz;
  }


  // Method of class object's Star's appearance
  display() {
    push();
    translate(this.x, this.y, this.z); // extension of stars' motion

    noFill();
    strokeWeight(0.05);
    stroke(this.fill.r, this.fill.g, this.fill.b);
    sphere(this.size);
    pop();
  }

}
