let bg = 0;

function setup() {
  createCanvas(500,500);
}

function draw() {
  background(bg);

  textAlign(CENTER,CENTER);
  textSize(64);
  fill(255);
  text(keyCode, width/2,height/2);  //ascii key codes
}

function keyPressed() {  // a function p5 already knows about
  if (keyCode === UP_ARROW) {    //38 is the up arrow, refer to keycode.info website
    bg += 10;
    bg = constrain(bg,0,255);
  }
  else if (keyCode === DOWN_ARROW){
    bg -= 10;
    bg = constrain(bg,0,255);
  }
}
