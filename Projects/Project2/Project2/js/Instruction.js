// Instruction
// Class object for the Instructions state that shows the user how to move around and interact in the simulation

class Instruction {

  constructor() {
    // Header
    this.header  = `instructions`;
    this.headerSize = 50;

    // Instructions
    this.textSize = 20;
    this.instruction1 = `A = LEFT \nD = RIGHT`;
    this.instruction2 = `W = UP \nS = DOWN`;
    this.instruction3 = `Q = FORWARD \nE = BACKWARDS`;
    this.instruction4 = `* Collect the stars to unlock a planet`;
    this.instruction5 = `* Press the spacebar to view the amount    of stars you've collected`;
    this.instruction6 = `* Approach a planet, and enjoy`;

    // "Back" instructiong
    this.back = `Press "B" to Go Back`
    this.backSize = 15;
  }

  // Displays the background, background globe, and instructions
  display() {
    push();
    background(bgColour);

    // Calling the title state's background globe
    title.globe();

    // Creates instructions as texture for the rect function (instruction board)
    let board = createGraphics(900, 700);
    board.background(green.r, green.g, green.b, 15);

    // Header
    board.textFont(titleFont);
    board.fill(green.r,green.g2,green.b);
    board.textSize(this.headerSize);
    board.textAlign(CENTER);
    board.text(this.header, board.width/2, board.height/5);

    // Instructions
    board.textFont(globalFont);
    board.textSize(this.textSize);
    board.textAlign(LEFT);
    board.text(this.instruction1, board.width/8, board.height/3);
    board.text(this.instruction2, board.width/8, board.height/2);
    board.text(this.instruction3, board.width/8, board.height/2 + 100);

    board.text(this.instruction4, board.width/2 - 50, board.height/3);
    board.text(this.instruction5, board.width/2 - 50, board.height/3 + 50, 500, 100);
    board.text(this.instruction6, board.width/2 - 50, board.height/2 + 40, 500, 100);

    board.textAlign(CENTER);
    board.textSize(this.backSize);
    board.text(this.back, board.width/2, board.height - 15);

    // Creates the instructions board
    push();
    stroke(green.r, green.g2, green.b);
    rectMode(CENTER);
    texture(board);
    rect(0, 0, 900, 700);
    pop();

    pop();
  }

}
