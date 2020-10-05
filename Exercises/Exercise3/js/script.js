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
  let bird1; = {
    x:200,
    y:300,
    size:100,
    vx:0,
    vy:0,
    speed: 4.5,
    img: bird1
  }

let bg;
let bgLeft = 0;
let bgRight = 800;
let bgSpeed = 3;


function preload() {
  bg = loadImage('assets/images/bg.png');
  beeImg = loadImage('assets/images/bee.png');
  birdImg = loadImage('assets/images/bird1.png');
}


function setup() {
  createCanvas(800,500);

  setupBirds();
}

function setupBirds(){
  bird1.vx = random(-bird1.speed, bird1.speed);
}

function draw() {

  beeMove();
  birdsMove();
  handleInput();
  scrollingBackground();    //remember, order MATTERS
  display();


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
   bird1.x += bird1.vx;
   bird1.y += bird1.vy;
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
 }

}
