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

let myFont;

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

let minesweeperImg;
let minesweeper = {
  x: 0,
  y:0,
  w:200,
  h:300,
  vx: 0,
  vy: 0,
  speed: 0,
};

let calculatorImg;
let calculator = {
  x:0,
  y:0,
  size:300,
  vx: 0,
  vy:0,
  speed: 0,
};

let cdPlayerImg;
let cdPlayer = {
  x:0,
  y:0,
  w: 300,
  h: 200,
  vx: 0,
  vy:0,
  speed: 0,
};

let paintImg;
let paint = {
  x:0,
  y:0,
  size:480,
  vx: 0,
  vy:0,
  speed: 0,
};

let state = `title`;

function preload (){
  bg = loadImage("assets/images/bg.jpg");
  myFont = loadFont ('assets/fonts/px_sans_nouveaux.ttf');
  typeFaceImg = loadImage("assets/images/typeFace.png");
  fontFolderImg = loadImage("assets/images/fontfolder.png");
  minesweeperImg = loadImage("assets/images/minesweeper.png");
  calculatorImg = loadImage("assets/images/calculator.png");
  cdPlayerImg = loadImage("assets/images/CDPlayer.png");
  paintImg = loadImage("assets/images/paint.png");
}


function setup() {
  createCanvas(1000, 600);

  typeFaceSetup();
  paintReset();
  cdPlayerReset();
  calculatorReset();
  minesweeperReset();
}

function typeFaceSetup(){
  typeFace.vx = typeFace.speed;
  typeFace.vy = typeFace.speed;
}

function paintReset(){
  paint.x = width/3;
  paint.y = -50;
  paint.vx = random(-2, 1);
  paint.vy = random(-2, 1);
}

function cdPlayerReset() {
  cdPlayer.x = width;
  cdPlayer.y = -50;
  cdPlayer.vx = random(1, 4);
  cdPlayer.vy = random(1, 4);
}

function calculatorReset() {
  calculator.x = width/2;
  calculator.y = height;
  calculator.vx = random(-2, 3);
  calculator.vy = random(-2, 3);
}

function minesweeperReset() {
  minesweeper.x = -200;
  minesweeper.y = 200;
  minesweeper.vx = random(2, 10);
  minesweeper.vy = random(2, 10);
}


function draw() {
  if (state === `title`) {
    title();
  } else if (state === `simulation`) {
    simulation();
  } else if (state === `win`) {
    win();
  } else if (state === `lose`) {
    lose();
  }
}

function keyPressed() {
  if (state === `title`) {
    state = `simulation`;
    }
  }

function title() {
  stroke(0);
  strokeWeight(2);
  textFont(myFont);
  textSize(70);
  textAlign(CENTER, CENTER);
  text(`A Font's Life`, width / 2, height / 2);   //change title name
}

function simulation() {

  obstaclesMove();
  handleInput();
  typeFaceMove();
  overLap();
  elementsDisplay();

}

//When user's wins...
function win() {
  push();
  fill(255, 219, 88);
  textFont(myFont);
  textSize(80);
  textAlign(CENTER, CENTER);
  text(`- Phew! We made it! -`, width / 2, height / 2);
  pop();
}

//When user loses...
function lose() {
  push();
  stroke(0);
  strokeWeight(8);
  textFont(myFont);
  textSize(80);
  fill(255, 0,0);
  textAlign(CENTER, CENTER);
  text(`- This font is now corrupt. -`, width / 2, height / 2);
  pop();
}

function obstaclesMove(){
  // paint window
  paint.x +=  paint.vx;
  paint.y +=  paint.vy;

  // cdPlayer window
  cdPlayer.x +=  cdPlayer.vx;
  cdPlayer.y +=  cdPlayer.vy;

  // calculaor window
  calculator.x +=  calculator.vx;
  calculator.y +=  calculator.vy;

  //minesweeper window
  minesweeper.x +=  minesweeper.vx;
  minesweeper.y +=  minesweeper.vy;
}

//=========  paint ===================================
let paintOutScreen = paintOffScreen();
  if (paintOutScreen){
    paintReset();
  }

function paintOffScreen(){
  let paintResult = (paint.x < -1272 || paint.x > 1000 || paint.y < -280 || paint.y > 600);
  return paintResult;
}

//=========  cdPlayer =================================
let cdplOffScreen = cdPlayerOffScreen();
  if (cdplOffScreen){
    cdPlayerReset();
  }

function cdPlayerOffScreen(){
  let cdPlayerResult = (cdPlayer.x < -1272 || cdPlayer.x > 1000 || cdPlayer.y < -280 || cdPlayer.y > 600);
  return cdPlayerResult;
}

//=========  Calculator ===============================
let calcOffScreen = calculatorOffScreen();
  if (calcOffScreen){
    calculatorReset();
  }

function calculatorOffScreen(){
  let calcResult = (calculator.x < -1272 || calculator.x > 1000|| calculator.y < -280 || calculator.y > 600);
  return calcResult;
}

//=========  Minesweeper ===============================
let offScreen = minesweeperOffScreen();
  if (offScreen){
    minesweeperReset();
  }

function minesweeperOffScreen(){
  let result = (minesweeper.x < -1272 || minesweeper.x > 1000|| minesweeper.y < -280 || minesweeper.y > 600);
  return result;
}

//========= TYPE FACE ===================================
function handleInput() {
  image(bg, bgLeft, bgUp);

  if (keyIsDown(65)) {        //A = LEFT
    canGoLeft();
    moveBgRight();
  }
  else if (keyIsDown(68)) {  //D = RIGHT
    canGoRight();
    moveBgLeft();
  }
  else {
    haltXValue();            //Pressing nothing
  }

  if (keyIsDown(87)) {       //W = UP
    canGoUp();
    moveBgDown();
  }
  else if (keyIsDown(83)) {   //S = DOWN
    canGoDown();
    moveBgUp();
  }
  else {
    haltYValue();    //Pressing nothing
  }

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

function typeFaceMove(){
  typeFace.x += typeFace.vx;
  typeFace.y += typeFace.vy;
}


/*=========  Background Movement ========================*/
function moveBgLeft(){
  let minBgLeft = -bg.width + width;

  if (bgLeft - typeFace.speed > minBgLeft){
    bgLeft -= typeFace.speed + bgSpeed;
  }
}

function moveBgRight(){
  if (bgLeft + typeFace.speed < 0){
    bgLeft += typeFace.speed + bgSpeed;
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


function overLap(){
  let folderXvalue = bgLeft + 35;
  let folderYvalue = bgUp + 171;

  let d = dist(typeFace.x, typeFace.y, folderXvalue, folderYvalue);
  let d2 = dist (typeFace.x, typeFace.y, minesweeper.x, minesweeper.y);
  let d3 = dist (typeFace.x, typeFace.y, calculator.x, calculator.y);
  let d4 = dist (typeFace.x, typeFace.y, cdPlayer.x, cdPlayer.y);
  let d5 = dist (typeFace.x, typeFace.y, paint.x, paint.y);

  //win
    if (d < typeFace.size / 3 + fontFolder.size / 3) {
      state = `win`;
    }

  //lose
    if (d2 < typeFace.size / 2 + minesweeper.w / 2 || d2 < typeFace.size / 2 + minesweeper.h / 2
          || d3 < typeFace.size/2 + calculator.size/2 || d4 < typeFace.size/2 + cdPlayer.w /2
            || d4 < typeFace.size/2 + cdPlayer.h /2 || d5 < typeFace.size/2 + paint.w /2
              || d5 < typeFace.size/2 + paint.h /2) {
                fill(0);
                ellipse(width/2, height/2, 200);
                // state = `lose`;
              }
}

function elementsDisplay() {
  let folderXvalue = bgLeft + 35;
  let folderYvalue = bgUp + 171;

  image(typeFaceImg, typeFace.x,typeFace.y,typeFace.size,typeFace.size);
  image(fontFolderImg, folderXvalue, folderYvalue , fontFolder.size, fontFolder.size);

  fill(255,0,0,70);

  //Minesweeper
  image(minesweeperImg, minesweeper.x, minesweeper.y, minesweeper.w, minesweeper.h);
  rect(minesweeper.x,minesweeper.y,minesweeper.w,minesweeper.h);

  //Calculator
  image(calculatorImg, calculator.x, calculator.y, calculator.size, calculator.size);
  rect(calculator.x,calculator.y,calculator.size, calculator.size);

  //cdPlayer
  image(cdPlayerImg, cdPlayer.x, cdPlayer.y, cdPlayer.w, cdPlayer.h);
  rect(cdPlayer.x,cdPlayer.y,cdPlayer.w, cdPlayer.h);

  //Paint
  image(paintImg, paint.x, paint.y, paint.size, paint.size);
  rect(paint.x,paint.y, paint.size, paint.size);
}



// console.log("typeFace.x is " + typeFace.x);
console.log(minesweeper.x);
