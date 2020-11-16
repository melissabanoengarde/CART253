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
  if (keyIsDown(65)) {        // left
    this.vx = -this.speed;
    camX -= this.speed;
  }
  else if (keyIsDown(68)) {   // right
    this.vx = this.speed;
    camX += this.speed;
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

   // Depth function for user to move on z-axis by pressing "o" and "l"
   if (keyIsDown(81)) {       // forward Q
     this.vz = -this.speed;
     camY -= this.speed;
   }
   else if (keyIsDown(69)) {  // backwards E
     this.vz = this.speed;
     camY += this.speed;
   }
   else {
     this.vz = 0;
   }
  }

  // User's object's appearance
  display() {
  push();
  translate(this.x, this.y, this.z); // movement extension
  rotateX(1);
  rotateY(frameCount * 0.02);

  noFill();
  strokeWeight(0.05);
  stroke(random(this.fill.r), random(this.fill.g), random(this.fill.b));
  texture(spaceshipTexture);
  sphere(this.size);
  // POSSIBLE SHAPE.... using sphere, for now, to test collision
  // sphere(this.size, 3, 10);
  // push();
  // sphere(this.size, 4, 11);
  // pop();
  pop();
  }

}

// console.log(this.x);

/*ascii, o = 79, k = 76*/
