class Ball {

  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.vx = 0;
    this.vy = 0;
    this.ax = 0;
    this.ay = 0;
    this.maxSpeed = 10; // can never go any faster than 10, 10px per frame
    this.size = 40;
    this.active = true;
  }

  // defining gravity method with a parameter called "force"
  gravity(force) {
    this.ay += force;  //accelerates downwards
  }

  // defining move method
  move() {
    this.vx += this.ax;
    this.vy += this.ay; // acceleration + velocity = motion

    // Constraining the velocity based on the maximum speed of the ball
    this.vx = constrain(this.vx, -this.maxSpeed, this.maxSpeed);
    this.vy = constrain(this.vy, -this.maxSpeed, this.maxSpeed);

    // Adding velocity to position
    this.x += this.vx;
    this.y += this.vy;
  }

  bounce() {
    if (this.y + this.size / 2 >= height) { // "this.y + this.size/2" is bottom of the ball
      this.vy = -this.vy; //reverse the velocity
      this.ay = 0; //BOUNCE effect
    }
  }

  display() {
    push();
    fill(0);
    stroke(255,0,0);
    ellipse(this.x, this.y, this.size);
    pop();
  }

}
