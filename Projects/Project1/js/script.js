"use strict";

/**************************************************
Project 01: Simulation
Melissa Banoen-Garde

Here is a description of this template p5 project.
**************************************************/
let bg                            //2272 x 881
let bgLeft = -1272;
let bgUp = -280;
let goSpeed = 5;
let typeFace;


function preload() {
  bg = loadImage("assets/images/bg.jpg");
}


function setup() {
  createCanvas(1000, 600);
  rectMode(CENTER);

  typeFace = new fontIcon(width - 20, height -45);
}



function draw() {
  // Background
  background(0);
  image(bg,bgLeft,bgUp);

  typeFace.show();


// Background movement
function moveBgLeft(){       //the bigger the negative number, the further to the left it will gget drawn (16:53)
  bgLeft -= goSpeed;
}

function moveBgRight(){
  bgLeft += goSpeed;
}

function moveBgUp(){
  bgUp += goSpeed;
}

function moveBgDown(){
  bgUp -= goSpeed;
}


  //===== typeFace =====/
  //movement
  // typeFace.x += typeFace.vx;
  // typeFace.y += typeFace.vy;

  // typeFace.vx += typeFace.ax;
  // typeFace.vy += typeFace.ay;

  // // key input AWSD
  if (keyIsDown(65)) {                    // A = Left
    if (typeFace.canGoLeft()){
      typeFace.goLeft();
    }
    else {
      moveBgRight();
    }
  }
  //   typeFace.vx = -typeFace.speed;
  //   typeFace.ax = -typeFace.acceleration;
  else if (keyIsDown(68)) {             // D = Right
    if (typeFace.canGoRight()){
    typeFace.goRight();
    }
    else {
      moveBgLeft();
    }
  }
  //   typeFace.vx = typeFace.speed;
  //   typeFace.ax = typeFace.acceleration;

  // else {
  //   // typeFace.vx = 0;                   // When nothing is pressed, typeFace stops moving
  //   typeFace.vx = constrain(typeFace.vx, -typeFace.maxSpeed, typeFace.maxSpeed);
  // }

  else if (keyIsDown(87)) {                    // W = Up
    if (typeFace.canGoUp()){
      typeFace.goUp();
    }
    else {
      moveBgUp();
    }
  }
  //   typeFace.vy = -typeFace.speed;
  //   typeFace.ay = -typeFace.acceleration;
   else if (keyIsDown(83)) {                     // S = Down
     if (typeFace.canGoDown()){
       typeFace.goDown();
     }
     else {
       moveBgDown();
     }
   }
  //   typeFace.vy = typeFace.speed;
  //   typeFace.ay = typeFace.acceleration;
  //  else {                                // When nothing is pressed, typeFace stops moving
  //   // typeFace.vy = 0;
  //   typeFace.vy = constrain(typeFace.vy, -typeFace.maxSpeed, typeFace.maxSpeed);
  // }

  // // display
  // image(typeFaceImg, typeFace.x, typeFace.y, typeFace.size, typeFace.size);



  //===== Background interaction =====//
  // imageMode(CORNER);
  // image(bg, bgBottomLeft, 0);
  //
  // //When typeFace moves to the bottom left of background
  // let minBgBottomLeft = -bg.width + width;
  //
  // if (bgBottomLeft - typeFace.x > minBgBottomLeft){
  //   bgBottomLeft -= typeFace.x;
  // }
  //
  // //When typeFace moves to the bottom right of Background
  // if (bgBottomLeft + typeFace.x < 0){
  //   bgBottomLeft += typeFace.x;
  // }



}
