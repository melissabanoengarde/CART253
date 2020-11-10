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

    // Ocillator
    this.oscillator = new p5.Oscillator(440, `sine`);
    this.oscillator.amp(0.05);
    this.angle = 0;
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

    this.playOsc();
  }

  playOsc() {
    if (keyIsPressed === true) {
      // as you increase the angle, it oscillates between -1 and 1
      let sinAngle = sin(this.angle);
      let newFreq = map(sinAngle, -1, 1, 110, 150);
      this.oscillator.freq(newFreq);

      // changes the angle which will change the OUTPUT of the sine function [sin(angle)] which will change which frequency will pop out of the map
      this.angle = this.angle + 0.5;

      this.oscillator.start();
      console.log(this.oscillator);
      }
       else {
       this.oscillator.stop();
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
