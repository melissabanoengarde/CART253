class Asteroid {

  constructor(x, y, z) {
    this.x = x;
    this.y = y;
    this.z = z;

    this.vx = 0;
    this.vy = 0;
    this.vz = 0;
    this.minSpeed = 10;
    this.maxSpeed = 20;

    this.size = 30;

  }

  motion() {
    this.vx = random(this.minSpeed, this.maxSpeed);
    this.vy = random(this.minSpeed, this.maxSpeed);
    this.vz = random(this.minSpeed, this.maxSpeed);

    this.x += this.vx;
    this.y += this.vy;
    this.z += this.vz;
  }

  display() {
    push();

    translate(this.x, this.y, this.z);

    fill(255, 0, 0);
    strokeWeight(0.15);
    stroke(0);
    sphere(this.size);
    pop();
  }

}
