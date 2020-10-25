class Flag {

  constructor(x, y, flagImgs) {
    this.x = x;
    this.y = y;
    this.vx = 0;
    this.vy = 0;
    this.ax = 0;
    this.ay = 0;
    this.maxSpeed = 10;
    this.size = 50;
    this.img = flagImgs;
    this.active = true;
  }

  gravity(force) {
    this.ay += force;
  }

  move() {
    this.vx += this.ax;
    this.vy += this.ay;

    this.vx = constrain(this.vx, -this.maxSpeed, this.maxSpeed);
    this.vy = constrain(this.vy, -this.maxSpeed, this.maxSpeed);

    this.x += this.vx;
    this.y += this.vy;

    if (this.y - this.size / 2 > height) {
      this.active = false;
    }
  }

  bounce(palm) {
    if (this.x >= palm.x - palm.width/2 &&
      this.x <= palm.x + palm.width/2 &&
      this.y + this.size/2 > palm.y - palm.height/18 &&
      this.y - this.size/2 < palm.y + palm.height/18) {

    // BOUNCE
    let dx = this.x - palm.x; // how far away it was from the CENTER
    this.vx = this.vx + map(dx, -palm.width/2, palm.width/2, -1, 1);

    //changing y movement
    this.vy = -this.vy;
    this.ay = 0;
    }
  }

  display() {
    push();
    imageMode(CENTER);
    image(this.img, this.x, this.y, this.size, this.size);
    pop();
  }

}
