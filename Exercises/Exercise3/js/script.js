/**************************************************
Exercise 03: Love, Actually
Melissa Banoen-Garde

WEEK 05: FUNCTIONS
CART 253 - B
OCT. 2020
**************************************************/

// Variables
let beeImg;
  let bee = {
    x:400,
    y:250,
    size:100,
    vx:0,
    vy:0,
    speed: 5,
    img: beeImg
  };

let bird1Img;
  let bird1 = {
    x:20,
    y:200,
    size:100,
    vx:0,
    vy:0,
    speed:4.5,
    img: bird1Img
  }

let bird2Img;
  let bird2 = {
    x:50,
    y:300,
    size:100,
    vx:0,
    vy:0,
    speed:4.5,
    img: bird2Img
  }

let bird3Img;
  let bird3 = {
    x:30,
    y:100,
    size:100,
    vx:0,
    vy:0,
    speed:4.5,
    img: bird3Img
  }

let bird4Img;
  let bird4 = {
      x:20,
      y:250,
      size:100,
      vx:0,
      vy:0,
      speed:5,
      img: bird4Img
    }

let bg;
let bgLeft = 0;
let bgRight = 800;
let bgSpeed = 3;


function preload() {
  bg = loadImage('assets/images/bg.png');
  beeImg = loadImage('assets/images/bee.png');
  bird1Img = loadImage('assets/images/bird1.png');
  bird2Img = loadImage('assets/images/bird2.png');
  bird3Img = loadImage('assets/images/bird3.png');
  bird4Img = loadImage('assets/images/bird4.png');
}


function setup() {
  createCanvas(800,500);

  setupBirds();
}

function setupBirds(){
  bird1.vx = random(0.02, bird1.speed);
  bird2.vx = random(0.5, bird2.speed);
  bird3.vx = random(0.8, bird3.speed);
  bird4.vx = random(0.8, bird4.speed);
}

function draw() {

  beeMove();
  birdsMove();
  handleInput();
  scrollingBackground();    //remember, order MATTERS
  display();

// Bee's key info (AWSD)
 function handleInput(){
   // Bee movements
   if (keyIsDown(65)){
         bee.vx = -bee.speed;
       }

     else if (keyIsDown(68)){
         bee.vx = bee.speed;
       }

     else {
         bee.vx = 0;
       }

   if (keyIsDown(87)){
        bee.vy = -bee.speed;
       }

     else if (keyIsDown(83)){
        bee.vy = bee.speed;
      }

      else {
         bee.vy = 0;
       }
 }


 function beeMove() {
   bee.x += bee.vx;
   bee.y += bee.vy;
 }

 function birdsMove(){
   // Bird 1
   bird1.x += bird1.vx;
   bird1.y += bird1.vy;

   // Bird 2
   bird2.x += bird2.vx;
   bird2.y += bird2.vy;

   // Bird 3
   bird3.x += bird3.vx;
   bird3.y += bird3.vy;

   // Bird 4
   bird4.x += bird4.vx;
   bird4.y += bird4.vy;
 }


 function scrollingBackground() {
  // Background Scrolling
  imageMode(CORNER);
  image(bg,bgLeft,0,width,height);      // Left
  image(bg,bgRight,0,width,height);     // Right

  bgLeft -= bgSpeed;
  bgRight -= bgSpeed;

  if (bgLeft < -width) {
    bgLeft = bgRight + width;
  }
  if (bgRight < -width) {
    bgRight = bgLeft -bgRight;
  }
}


 function display(){
   image(beeImg, bee.x, bee.y, bee.size,bee.size);
   image(bird1Img, bird1.x, bird1.y, bird1.size,bird1.size);
   image(bird2Img, bird2.x, bird2.y, bird2.size,bird2.size);
   image(bird3Img, bird3.x, bird3.y, bird3.size,bird3.size);
   image(bird4Img, bird4.x, bird4.y, bird4.size,bird4.size);
 }

}
