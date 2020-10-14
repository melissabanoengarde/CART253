"use strict"
/**************************************************
 Project 01: Simulation 

 A Typeface's Story
 Melissa Banoen-Garde
 CART 253 - B

 In order to win the game, you will need to make your
 way back to the "font folder", through malware-infected
 windows.

 Reference for 'interactive' background:
 https://www.youtube.com/watch?v=q_pDcE9nyfY&t=353s&ab_channel=JaredDonovan
**************************************************/

//Variables
let bg;
let bgLeft = -1272; // Bg's beginning x-value
let bgUp = -280; // Bg's beginning y-value
let bgSpeed = 4;

let myFont;
let titleImg;
let windowExample;
let loseImg;
let winImg;

let winSound;
let loseSound;
let gameTrack;

let typeFaceImg;
let typeFace = {
  x: 950,
  y: 520,
  size: 45,
  vx: 0,
  vy: 0,
  speed: 5,
};

let fontFolderImg;
let fontFolder = {
  x: 0,
  y: 0,
  size: 55,
};

let minesweeperImg;
let minesweeper = {
  x: 275,
  y: 305,
  size: 200,
  vx: 0,
  vy: 0,
  speed: 0,
};

let calculatorImg;
let calculator = {
  x: 40,
  y: 170,
  size: 300,
  vx: 0,
  vy: 0,
  speed: 0,
};

let cdPlayerImg;
let cdPlayer = {
  x: 325,
  y: 290,
  size: 300,
  vx: 0,
  vy: 0,
  speed: 0,
};

let paintImg;
let paint = {
  x: 0,
  y: 0,
  size: 480,
  vx: 0,
  vy: 0,
  speed: 0,
};

let fontColor = {
  r: 0,
  g: 0,
  b: 0
};

let state = `title`;

function preload() {
  bg = loadImage("assets/images/bg.jpg");
  titleImg = loadImage('assets/images/titleimage.jpg');
  windowExample = loadImage('assets/images/windowexample.png');
  loseImg = loadImage('assets/images/lossimage.jpg');
  winImg = loadImage('assets/images/winimage.png');

  myFont = loadFont('assets/fonts/px_sans_nouveaux.ttf');
  winSound = loadSound('assets/sounds/TADA.wav');
  loseSound = loadSound('assets/sounds/errorsoundcropped.mp3');
  gameTrack = loadSound('assets/sounds/cropped.mp3');

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
  textFont(myFont);
}


function typeFaceSetup() {
  typeFace.vx = typeFace.speed;
  typeFace.vy = typeFace.speed;
}


function draw() {
  if (state === `title`) {
    title();
  } else if (state === `simulation`) {
    simulation();
    obstaclesOffScreen()
  } else if (state === `win`) {
    win();
  } else if (state === `lose`) {
    lose();
  }
}


function keyPressed() {
  if (state === `title`) {
    state = `simulation`;
    gameTrack.play();
  }
}


function title() {
  let exampleSize = 50;
  let objective = `OBJECTIVE – You must reach your designated folder at once!`;
  let warning = `TO AVOID – Beware of malware-infected windows for you'll turn into a damaged file.`
  let startSign = `Press any key to being`;

  push();
  imageMode(CENTER);
  image(titleImg, width / 2, height / 2);
  image(windowExample, width - 118, (height / 3) + 70, exampleSize, exampleSize);
  image(fontFolderImg, width - 260, (height / 4) + 40, exampleSize, exampleSize);

  textSize(40);
  fill(0, 0, 255);
  textAlign(CENTER, CENTER);
  text(`A Typeface's Story`, (width / 2) + 60, height / 13);

  textSize(10);
  fill(0);
  textAlign(LEFT);
  text(objective, (width / 3) - 20, (height / 7) + 100);
  text(warning, (width / 3) - 20, (height / 7) + 180);

  funkyStart();
  fill(fontColor.r, fontColor.g, fontColor.b);
  text(startSign, (width / 3) - 20, (height / 2) + 30);
  pop();
}


//When user's wins...
function win() {
  let imgWinWidth = 400;
  let imgWinHeight = 350;
  let winText = `You've succesfully reached the folder!`;

  imageMode(CENTER);
  image(winImg, width / 2, height / 2, imgWinWidth, imgWinHeight);

  fill(0);
  textSize(14);
  textAlign(CENTER, CENTER);
  text(winText, width / 2, (height / 2) - 10);
}


//When user loses...
function lose() {
  let imgWidth = 400;
  let imgHeight = 150;
  let loseText = `File "player.ttf" is now damaged.`;

  imageMode(CENTER);
  image(loseImg, width / 2, height / 2, imgWidth, imgHeight);
  textSize(13);
  fill(0)
  textAlign(CENTER, CENTER);
  text(loseText, (width / 2) + 18, (height / 2) - 17);
  textSize(10);
  text(`:-(`, (width / 2), (height / 2) + 40);
}


//"Press any key to begin"'s flashy colors'
function funkyStart() {
  fontColor.r = random(150, 255);
  fontColor.g = random(160, 255);
  fontColor.b = random(0, 255);
}

function simulation() {
  obstaclesMove();
  obstaclesOffScreen();
  handleInput();
  typeFaceMove();
  overLap();
  elementsDisplay();
}

//Window Obstacles
let obstaclesAreOutScreen = obstaclesOffScreen();
  if (obstaclesAreOutScreen) {
    paintReset();
    cdPlayerReset();
    calculatorReset();
    minesweeperReset();
  }


//When the window obstacles are offscreen
function obstaclesOffScreen() {
  let obstaclesResult = (paint.x < 0 || paint.x > 1200 || paint.y < 0 || paint.y > 600 ||
    cdPlayer.x < 0 || cdPlayer.x > 1200 || cdPlayer.y < 0 || cdPlayer.y > 600 ||
    calculator.x < 0 || calculator.x > 1200 || calculator.y < 0 || calculator.y > 600 ||
    minesweeper.x < 0 || minesweeper.x > 1200 || minesweeper.y < 0 || minesweeper.y > 600);
  return obstaclesResult;
}


//Window obstacle movements
function obstaclesMove() {
  // paint window
  paint.x -= paint.vx;
  paint.y += paint.vy;

  // cdPlayer window
  cdPlayer.x += cdPlayer.vx;
  cdPlayer.y += cdPlayer.vy;

  // calculator window
  calculator.x += calculator.vx;
  calculator.y += calculator.vy;

  //minesweeper window
  minesweeper.x += minesweeper.vx;
  minesweeper.y += minesweeper.vy;
}


//Specifics of window obstacles' reset
function paintReset() {
  paint.x = 140;
  paint.y = 425;
  paint.vx = random(-3, -1);
  paint.vy = random(-3, -1);
}

function cdPlayerReset() {
  cdPlayer.x = 325;
  cdPlayer.y = 290;
  cdPlayer.vx = random(-1, 2);
  cdPlayer.vy = random(-1, 2);
}

function calculatorReset() {
  calculator.x = 40;
  calculator.y = 170;
  calculator.vx = random(-1, 2);
  calculator.vy = random(-1, 2);
}

function minesweeperReset() {
  minesweeper.x = 275;
  minesweeper.y = 305;
  minesweeper.vx = random(-1, 1);
  minesweeper.vy = random(-1, 1);
}


//Typface's key-input
function handleInput() {
  image(bg, bgLeft, bgUp);

  if (keyIsDown(65)) { //A = LEFT
    canGoLeft();
    moveBgRight();
  } else if (keyIsDown(68)) { //D = RIGHT
    canGoRight();
    moveBgLeft();
  } else {
    haltXValue(); //Pressing nothing
  }

  if (keyIsDown(87)) { //W = UP
    canGoUp();
    moveBgDown();
  } else if (keyIsDown(83)) { //S = DOWN
    canGoDown();
    moveBgUp();
  } else {
    haltYValue(); //Pressing nothing
  }
}

//Typeface's movements
function canGoLeft() {
  typeFace.vx = -typeFace.speed;
}

function canGoRight() {
  typeFace.vx = typeFace.speed;
}

function canGoUp() {
  typeFace.vy = -typeFace.speed;
}

function canGoDown() {
  typeFace.vy = typeFace.speed;
}

function haltXValue() {
  typeFace.vx = 0;
}

function haltYValue() {
  typeFace.vy = 0;
}

function typeFaceMove() {
  typeFace.x += typeFace.vx;
  typeFace.y += typeFace.vy;
}


//Background corresponding movements
function moveBgLeft() {
  let minBgLeft = -bg.width + width;

  if (bgLeft - typeFace.speed > minBgLeft) {
    bgLeft -= typeFace.speed + bgSpeed;
  }
}

function moveBgRight() {
  if (bgLeft + typeFace.speed < 0) {
    bgLeft += typeFace.speed + bgSpeed;
  }
}

function moveBgUp() {
  let minBgUp = -bg.height + height;

  if (bgUp - typeFace.speed > minBgUp) {
    bgUp -= typeFace.speed + bgSpeed;
  }
}

function moveBgDown() {
  if (bgUp + typeFace.speed < 0) {
    bgUp += typeFace.speed + bgSpeed;
  }
}

//What determines whether the user wins or lose based on which object typeFace touches
function overLap() {
  let folderXvalue = bgLeft + 35;
  let folderYvalue = bgUp + 171;

  let d = dist(typeFace.x, typeFace.y, folderXvalue, folderYvalue);
  let d2 = dist(typeFace.x, typeFace.y, minesweeper.x, minesweeper.y);
  let d3 = dist(typeFace.x, typeFace.y, calculator.x, calculator.y);
  let d4 = dist(typeFace.x, typeFace.y, cdPlayer.x, cdPlayer.y);
  let d5 = dist(typeFace.x, typeFace.y, paint.x, paint.y);

  //win
  if (d < typeFace.size / 3 + fontFolder.size / 3) {
    state = `win`;
    winSound.play();
    gameTrack.stop();
  }

  //lose
  if (d2 < typeFace.size / 2 + minesweeper.size / 2.5 || d3 < typeFace.size / 2.3 + calculator.size / 2.3||
    d4 < typeFace.size / 2.5 + cdPlayer.size / 2.5 || d5 < typeFace.size / 2.5 + paint.size / 2.5) {
    loseSound.play();
    state = `lose`;
    gameTrack.stop();
  }
}


// Display
function elementsDisplay() {
  let folderXvalue = bgLeft + 35;
  let folderYvalue = bgUp + 171;
  let redAlphaValue = 70;

  image(typeFaceImg, typeFace.x, typeFace.y, typeFace.size, typeFace.size);
  image(fontFolderImg, folderXvalue, folderYvalue, fontFolder.size, fontFolder.size);

  fill(255, 0, 0, redAlphaValue);

  push();
  imageMode(CENTER);
  rectMode(CENTER);
  //Minesweeper
  image(minesweeperImg, minesweeper.x, minesweeper.y, minesweeper.size, minesweeper.size);
  rect(minesweeper.x, minesweeper.y, minesweeper.size, minesweeper.size);

  //Calculator
  image(calculatorImg, calculator.x, calculator.y, calculator.size, calculator.size);
  rect(calculator.x, calculator.y, calculator.size, calculator.size);

  //cdPlayer
  image(cdPlayerImg, cdPlayer.x, cdPlayer.y, cdPlayer.size, cdPlayer.size);
  rect(cdPlayer.x, cdPlayer.y, cdPlayer.size, cdPlayer.size);

  //Paint
  image(paintImg, paint.x, paint.y, paint.size, paint.size);
  rect(paint.x, paint.y, paint.size, paint.size);
  pop();
}
