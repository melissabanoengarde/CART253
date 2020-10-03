let hello ={
  string: `Hello, wold!`,
  x:0,
  y:250,
  vx: 5,
  vy: 1,
  size: 64
};


function setup(){
  createCanvas(500,500);
}

function draw(){
  background(127);

  hello.x += hello.vx;
  hello.y += hello.vy;

  hello.size += 1;

  textAlign(CENTER,CENTER);
  textSize(hello.size);
  textStyle(ITALIC);

  fill(250,150,100);
  strokeWeight(5);
  stroke(255);

  text(hello.string, hello.x,hello.y)        //we are specifying a string at this (250,250) position

}

//can look up other fonts, check it out in reference
