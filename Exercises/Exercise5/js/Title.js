class Title extends State {

  constructor() {
    super();

    this.titleString = `Juggling with *True* Identity`;
    this.h2 = `Because it's that simple!`
    this.instruction = `[ Click anywhere to begin ]`
  }

  draw() {
    background(255);
    super.draw();
    this.displayTitle();
  }

  displayTitle() {
    push();
    fill(0);
    textAlign(CENTER, CENTER);

    textSize(40);
    text(this.titleString, width/2, height /2);

    textSize(20);
    text(this.h2, width / 2, ((height / 2)  + 60));

    textSize(13);
    text(this.instruction, width/2, ((height /2) * 1.5));
    pop();
  }

  mousePressed() {
    super.mousePressed();
    currentState = new Animation();
  }
}
