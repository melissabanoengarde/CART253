// Scorebox
// Displays an update of the amount of stars collected or loss

class Scorebox {

  constructor() {
    // Position
    // The scorebox follows the user. Properties are defined in display
    this.x = undefined;
    this.y = undefined;
    this.z - undefined;

    // Dimension
    this.boardWidth = 150;
    this.boardHeight = 120;

    // Scorecount begins at 0
    this.score = 0;

    // Display
    this.starsCountString = `Stars:`;
    this.textString = `Stars Collected:`;
    this.fill = {
      r: 0,
      g: 255,
      b: 0
    };
    this.strokeweight = 0.5;
    // this.display = false;
  }


  display() {
    push();
    let scoreDisplay = createGraphics(this.boardWidth, this.boardHeight);

    scoreDisplay.textFont(globalFont);
    scoreDisplay.fill(this.fill.r, this.fill.g, this.fill.b);
    scoreDisplay.textSize(12);

    scoreDisplay.text(this.textString, 2.5, 30);
    scoreDisplay.text(this.starsCountString + this.score, 3, 40);

    // Drawing offscreen buffer with image()
    push();
    this.x = camX - 110;
    this.y = camY + 350;
    this.z = camZ;
    translate(this.x, this.y, this.z);
    noStroke();
    texture(scoreDisplay);
    plane(this.boardWidth, this.boardHeight);
    pop();

    pop();
  }
}

// https://p5js.org/reference/#/p5/createGraphics
// https://p5js.org/examples/structure-create-graphics.html
// text(str, x, y, textboxW, textboxH)
