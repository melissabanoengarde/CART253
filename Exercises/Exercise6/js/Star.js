class Star {

  constructor(x, y, size, note, synth) {
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
    this.synth = synth;
    this.reverb = reverb;
    this.note = note;
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
    this.synth.play(this.note, 0.05, 0, random(0.3, 0.8)); //play([note], [velocity], [secondsFromNow], [sustainTime])
    this.reverb.process(this.synth, 3, 2);  // process(src, [seconds], [decayRate], [reverse])
  }


  // Method of class object's appearance
  display() {
    if (!this.collected) {
    push();
    noStroke();
    fill(this.fill.r, this.fill.g, this.fill.b);
    ellipse(this.x, this.y, this.size);
    pop();
    }
  }
}
