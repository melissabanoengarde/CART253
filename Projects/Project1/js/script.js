"use strict";

/**************************************************
Project 01: Simulation
Melissa Banoen-Garde

Here is a description of this template p5 project.
**************************************************/
let bg //2272 x 881
let typeFace;


function preload() {
  bg = loadImage("assets/images/bg.jpg");
}


function setup() {
  createCanvas(900, 500);
  rectMode(CENTER);

  typeFace = new fontIcon(width - 10, height -10);
}



function draw() {
  // Background
  background(0);
  image(bg,0,0);

  typeFace.show();

  //===== typeFace =====/
  //movement
  // typeFace.x += typeFace.vx;
  // typeFace.y += typeFace.vy;
  //
  // typeFace.vx += typeFace.ax;
  // typeFace.vy += typeFace.ay;
  //
  // // key input AWSD
  // if (keyIsDown(65)) {                    // A = Left
  //   typeFace.vx = -typeFace.speed;
  //   typeFace.ax = -typeFace.acceleration;
  // } else if (keyIsDown(68)) {             // D = Right
  //   typeFace.vx = typeFace.speed;
  //   typeFace.ax = typeFace.acceleration;
  // } else {
  //   // typeFace.vx = 0;                   // When nothing is pressed, typeFace stops moving
  //   typeFace.vx = constrain(typeFace.vx, -typeFace.maxSpeed, typeFace.maxSpeed);
  // }
  //
  // if (keyIsDown(87)) {                    // W = Up
  //   typeFace.vy = -typeFace.speed;
  //   typeFace.ay = -typeFace.acceleration;
  // } else if (keyIsDown(83)) {             // S = Down
  //   typeFace.vy = typeFace.speed;
  //   typeFace.ay = typeFace.acceleration;
  // } else {                                // When nothing is pressed, typeFace stops moving
  //   // typeFace.vy = 0;
  //   typeFace.vy = constrain(typeFace.vy, -typeFace.maxSpeed, typeFace.maxSpeed);
  // }
  //
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
