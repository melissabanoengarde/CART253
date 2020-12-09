// Title
// Class for the title state

class Title {

  constructor() {
    // Title
    this.title = `solarystem`;
    this.titleSize = 100;
    // Instruction
    this.instruction = `Press 'Enter' to Start`;
    this.instrucSize = 20;
  }

  display() {
    push();
    background(bgColour);

    // calling the stars array and Star.js necessary methods
    // so they are displayed in the backround
    for (let i = 0; i < stars.length; i++) {
      let star = stars[i];
        star.motion();
        star.display();
      }

    fill(green.r,green.g2,green.b);

    // Title
    push();
    textFont(titleFont);
    textSize(this.titleSize);
    text(this.title, (-width/3) * 0.95, 0);
    pop();

    // Instruction
    push();
    textFont(globalFont);
    textSize(this.instrucSize);
    text(this.instruction, (-width/10) * 0.8, height/5);
    pop();

    pop();
  }

}
