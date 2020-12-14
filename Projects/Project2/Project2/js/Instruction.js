class Instruction {

  constructor() {
    this.header  = `instructions`;
    this.headerSize = 50;

    this.textSize = 20;
    this.instruction1 = `A = LEFT \nD = RIGHT`;
    this.instruction2 = `W = UP \nS = DOWN`;
    this.instruction3 = `Q = FORWARD \nE = BACKWARDS`;
    this.instruction4 = `Collect the stars to unlock a planet`;
    this.instruction5 = `Press the spacebar to view the amount of stars you've collected`;
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

    // Creates instructions as texture for the plane primitive (instruction board)
    let board = createGraphics(900, 700);
    board.background(green.r, green.g, green.b, 15);

    // Header
    board.textFont(titleFont);
    board.fill(green.r,green.g2,green.b);
    board.textSize(this.headerSize);
    board.textAlign(CENTER);
    board.text(this.header, board.width/2, board.height/5);  // -width/6, -height/3

    // Instructions
    board.textFont(globalFont);
    board.textSize(this.textSize);
    board.textAlign(LEFT);
    board.text(this.instruction1, board.width/8, board.height/3);
    board.text(this.instruction2, board.width/8, board.height/2);
    board.text(this.instruction3, board.width/8, board.height/2 + 100);

    board.text(this.instruction4, board.width/2 - 50, board.height/3);
    board.text(this.instruction5, board.width/2 - 50, board.height/3 + 50, 500, 100);


    push();
    stroke(green.r, green.g2, green.b);
    rectMode(CENTER);
    texture(board);
    rect(0, 0, 900, 700);
    pop();

    pop();
  }

}
