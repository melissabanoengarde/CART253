let bg = 0;

function setup() {
  createCanvas(500,500);
}

function draw() {
  background(bg);


  if (keyIsDown(65)) { //65 is code for 'A' key
    rectMode(CENTER);
    rect(250,250,100,100);
  }

}
