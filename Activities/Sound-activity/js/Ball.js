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

    }
  }

  move() {

  }

  bounce() {

  }

  display() {

  }

}
