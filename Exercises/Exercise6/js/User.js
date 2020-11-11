class User {

  constructor(x, y, size) {
    this.x = x;
    this.y = y;
    this.size = size;
    this.vx = 0;
    this.vy = 0;
    this.speed = 5;

    this.fill = {
      r: 100,
      g: 255,
      b: 255
    };
  }

  // User's movement
  motion() {
    // Creates user's movement and keeps them in simulation box 
    this.x = constrain(this.x + this.vx, 0, width);
    this.y = constrain(this.y + this.vy, 0, height);

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
    fill(random(this.fill.r), random(this.fill.g), random(this.fill.b));
    ellipse(this.x, this.y, this.size);
    pop();
  }

}
