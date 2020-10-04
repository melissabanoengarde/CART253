let c = {
  x: 250,
  y:250,
  size: 100,
  vx: 0,
  vy: 0,
  speed: 2
}


function setup() {
  createCanvas(500,500);

  c.vx = c.speed;
  c.vy = c.speed;
}

function draw() {
  background(100,50,25);

  let change = random();  // when we use random without parameters, it's gonna give back random numbers between 0 and 1
  if (change < 0.05) {     //  this will be true 10% of the time
    c.vx = random(-c.speed,c.speed);
    c.vy = random(-c.speed,c.speed);
}

  c.x += c.vx;
  c.y += c.vy;

  ellipse(c.x,c.y,c.size);
}




// the numbers that come out of the random function, follow a uniform distribution
// every number is just as likely to pop out whenever we call it
