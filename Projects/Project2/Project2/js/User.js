// User
// A class for the User (spaceship)

class User {

  constructor(x, y, z, size, spaceshipTexture) {
    // Position and motion
    this.x = x;
    this.y = y;
    this.z = z;
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
    this.size = size;
    this.spaceshipTexture = spaceshipTexture;
  }

  // Allows the user to move within the simulation
  motion() {
    this.x += this.vx;
    this.y += this.vy;
    this.z += this.vz;

  // Handle input, direction, and camera trailing
  // A = Left
  if (keyIsDown(65)) {
    this.vx = -this.speed;
    camX -= this.speed;
  }
  // D = Right
  else if (keyIsDown(68)) {
    this.vx = this.speed;
    camX += this.speed;
  }
  // Not moving left nor right
  else {
    this.vx = 0;
  }
  // W = Up
  if (keyIsDown(87)) {
  this.vy = -this.speed;
  camY -= this.speed;
  }
  // S = Down
  else if (keyIsDown(83)) {
    this.vy = this.speed;
    camY += this.speed;
  }
  // Not moving up nor down
  else {
    this.vy = 0;
   }
   // Allows the user to move on the z-axis by pressing "E" or "Q"
   // E = Forward
   if (keyIsDown(69)) {
     this.vz = -this.speed;
     camZ -= this.speed;
   }
   // Q = Backwards
   else if (keyIsDown(81)) {
     this.vz = this.speed;
     camZ += this.speed;
   }
   // Not moving forwards nor backwards
   else {
     this.vz = 0;
   }
 }

  // User's (spaceship) appearance
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
