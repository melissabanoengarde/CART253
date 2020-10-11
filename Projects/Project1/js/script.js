"use strict";

/**************************************************
Project 01: Simulation
Melissa Banoen-Garde

Here is a description of this template p5 project.
**************************************************/

// Variables
let bg;                            //2272 x 881
let bgLeft = -1272;
let bgUp = -280;

let typeFace;
let typeFaceImg;
let goSpeed = 50;

let fontFolderImg;
let fontFolder = {
  x:0,
  y:0,
  size: 50,
};


function preload() {
  bg = loadImage("assets/images/bg.jpg");
  typeFaceImg = loadImage("assets/images/typeFace.png");
  fontFolderImg = loadImage("assets/images/folder.png");
}


function setup() {
  createCanvas(1000, 600);
  rectMode(CENTER);


  typeFace = new fontIcon(width - 50, height -80);
}



function draw() {
  // Background
  background(0);
  image(bg,bgLeft,bgUp);

  typeFace.show();

// Font folder to win!
// Display
push();
imageMode(CENTER);
image(fontFolderImg, bgLeft + 60, bgUp + 200,fontFolder.size,fontFolder.size);
pop();


// Background movement
function moveBgLeft(){               //the bigger the negative number, the further to the left it will gget drawn (16:53)
  let minBgLeft = -bg.width + width;

  if (bgLeft - goSpeed > minBgLeft){
    bgLeft -= goSpeed;
  }
}

function moveBgRight(){
  if (bgLeft + goSpeed < 0){
    bgLeft += goSpeed;
  }
}

function moveBgUp(){
  if (bgUp + goSpeed < 0){
    bgUp += goSpeed;
  }
}

function moveBgDown(){
  let minBgUp = -bg.height + height;

  if (bgUp - goSpeed > minBgUp){
    bgUp -= goSpeed;
  }
}


//===== typeFace Key Handle =====/
if (keyIsDown(65)) {                  // A = Left
 if (typeFace.canGoLeft()){
   typeFace.goLeft();
    }
    else {
      moveBgRight();
    }
  }

  else if (keyIsDown(68)) {             // D = Right
    if (typeFace.canGoRight()){
      typeFace.goRight();
    }
    else {
      moveBgLeft();
    }
  }

  else if (keyIsDown(87)) {             // W = Up
    if (typeFace.canGoUp()){
      typeFace.goUp();
    }
    else {
      moveBgUp();
    }
  }

   else if (keyIsDown(83)) {           // S = Down
     if (typeFace.canGoDown()){
       typeFace.goDown();
     }
     else {
       moveBgDown();
     }
   }






}
