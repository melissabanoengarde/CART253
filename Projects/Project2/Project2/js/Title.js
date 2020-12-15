// Title
// Class object for the title state

class Title {

  constructor() {
    // Title
    this.title = `solarystem`;
    this.titleSize = 130;

    // Prompts
    this.prompt = `Press Enter to Start\n
                      \nPress "I" for Instructions`;
    this.promptSize = 20;

    // Globe
    this.size = 850;
  }

  globe() {
    // Globe
    push();
    translate(0, 200, 0);
    rotateY(frameCount * 0.002);
    noFill();
    strokeWeight(0.2);
    stroke(green.r, green.g, green.b);
    sphere(this.size);
    pop();
  }

  // Displays the background, title, and prompts
  display() {
    push();
    background(bgColour);

    // Calling the globe method first so it is 'behind' the title, allowing the
    // createGraphic function's background transparency to work
    this.globe();

    fill(green.r, green.g2, green.b);

    // Title
    let title = createGraphics(1510, 200);
    title.background(green.r, green.g, green.b, 0);

    title.textFont(titleFont);
    title.fill(green.r, green.g2, green.b);
    title.textSize(this.titleSize);
    title.textAlign(CENTER, CENTER);
    title.text(this.title, title.width/2, title.height/2);

    push();
    noStroke();
    rectMode(CENTER);
    texture(title);
    rect(0, 0, 1510, 200);
    pop();


    // Prompts
    textFont(globalFont);
    textSize(this.promptSize);
    textAlign(CENTER);
    text(this.prompt, 0, height/6);

    pop();
  }

}
