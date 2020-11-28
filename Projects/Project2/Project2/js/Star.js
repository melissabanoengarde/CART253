// STAR
// A class object of our individual stars

class Star {

  constructor(x, y, z, size, starCollectedSFX) {
    this.x = x;
    this.y = y;
    this.z = z;
    this.size = size;
    this.vx = 0;
    this.vy = 0;
    this.vz = 0;
    this.speed = 0.15;
    this.collected = false;
    this.starCollectedSFX = starCollectedSFX;

    this.fill = {
      r:0,
      g:200,
      b:0
    };

  }


  // Method of class object's Star's movements
  motion() {
    let change = random(0, 1);
    if (change < 0.05) {
    this.vx = random(-this.speed, this.speed);
    this.vy = random(-this.speed, this.speed);
    this.vz = random(-this.speed, this.speed);
    }
    // allows stars to move
    this.x += this.vx;
    this.y += this.vy;
    this.z += this.vz;
  }


  // Checks when star and user collides. If they do, user collects the star.
  // When the star is collected, it disappears from view and sound is triggered.
  checkStar(user) {
    if (!this.collected) {
      let d = dist(this.x, this.y, this.z, user.x, user.y, user.z);
      if (d < this.size / 2 + user.size / 2) {
        this.collected = true;
        this.starCollectedSFX.play();
        this.starCollectedSFX.setVolume(0.05);
       }
      }
     }


  // Method of class object's Star's appearance
  display() {
    if (!this.collected) {
    push();
    translate(this.x, this.y, this.z); // extension of stars' motion

    noFill();
    strokeWeight(0.05);
    stroke(this.fill.r, this.fill.g, this.fill.b);
    sphere(this.size);
    pop();
    }

  }

}
