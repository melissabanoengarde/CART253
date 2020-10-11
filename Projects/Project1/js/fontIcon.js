class fontIcon {

  constructor(x, y){
    this.x = x;
    this.y = y;
    this.size = 45;
    // this.vx = 0;
    // this.vy = 0;
    this.speed = goSpeed;
    // this.ax = 0;
    // this.ay = 0;
    // this.acceleration = 6;
    // this.maxSpeed = 1
  };


// What enables fontIcon to go left, right, up, or down
  canGoLeft(){
    if (this.x > 20 + this.speed){        //since it's goSpeed is defined as "15" in "script.js", it will be 15 here too.
      return(true);
    }
    else {
      return(false);
    }
  }

  canGoRight(){
    if (this.x < width - (20 + this.speed)){
      return(true);
    }
    else {
      return(false);
    }
  }

  canGoUp(){
    if (this.y > 20 + this.speed){
      return(true);
    }
    else {
      return(false);
    }
  }

  canGoDown(){
    if (this.y < height - (50 + this.speed)){
      return(true);
    }
    else {
      return(false);
    }
  }

// fontIcon's movement direction
  goLeft(){
  this.x -= this.speed;

  }

  goRight(){
    this.x += this.speed;
  }

  goUp(){
  this.y -= this.speed;
  }

  goDown(){
    this.y += this.speed;
  }


// Display
  show(){
    image(typeFaceImg, this.x, this.y, this.size, this.size);
  }

}

// typeFace.x += typeFace.vx;
// typeFace.y += typeFace.vy;

// typeFace.vx += typeFace.ax;
// typeFace.vy += typeFace.ay;

//   typeFace.vx = -typeFace.speed;
//   typeFace.ax = -typeFace.acceleration;

//   typeFace.vx = typeFace.speed;
//   typeFace.ax = typeFace.acceleration;
// else {
//   typeFace.vx = constrain(typeFace.vx, -typeFace.maxSpeed, typeFace.maxSpeed);
// }

//   typeFace.vy = -typeFace.speed;
//   typeFace.ay = -typeFace.acceleration;

//   typeFace.vy = typeFace.speed;
//   typeFace.ay = typeFace.acceleration;
//  else {
//   typeFace.vy = constrain(typeFace.vy, -typeFace.maxSpeed, typeFace.maxSpeed);
// }














/*NOTES
+ When you define a class you can make it do whatever you want (6:42)
+ if moved to the left, x-value gets smalled (7:10)
+ "-(50 + this.speed)" , just to say "minus this whole info"
*/
