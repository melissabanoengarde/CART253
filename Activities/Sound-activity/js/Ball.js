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

    // Oscillator
    this.oscillator = new p5.Oscillator();
    this.nearFreq = 220;  //when it's close to center of the canvas
    this.farFreq = 440;   // when it's far from the center of the canvas
    this.oscillator.amp(0.05);
    this.oscillator.start();  // Might as well start the oscillator in the constructor since we want it to start at the beginning
    }


  // what allows the balls to move
  move() {
    this.x += this.vx;
    this.y += this.vy;

    // Update frequency
    let d = dist(this.x, this.y, width/2, height/2); // How far away the ball is from the center
    let maxDist = dist(0,0,width/2,height/2); // range of distance
    let newFreq = map(d, 0, maxDist, this.nearFreq, this.farFreq); // map which allows frequency to change depending on position of balls 
    this.oscillator.freq(newFreq);
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
    fill(this.color.r, this.color.g, this.color.b);
    ellipse(this.x, this.y, this.size);
    pop();
  }

}


/*
NOTES

[-this.size / 2]: left edge of ball
[this.size / 2]: right edge of ball (same concept with top and bottom of ball)


*/
