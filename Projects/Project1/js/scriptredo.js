"use strict"
/**************************************************
 Project 01: Simulation
 Melissa Banoen-Garde

 Here is a description of this template p5 project.
**************************************************/

//VARIABLES
let bg;
let bgLeft = -1272;       // Bg's beginning x-value
let bgUp = -280;          // Bg's beginning y-value

let typeFaceImg;
let typeFace = {
  x:950,
  y:520,
  size: 45,
  vx:0,
  vy:0,
  speed: 3,
};

let fontFolderImg;
let fontFolder = {
  x:0,
  y:0,
  size:55,
};

function preload (){
  bg = loadImage("assets/images/bg.jpg");
  typeFaceImg = loadImage("assets/images/typeFace.png");
  fontFolderImg = ("assets/images/folder.png");
}

function setup() {
  createCanvas(1000, 600);

  typeFace.vx = typeFace.speed;
  typeFace.vy = typeFace.speed;     
}

function draw() {
  background(0);
  image(bg,bgLeft,bgUp);


// Background Movement
function moveBgLeft(){
  let minBgLeft = -bg.width + width;

  if (bgLeft - typeFace.speed > minBgLeft){
    bgLeft -= typeFace.speed;
  }
}

function moveBgRight(){
  if (bgLeft + typeFace.speed < 0){
    bgLeft += typeFace.speed;
  }
}

function moveBgUp(){
  if (bgUp - typeFace.speed < 0){
    bgUp -= typeFace.speed;
  }
}

function moveBgDown(){
  let minBgUp = -bg.height + height;

  if (bgUp + typeFace.speed > minBgUp){
    bgUp += typeFace.speed;
  }
}

//============================================//

function canGoLeft(){
  typeFace.x -= typeFace.speed;

  if (typeFace.x > 10 + typeFace.speed){
    return true;
  }
  else {
    return false;
  }
}

function canGoRight(){
  typeFace.x += typeFace.speed;

   if (typeFace.vx < width - (10+typeFace.speed)){
    return true;
  }
  else {
    return false;
  }
}

function canGoUp(){
  typeFace.y -= typeFace.speed;

 if (typeFace.y > 10 + typeFace.speed){
    return true;
  }
  else {
    return false;
  }
}

function canGoDown(){
  typeFace.y += typeFace.speed;

  if (typeFace.y < height - (10+typeFace.speed)){
    return true;
  }
  else {
    return false;
  }
}


// ========== TYPEFACE ========== //

// Key Input
  //A = LEFT
  if (keyIsDown(65)) {
    canGoLeft();
    moveBgRight();
  }
  else if (keyIsDown(68)) {  //D = RIGHT
    canGoRight();
    moveBgLeft();
  }
  // else {
  //   typeFace.vx = 0;       //Pressing nothing
  // }

  else if (keyIsDown(87)) {      //W = UP
    canGoUp();
    moveBgDown();
  }
  else if (keyIsDown(83)) { //S = DOWN
    canGoDown();
    moveBgUp();
  }
  // else {
  //   typeFace.vy = 0;        //Pressing nothing
  // }



// Movement
  // Left
  // typeFace.x -= typeFace.speed;
  // // Right
  // typeFace.x += typeFace.speed;
  // // Up
  // typeFace.y += typeFace.speed;
  // //  Down
  // typeFace.y -= typeFace.speed;

// Display
  image(typeFaceImg, typeFace.x,typeFace.y,typeFace.size,typeFace.size);

  }
