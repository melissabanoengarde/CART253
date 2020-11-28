"use strict";

// Scorebox
// description

class Scorebox {

  constructor() {
    this.x = 100;
    this.y = 100;
    this.rectWidth = 80;
    this.rectHeight = 100;
    this.textString = `Stars Collected:`;

    this.fill = {
      r: 0,
      g: 255,
      b: 0
    };
    this.strokeweight = 0.5;
  }

  display() {
    push();

    let scoreDisplay = createGraphics(this.rectWidth, this.rectHeight);

    // scoreDisplay.noFill();
    scoreDisplay.background(this.fill.r, this.fill.g, this.fill.b);
    scoreDisplay.strokeWeight(this.strokeweight);
    // scoreDisplay.text(this.textString, width/2, height/3);
    // scoreDisplay.rect(this.x, this.y, this.rectWidth, this.rectHeight);

    // Drawing offscreen buffer with image()
    image(scoreDisplay, this.x, this.y);
    pop();
  }

}

// https://p5js.org/reference/#/p5/createGraphics
// https://p5js.org/examples/structure-create-graphics.html
// text(str, x, y, textboxW, textboxH)
