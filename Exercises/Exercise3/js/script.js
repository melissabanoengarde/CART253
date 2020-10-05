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

function preload() {
  bg = loadImage('assets/images/bg.png');
}


function setup() {
  createCanvas(800,500);
  background(0);

}

function draw() {
  imageMode(CORNER);
  image(bg,100,100,800,500);

}



// IDEA: image(CORNER)????
// The default mode is imageMode(CORNER), which interprets the second and
// third parameters of image() as the upper-left corner of the image.
// If two additional parameters are specified, they are used to set the image's
// width and height.   image(img, x, y, [width], [height])


//https://p5js.org/examples/image-background-image.html (scrolling loop but y-axis)
