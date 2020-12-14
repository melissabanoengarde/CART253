// Scorebox
// Displays an update of the amount of stars collected or loss

class Scorebox {

  constructor() {
    // Position
    // The scorebox follows the user. Properties are defined in display
    this.x = undefined;
    this.y = undefined;
    this.z = undefined;

    // Dimension
    this.boardWidth = 150;
    this.boardHeight = 120;

    // Scorecount begins at 0
    this.score = 0;
    // Spacebar
    this.spacebar = 32;

    // Display
    this.starsCountString = `Stars:`;
    this.textString = `Stars Collected:`;
    this.fill = {
      r: 0,
      g: 255,
      b: 0
    };
    this.strokeweight = 0.5;
    this.active = true;
  }

  showInfo() {
    if (keyIsDown(this.spacebar)) {
      this.active = false;
    }
    else {
      this.active = true;
    }
  }

  display() {
    if (!this.active) {
      push();
      let scoreDisplay = createGraphics(this.boardWidth, this.boardHeight);

      scoreDisplay.textFont(globalFont);
      scoreDisplay.fill(this.fill.r, this.fill.g, this.fill.b);
      scoreDisplay.textSize(16);
      // scoreDisplay.textAlign(RIGHT, TOP);
      // scoreDisplay.text(this.textString, 2.5, 30);
      scoreDisplay.text(this.starsCountString + this.score, 3, 45);

      // Drawing offscreen buffer with image()
      push();
      this.x = camX + 150;
      this.y = camY + 360;
      this.z = camZ;
      translate(this.x, this.y, this.z);
      noStroke();
      texture(scoreDisplay);
      plane(this.boardWidth + 90, this.boardHeight + 90);
      pop();

      pop();
    }
  }
}

// https://p5js.org/reference/#/p5/createGraphics
// https://p5js.org/examples/structure-create-graphics.html
// text(str, x, y, textboxW, textboxH)
