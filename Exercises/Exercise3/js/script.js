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

let bee = {
  x:400,
  y:400,
  size:100,
  vx:0,
  vy:0,
  speed: 2,
  img:'abeille'
};


function preload() {
  bg = loadImage('assets/images/bg.png');
  abeille  = loadImage('assets/images/bee2.png');
}


function setup() {
  createCanvas(800,500);

}

function draw() {
  background(0);

  // scrollingBackground();

  bee.x = bee.x + bee.vx;
  bee.y = bee.y + bee.vy;

  // if (keyIsDown(68)){
  //   bee.vx += bee.speed;
  // }
  // else if (keyIsDown(65)){
  //   bee.vx -= bee.speed;
  // }
  // else {
  //   bee.vx = 0;
  // }

  image(abeille, bee.x, bee.y, bee.size, bee.size);


//  function scrollingBackground(){
//   // Background Scrolling
//   imageMode(CORNER);
//   image(bg,bgLeft,0,width,height);      // Left
//   image(bg,bgRight,0,width,height);     // Right
//
//   bgLeft -= bgSpeed;
//   bgRight -= bgSpeed;
//
//   if (bgLeft < -width) {
//     bgLeft = bgRight + width;
//   }
//   if (bgRight < -width) {
//     bgRight = bgLeft -bgRight;
//   }
// }

}


// IDEA: image(CORNER)????
// The default mode is imageMode(CORNER), which interprets the second and
// third parameters of image() as the upper-left corner of the image.
// If two additional parameters are specified, they are used to set the image's
// width and height.   image(img, x, y, [width], [height])
