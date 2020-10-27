class FilipinoIdentityEnding extends State {

  constructor() {
    super();
    this.textString = `You are filipino at heart! \n It's that easy, right?`
  }

  draw() {
    super.draw();
    this.display();
  }

  // What's displayed if this were the ending
  display() {
    push();
    fill(0);
    textAlign(CENTER, CENTER);
    textSize(40);
    text(this.textString, width/2, height /2);
    pop();
  }

}
