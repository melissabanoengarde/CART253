class User {

  constructor(x, y, size) {
    this.x = x;
    this.y = y;
    this.size = size;
    this.vx = 0;
    this.vy = 0;
    this.speed = 5;

    this.fill = {
      r: 0,
      g: 0,
      b: 255
    };
  }

  // User's handle input and what allows user to move
  motion() {
    // What allows the user's movements
    this.x += this.vx;
    this.y += this.vy;

    // Handle input and direction
    if (keyIsDown(65)) {        // left
      this.vx = -this.speed;
    }
    else if (keyIsDown(68)) {   // right
      this.vx = this.speed;
    }
    else {
      this.vx = 0;
    }

    if (keyIsDown(87)) {        // up
    this.vy = -this.speed;
    }
    else if (keyIsDown(83)) {    // down
      this.vy = this.speed;
    }
    else {
      this.vy = 0;
    }
  }

  // User's object's appearance
  display() {
    push();
    fill(this.fill.r, this.fill.g, this.fill.b);
    ellipse(this.x, this.y, this.size);
    pop();
  }

}
