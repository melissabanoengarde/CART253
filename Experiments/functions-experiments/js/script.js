let c = {
  x:0,
  y:250,
  size:100,
  vx: 0,
  vy: 0,
  speed:2
};


function setup(){
  createCanvas(500,500);
  c.vx += c.speed;
}

function draw(){
  background(0);

  c.x += c.vx;
  c.y += c.vy;

  ellipse(c.x,c.y,c.size);

}
