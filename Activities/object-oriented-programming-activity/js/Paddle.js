class Paddle {

  constructor(w, h) {
    this.width = w;     // We use semicolons
    this.height = h;
    this.x = 0;
    this.y = height - this.height/2;
  }

  // move method
  move(){
    this.x = mouseX;
  }

  // display method
  display(){
    push();
    fill(255,0,0);
    noStroke();
    rectMove(CENTER);
    rect(this.x, this.y, this.width, this.height);
    pop();
  }

}
