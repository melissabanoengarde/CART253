// USER
// a class for the User (spaceship)

class User {

  constructor(x, y, z, size, spaceshipTexture) {
    this.x = x;
    this.y = y;
    this.z = z;
    this.size = size;
    this.vx = 0;
    this.vy = 0;
    this.vz = 0;
    this.speed = 5;

    // Display
    this.fill = {
      r: 250,
      g: 250,
      b: 250
    };
    this.spaceshipTexture = spaceshipTexture;
  }

  // User's movement
  motion() {
    this.x += this.vx;
    this.y += this.vy;
    this.z += this.vz;

  // Handle input and direction
  // Left
  if (keyIsDown(65)) {
    this.vx = -this.speed;
    camX -= this.speed;
  }
  // Right
  else if (keyIsDown(68)) {
    this.vx = this.speed;
    camX += this.speed;
  }
  // Not moving left nor right
  else {
    this.vx = 0;
  }
  // Up
  if (keyIsDown(87)) {
  this.vy = -this.speed;
  camY -= this.speed;
  }
  // Down
  else if (keyIsDown(83)) {
    this.vy = this.speed;
    camY += this.speed;
  }
  // Not moving up nor down
  else {
    this.vy = 0;
   }

   // Allows user to move on z-axis by pressing "E" and "Q"
   if (keyIsDown(69)) {       // forward E
     this.vz = -this.speed;
     camZ -= this.speed;
   }
   else if (keyIsDown(81)) {  // backwards Q
     this.vz = this.speed;
     camZ += this.speed;
   }
   // Not moving forwards nor backwards
   else {
     this.vz = 0;
   }
 }

  // User's object appearance
  display() {
  push();
  // I would've placed this in the 'motion' method but the
  // translate, rotateX, and rotateY function only works
  // within the push and pop in which the 3D primitive is situated.
  translate(this.x, this.y, this.z);
  rotateX(1);
  rotateY(frameCount * 0.02);

  noFill();
  strokeWeight(0.05);
  stroke(random(this.fill.r), random(this.fill.g), random(this.fill.b));
  texture(spaceshipTexture);
  sphere(this.size, 3, 10);
  // A second sphere to give the spaceship its displayed shape
  // as opposed to a simple sphere
  push();
  sphere(this.size, 4, 11);
  pop();
  pop();
  }

}

// console.log(this.x);
// ascii, o = 79, k = 76
