"use strict";

// Scorebox
// Display an update of the amount of stars collected or lost

class Scorebox {

  constructor() {
    this.x = 100;
    this.y = 100;
    this.rectWidth = 80;
    this.rectHeight = 100;
    this.textString = `Stars Collected:`;

    // Score
    // Scorecount begins at 0
    this.score = 0;
    this.starsCountString = `Stars:`;

    this.fill = {
      r: 0,
      g: 255,
      b: 0
    };
    this.strokeweight = 0.5;
  }

  scoreCount() {
    // texting with "X" key
    if (keyIsDown(88)) {
      this.score++;
    }
  }

  display() {
    push();

    let scoreDisplay = createGraphics(this.rectWidth, this.rectHeight);

    // scoreDisplay.noFill();
    scoreDisplay.background(this.fill.r, this.fill.g, this.fill.b);

    scoreDisplay.textFont(globalFont);
    scoreDisplay.fill(0);
    scoreDisplay.textSize(8);
    scoreDisplay.text(this.textString, 2.5, 30);

    scoreDisplay.text(this.starsCountString + this.score, 3, 40);
    // scoreDisplay.rect(this.x, this.y, this.rectWidth, this.rectHeight);
    // Drawing offscreen buffer with image()
    image(scoreDisplay, this.x, this.y);
    pop();
  }
}

// https://p5js.org/reference/#/p5/createGraphics
// https://p5js.org/examples/structure-create-graphics.html
// text(str, x, y, textboxW, textboxH)