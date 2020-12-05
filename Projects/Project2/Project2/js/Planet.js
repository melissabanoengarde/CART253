// PLANET
// This will be the superclass in which the subclasses (other planets) will inherit

class Planet {

  constructor(distance, diameter, speed, rSpeed, hasRings) {
    this.distance = distance;   // distance from the sun (center)
    this.diameter = diameter;   // size of planet
    this.speed = speed;         // motion speed
    this.rSpeed = rSpeed;       // rotation speed
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
    translate(this.x, this.y);

    // planet's rotation
    rotateZ(frameCount * this.rSpeed);
    rotateX(this.rotateX);

    // planet's general appearance
    stroke(0, 255, 0);
    strokeWeight(this.strokeWeight);
    sphere(this.diameter);

    // displays the torus' if this planet has rings (thanks, Sam TA!)
    push();
    if (this.hasRings) {
      rotateX(30);

      fill(101,95,69);
      torus(45, 0.5, 40);

      fill(216,174,109);
      torus(50, 0.5, 50);

      fill(255,225,171);
      torus(55, 0.5, 55);

      fill(219,181,124);
      torus(60, 0.5, 60);

      fill(101,95,69);
      torus(65, 0.5, 65);

      fill(219,181,124);
      torus(70, 0.5, 70);

      fill(184,156,114);
      torus(75, 0.5, 75);
    }
    pop();
    pop();
  }

}


// using if-statements for mousehover on planet is hard because of their motion
// orbitting maths https://www.w3schools.com/graphics/game_movement.asp
    // fill(0,255,0, 5);
