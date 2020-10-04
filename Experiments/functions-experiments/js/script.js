let circle = {
  x: 250,
  y: 250,
  size: 100,
  vx: 0,
  vy: 0,
  speed: 2,
  safeDistance: 150, // How many pixels away the mouse must be for the circle to feel safe
  state: `safe` // safe or fleeing
}

function setup() {
  createCanvas(500, 500);
}

function draw() {
  background(0);

  checkSafety();
  move();
  display();
}

// The checkSafety function sets the circle's state based on how close
// it is to the mouse
function checkSafety() {
  // Calculate the distance to the mouse
  let d = dist(circle.x, circle.y, mouseX, mouseY);
  if (d < circle.safeDistance) {
    // If it's too close, use the fleeing state
    circle.state = `fleeing`;
  }
  else {
    // If it's still outside a safe distance, use the safe state
    circle.state = `safe`;
  }
}

// The move function moves the circle based on its current state
function move() {
  if (circle.state === `safe`) {
    // If the circle is in the safe state, move by choosing a random
    // direction occasionally...
    let change = random();
    if (change < 0.05) {
      circle.vx = random(-circle.speed, circle.speed);
      circle.vy = random(-circle.speed, circle.speed);
    }
  }
  else if (circle.state === `fleeing`) {
    // If the circle is in the fleeing state, almost moving away
    // from the mouse in the x and y axes
    if (circle.x < mouseX) {
      circle.vx = -circle.speed;
    }
    else {
      circle.vx = circle.speed;
    }

    if (circle.y < mouseY) {
      circle.vy = -circle.speed;
    }
    else {
      circle.vy = circle.speed;
    }
  }

  // Update the circle's position to move it
  circle.x = circle.x + circle.vx;
  circle.y = circle.y + circle.vy;
}

function display() {
  ellipse(circle.x, circle.y, circle.size);
}
