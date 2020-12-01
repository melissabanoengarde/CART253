class Asteroid {

  constructor(x, y, z, speed, size) {
    this.x = x;
    this.y = y;
    this.z = z;

    this.vx = 0;
    this.vy = 0;
    this.vz = 0;
    this.speed = 20;

    this.size = size;

  }

  motion() {
    this.vx = random(-this.speed, this.speed);
    this.vy = random(-this.speed, this.speed);
    this.vz = random(-this.speed, this.speed);

    this.x += this.vx;
    this.y += this.vy;
    this.z += this.vz;
  }

  display() {
    push();

    translate(this.x,this.y,this.z);

    fill(255,0,0);
    strokeWeight(0.15);
    stroke(0);
    sphere(this.size);
    pop();
  }

}
