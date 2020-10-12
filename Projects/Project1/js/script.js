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
let bgSpeed = 4;

let typeFaceImg;
let typeFace = {
  x:950,
  y:520,
  size: 45,
  vx:0,
  vy:0,
  speed: 5,
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
  fontFolderImg = loadImage("assets/images/fontfolder.png");
}

function setup() {
  createCanvas(1000, 600);

  typeFaceSetup();
}

function typeFaceSetup(){
  typeFace.vx = typeFace.speed;
  typeFace.vy = typeFace.speed;
}


function draw() {
  background(0);
  image(bg,bgLeft,bgUp);


//=========  Background Movement ========================//
function moveBgLeft(){
  let minBgLeft = -bg.width + width;

  if (bgLeft - typeFace.speed > minBgLeft){
    bgLeft -= typeFace.speed + bgSpeed;
  }
}

function moveBgRight(){
  if (bgLeft + typeFace.speed < 0){
    bgLeft += typeFace.speed +bgSpeed;
  }
}

function moveBgUp(){
  let minBgUp = -bg.height + height;

    if (bgUp - typeFace.speed > minBgUp) {
      bgUp -= typeFace.speed + bgSpeed;
    }
  }

function moveBgDown(){
  if (bgUp + typeFace.speed < 0) {
    bgUp += typeFace.speed + bgSpeed;
  }
}

//========= TYPE FACE ===================================//
//========== Handle Input ==========//

  if (keyIsDown(65)) {    //A = LEFT
    canGoLeft();
    moveBgRight();
  }
  else if (keyIsDown(68)) {  //D = RIGHT
    canGoRight();
    moveBgLeft();
  }
  else {
    haltXValue();      //Pressing nothing
  }

  if (keyIsDown(87)) {      //W = UP
    canGoUp();
    moveBgDown();
  }
  else if (keyIsDown(83)) { //S = DOWN
    canGoDown();
    moveBgUp();
  }
  else {
    haltYValue();    //Pressing nothing
  }

//========== canGo's ==========//
  function canGoLeft(){
    typeFace.vx = -typeFace.speed;
  }

  function canGoRight(){
    typeFace.vx = typeFace.speed;
  }

  function canGoUp(){
    typeFace.vy = -typeFace.speed;
  }

  function canGoDown(){
    typeFace.vy = typeFace.speed;
  }

  function haltXValue() {
    typeFace.vx = 0;
  }

  function haltYValue(){
    typeFace.vy = 0;
  }

// Movement
  typeFace.x += typeFace.vx;
  typeFace.y += typeFace.vy;

// Display
  image(typeFaceImg, typeFace.x,typeFace.y,typeFace.size,typeFace.size);
  image(fontFolderImg, fontFolder.x, fontFolder.y,fontFolder.size, fontFolder.size);
}



// console.log("typeFace.x is " + typeFace.x);
console.log("fontFolderImg " +fontFolderImg);
