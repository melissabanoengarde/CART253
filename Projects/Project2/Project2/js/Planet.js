// This will be the superclass in which the subclasses (other planets) will inherit

class Planet {

  constructor() {
    this.distance = 0;   // distance from the sun (center)
    this.diameter = undefined;   // size of planet
    this.speed = 0;         // motion speed
    this.rSpeed = 0;       // rotation speed
    this.angle = 0;
  }

  // What permits the planets to orbit
  motion() {
    push();
    this.x = this.distance * cos(this.angle);
    this.y = this.distance * sin(this.angle);
    translate(this.x, this.y);                  // what permits the planets to return to its initial position after circulating around the sun

    this.angle += this.speed;       // planets' motion

    rotateZ(frameCount * this.rSpeed);       // planet's rotation
    pop();
  }

  // The planets' appearance
  display() {
    push();
    fill(0,255,0, 5);
    rotateX(1.5);
    stroke(0,255,0);
    strokeWeight(0.1);
    // texture('assets/images/sun1.gif');
    pop();
  }

}



// orbitting maths https://www.w3schools.com/graphics/game_movement.asp
