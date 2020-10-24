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

    // if ball has fallen off canvas
    if (this.y - this.size/2 > height) {
      this.active = false;   //to deactivate it
    }
  }

  bounce(paddle) {  //4 conditions
    if (this.x >= paddle.x - paddle.width/2 &&                 // "paddle.x - paddle.width/2" is left edge of paddle. x-axis always begin to the left & we're substracting the other half (right edge).
        this.x <= paddle.x + paddle.width/2 &&                 // right edge of paddle
        this.y + this.size/2 > paddle.y - paddle.height/2 &&   // to make sure that VERTICALLY it's also overlapping w the paddle. this.y = center of the ball, adding this.size/2 adds the BOTTOM of the ball.
        this.y - this.size/2 < paddle.y + paddle.height/2) {   // it's the same for paddle since rectMode is CENTERed. paddle.y is center of the paddle, -paddle.height/2 is top half of paddle

      // BOUNCE
      this.vy = -this.vy;
      this.ay = 0;
    }
    // if (this.y + this.size / 2 >= height) { // "this.y + this.size/2" is bottom of the ball
      /* Bounce
      this.vy = -this.vy; //reverse the velocity
      this.ay = 0; //BOUNCE effect
    } */
  } 

  display() {
    push();
    fill(0);
    // stroke(255,0,0);
    ellipse(this.x, this.y, this.size);
    pop();
  }

}
