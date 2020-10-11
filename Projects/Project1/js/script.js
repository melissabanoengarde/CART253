"use strict";

/**************************************************
Project 01: Simulation
Melissa Banoen-Garde

Here is a description of this template p5 project.
**************************************************/
let bg;

// typeFace specs
let typeFaceImg;
  let typeFace = {
    x:750,
    y:450,
    size:40,
    vx:0,
    vy:0,
    speed: 5,
    ax:0,
    ay:0,
    acceleration: 6,
    maxSpeed: 1
  };




function preload(){
  bg = loadImage("assets/images/bg.jpg");
  typeFaceImg = loadImage("assets/images/typeFace.png");
}




function setup() {
  createCanvas(800,500);

}



function draw() {
  // Background
  background(bg);
  // imageMode(CORNER);



  // typeFace

  typeFace.x += typeFace.vx;
  typeFace.y += typeFace.vy;

  typeFace.vx += typeFace.ax;
  typeFace.vy += typeFace.ay;

  // key input AWSD
  if (keyIsDown(65)) {                 // A = Left
    typeFace.vx = -typeFace.speed;
    typeFace.ax = -typeFace.acceleration;
  }
  else if (keyIsDown(68)) {            // D = Right
    typeFace.vx = typeFace.speed;
    typeFace.ax = typeFace.acceleration;
  }
  else {
    // typeFace.vx = 0;                   // When nothing is pressed, typeFace stops moving
    typeFace.vx = constrain(typeFace.vx, -typeFace.maxSpeed, typeFace.maxSpeed);
  }

  if (keyIsDown(87)) {                // W = Up
    typeFace.vy = -typeFace.speed;
    typeFace.ay = -typeFace.acceleration;
  }
  else if (keyIsDown(83)) {           // S = Down
    typeFace.vy = typeFace.speed;
    typeFace.ay = typeFace.acceleration;
  }
  else {                              // When nothing is pressed, typeFace stops moving
    // typeFace.vy = 0;
    typeFace.vy = constrain(typeFace.vy, -typeFace.maxSpeed, typeFace.maxSpeed);
  }

  // display
  image(typeFaceImg, typeFace.x, typeFace.y, typeFace.size, typeFace.size);

}
