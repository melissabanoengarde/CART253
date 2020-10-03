function setup() {
  createCanvas(500, 500);
}

function draw() {
  background(0);
  // We assign the return value of randomColor() into our color variable
  // so it will have an object with three random color properties
  let color = randomColor();
  fill(color.r, color.g, color.b);
  ellipse(250, 250, 100, 100);
}

function randomColor() {
  let result = {
    r: random(0, 255),
    g: random(0, 255),
    b: random(0, 255)
  };
  return result;
}
