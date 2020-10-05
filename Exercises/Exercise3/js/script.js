/**************************************************
Exercise 03: Love, Actually
Melissa Banoen-Garde

WEEK 05: FUNCTIONS
CART 253 - B
OCT. 2020

Source:
Moving background: https://editor.p5js.org/chjno/sketches/ByZlypKWM
**************************************************/

// Variables
let bg;
let bgLeft = 0;
let bgRight = 800;
let bgSpeed = 3;

function preload() {
  bg = loadImage('assets/images/bg.png');
}


function setup() {
  createCanvas(800,500);



}

function draw() {

  scrollingBackground();

}

function scrollingBackground(){
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



// IDEA: image(CORNER)????
// The default mode is imageMode(CORNER), which interprets the second and
// third parameters of image() as the upper-left corner of the image.
// If two additional parameters are specified, they are used to set the image's
// width and height.   image(img, x, y, [width], [height])
