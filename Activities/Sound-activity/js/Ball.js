class Ball {

  constructor(x, y) {
    this.x = x,
    this.y = y,
    this.size = 50;
    this.color = {
      r: random(200,255),
      g: random(200,255),
      b: random(200,255)
     };
    this.speed = 3;
    this.vx = random(-this.speed, this.speed); // can already do this because we've already defined the speed.
    this.vy = random(-this.speed, this.speed);
    }
  }

  // what allows the balls to move
  move() {
    this.x += this.vx;
    this.y += this.vy;
  }

  // what allows the balls to bounce off the edges of the canvas
  bounce() {
    // what makes the balls bounce off left and right walls
    if (this.x - this.size / 2 < 0 || this.x + this.size / 2 > width) {
      this.vx = -this.vx;
    }
    // what makes the ball bounce off top and bottom walls
    if (this.y - this.size / 2 < 0 || this.y + this.size / 2 > height) {
      this.vy = -this.vy;
    }
  }

  // display of each individual ball
  display() {
    push();
    noStroke();
    fill(this.fill.r, this.fill.g, this.fill.b);
    ellipse(this.x, this.y, this.size);
    pop();
  }

}



/*
NOTES

[-this.size / 2]: left edge of ball
[this.size / 2]: right edge of ball (same concept with top and bottom of ball)


*/
