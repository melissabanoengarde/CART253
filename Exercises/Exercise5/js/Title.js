class Title extends State {

  constructor() {
    super();

    this.titleString = `Juggling with "True" Identity`;
    this.h2 = `'cause' it's that simple!`
  }

  draw() {
    super.draw();

    this.displayTitle();
  }

  displayTitle() {
    push();
    fill(0);
    text(this.titleString, width/2, height /2);
    text(this.h2, width / 2, ((height / 2)  + 50));
    pop();
  }

  mousePressed() {
    super.mousePressed();
    currentState = new Animation();
  }

}
