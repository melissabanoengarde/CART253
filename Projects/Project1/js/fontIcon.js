class fontIcon {

  constructor(x, y){
    this.x = x;
    this.y = y;
    this.size = 20;
    // this.vx = 0;
    // this.vy = 0;
    this.speed = 5;
    // this.ax = 0;
    // this.ay = 0;
    // this.acceleration = 6;
    // this.maxSpeed = 1
  };


// What enables fontIcon to go left or right
  canGoLeft(){
    if (this.x > 50 + this.speed){
      return(true);
    }
    else {
      return(false);
    }
  }

  canGoRight(){
    if (this.x < width - (50 + this.speed)){
      return(true);
    }
    else {
      return(false);
    }
  }

// fontIcon's movement
  goLeft(){
  this.x -= this.speed;
  }

  goRight(){
    this.x += this.speed;
  }


// Display
  show(){
    rect(this.x,this.y,this.size,this.size);
  }

}














/*NOTES
+ When you define a class you can make it do whatever you want (6:42)
+ if moved to the left, x-value gets smalled (7:10)
+ "-(50 + this.speed)" , just to say "minus this whole info"
*/
