"use strict";

/**************************************************
PROJECT 2
Melissa Banoen-Garde

Here is a description of this template p5 project.
**************************************************/

let myFont;
let myFont2;


let state = `title`;

// Preloads
function preload() {
  myFont = loadFont('assets/fonts/Baybayin_Mod.ttf');
  myFont2 = loadFont('assets/fonts/Leiko-Regular.otf');
}

// Description of setup() goes here.
function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL); /* 2000, 1200*/
}


// Description of draw() goes here.
function draw() {
  background(0);

  if (state === `title`) {
    title();
  } else if (state === `simulation`) {
    simulation();
  } else if (state === `lose`) { //lose
    lose();
  } else if (state === `win`) { //win
    win();
  }
}

  // orbitControl(5,5,5);
  // rotateX(frameCount * 0.01);
  // rotateY(frameCount * 0.01);

function mousePressed() {
  if (state === `title`) {
    state = `simulation`
  }
}

function title() {
/* test text */
  push();
  rotateY(frameCount * 0.01);
  fill(0, 255, 17);
  textFont(myFont);
  textSize(240);
  textAlign(CENTER, CENTER);
  text(`Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. b`, -200, -1000, 4000,2000);
  pop();

  push();
  rotateX(frameCount * -0.01);
  rotateY(frameCount * -0.01);
  fill(0, 255,17, 60);
  textFont(myFont);
  textSize(180);
  textAlign(CENTER, CENTER);
  text(`Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.b`, -1000, 0, 3000,3000);
  pop();

  // push();
  // rotateX(frameCount * 0.0001);
  // fill(255,255,255);
  // textFont(myFont2);
  // textSize(100);
  // textAlign(CENTER, CENTER);
  // text(`What is calling you?`, 10,10);
  // pop();

  push();
  rotateX(frameCount * 0.0001);
  fill(255,255,255);
  textFont(myFont2);
  textSize(50);
  textAlign(CENTER, CENTER);
  text(`CLICK TO BEGIN`, 10,250);
  pop();
}

function simulation() {
  // push();
  // // rotateX(mouseX - 10);
  // rotateZ(frameCount * 0.01);
  // textFont(myFont);
  // fill(255,0,0,70);
  // textSize(200);
  // textAlign(CENTER, CENTER);
  // text(`Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`, -1300, -1750, 3000,3000);
  // pop();

  // sphere
  push();
  stroke(255,0,0);
  noFill();
  rotateY(frameCount * 0.01);
  rotateZ(frameCount * 0.005);
  sphere(300,20,10);
  pop();

  // cube
  push();
  // translate(-100,0);
  stroke(0,0,255);
  noFill();
  rotateX(frameCount * 0.01);
  rotateZ(frameCount * 0.005);
  box(100,100,100);
  pop();

  // cube
  push();
  // translate(-100,0);
  stroke(0,0,255);
  noFill();
  rotateX(frameCount * -0.01);
  rotateZ(frameCount * -0.005);
  box(800,800,800);
  pop();
}








/*
NOTES:

text(`text here`, x, y, width-wrap, height-wrap)

to set light, think of the world's coordinates
// -width/2,-height/2 -------- width/2,-height/2
//                |            |
//                |     0,0    |
//                |            |
// -width/2,height/2--------width/2,height/2
source: https://p5js.org/reference/#/p5/pointLight

rainforest img source: https://i.redd.it/afjau4hzzsv51.jpg

*/
