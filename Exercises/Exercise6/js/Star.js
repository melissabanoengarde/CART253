class Star {

  constructor(x, y, size, note) {
    this.x = x;
    this.y = y;
    this.size = size;
    this.vx = 0;
    this.vy = 0;
    this.speed = 0.15;
    this.collected= false;

    this.fill = {
      r:0,
      g:255,
      b:0
    };

    // Synth for when a star is collected
    this.note = note;
    this.synth = new p5.PolySynth();
  }


  // Method of class object's movements
  motion() {
    let change = random(0, 1);
    if (change < 0.05) {
    this.vx = random(-this.speed, this.speed);
    this.vy = random(-this.speed, this.speed);
    }
    // allows stars to move
    this.x += this.vx;
    this.y += this.vy;
  }


  // Checks when star and user touches and collects it
  checkStar(user) {
    if (!this.collected) {
      let d = dist(this.x, this.y, user.x, user.y);
      if (d < user.size / 2 + this.size / 2) {
        this.collected = true;
        this.playNote(); //plays note when star is collected (or disappears) by user
       }
      }
    }


  // Method for notes to play
  playNote() {
    this.synth.play(this.note, 0.1, 0, 0.3);
  }


  // Method of class object's appearance
  display() {
    push();
    if (!this.collected) {
    noStroke();
    fill(this.fill.r, this.fill.g, this.fill.b);
    ellipse(this.x, this.y, this.size);
    pop();
  }
  }

}
