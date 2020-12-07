// PLANET
// This will be the superclass in which the subclasses (other planets) will inherit

class Planet {

  constructor(distance, diameter, speed, rSpeed, hasRings) {
    this.distance = distance;   // distance from the sun (center)
    this.diameter = diameter;   // size of planet
    this.speed = speed;         // motion speed
    this.rSpeed = rSpeed;       // rotation speed
    this.z = 0;
    this.angle = 0;
    this.rotateX = 1.5;
    this.strokeWeight = 0.05;
    this.hasRings = hasRings;

    // each planet's "visible" status will be customized in their repsective subclass
    this.visible = undefined;
    this.totalStars = undefined;
  }

  // What permits the planets to orbit
  motion() {
    push();
    this.x = this.distance * cos(this.angle);
    this.y = this.distance * sin(this.angle);
    // what permits the planets to return to its initial position after circulating around the sun
    this.angle += this.speed;       // planets' motion
    pop();
  }

  // The planets' appearance
  display() {
    push();
    // (!) keep translate and rotateZ within push-pops of display
    translate(this.x, this.y, this.z);

    // planet's rotation
    rotateZ(frameCount * this.rSpeed);
    rotateX(this.rotateX);

    // planet's general appearance
    stroke(0, 255, 0);
    strokeWeight(this.strokeWeight);
    sphere(this.diameter);

    // displays the torus' if this planet has rings (thanks, Sam TA!)
    push();
    let colour1 = {
      r: 101,
      g: 95,
      b: 69
    }

    let colour2 = {
      r: 216,
      g: 174,
      b: 109
    }

    let colour3 = {
      r: 255,
      g: 225,
      b: 171
    }

    let colour4 = {
      r: 219,
      g: 181,
      b: 124
    }

    let colour5 = {
      r: 184,
      g: 156,
      b: 114
    }

    if (this.hasRings) {
      rotateX(30);

      fill(colour1.r, colour1.g, colour1.b);
      torus(45, 0.5, 40);

      fill(colour2.r, colour2.g, colour2.b);
      torus(50, 0.5, 50);

      fill(colour3.r, colour3.g, colour3.b);
      torus(55, 0.5, 55);

      fill(colour4.r, colour4.g, colour4.b);
      torus(60, 0.5, 60);

      fill(colour1.r, colour1.g, colour1.b);
      torus(65, 0.5, 65);

      fill(colour4.r, colour4.g, colour4.b);
      torus(70, 0.5, 70);

      fill(colour5.r, colour5.g, colour5.b);
      torus(75, 0.5, 75);
    }
    pop();
    pop();
  }

  showInfo() {
    let d = dist(this.x, this.y, this.z, user.x, user.y, user.z);
    let infoXpos = camX - 180;
    let infoYpos = camY + 350;
    let infoZpos = 0;
    let stop = 0;

    if (d < ((this.diameter + 10) + (user.size + 10))) {
      push();
      this.speed = stop;
      noStroke();

      // rotateY(mouseX * 0.02);
      // rotateX(mouseY * 0.02);

      translate(infoXpos, infoYpos, infoZpos);
      plane(280, 250);
      pop();
    }
    else {
      this.resume();
    }
  }

  resume() {
    // customized in subclasses as each have different speeds
  }



}


// using if-statements for mousehover on planet is hard because of their motion
// orbitting maths https://www.w3schools.com/graphics/game_movement.asp
    // fill(0,255,0, 5);
