"use strict";

/**************************************************
Project 01: Simulation
Melissa Banoen-Garde

Here is a description of this template p5 project.
**************************************************/
let bg;

// typeFace specs
let typeFace;
  let typeFace = {
    x:0,
    y:0,
    size:100,
    vx:0,
    vy:0,
    speed: 5
  };




function preload(){
  bg = loadImage("assets/images/bg.jpg");
  typeFace = loadImage("assets/images/bg.jpg");
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

  // key input AWSD
  if ()

}
