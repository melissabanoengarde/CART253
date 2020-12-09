// Title
// Class for the title state

class Title {

  constructor() {
    this.title = `solarystem`;
    this.titleSize = 100;
    this.instruction = `Press 'Enter' to Start`;
    this.instrucSize = 40;
  }

  display() {
    push();
    fill(green.r,green.g2,green.b);
    textFont(titleFont);
    textSize(this.titleSize);
    text(this.title, 0, 0);
    pop();
  }

}
