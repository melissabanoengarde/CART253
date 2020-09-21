/**************************************************
E1: I like to move it!
Melissa Banoen-Garde
CART 253 - B
You (your cursor) are a fairy visiting trapped moths
**************************************************/
//Variables
let jar = {
  x:195,
  y:200,
  w:110,
  h:170,
  tlr:30,   //top left radius
  trr:30,   //top right radius
  brr:20,   //bottom right radius
  blr:20,   //bottom left radius
  fill:255,
  alpha:100

};
let lid = {

x:198,
y:200,
w:103,
h:10,
rad:90,
r:102,
g:102,
b:153

};
let fairy = {



};



// setup()
//
// Description of setup() goes here.
function setup() {
  createCanvas(500,500);


}

// draw()
//
// Description of draw() goes here.
function draw() {
  background(49, 49, 104);

//Jar
  strokeWeight(3);
  stroke(0,30);
  fill(jar.fill,jar.alpha);
  rect(jar.x,jar.y,jar.w,jar.h,jar.tlr,jar.trr,jar.brr,jar.blr);

//Lid
  stroke(0,10);
  fill(lid.r,lid.g,lid.b);
  rect(lid.x,lid.y,lid.w,lid.h,lid.r);
  rect(lid.x,lid.y - 10,lid.w,lid.h,lid.r);
  rect(lid.x,lid.y - 20,lid.w,lid.h,lid.r);
  noStroke();

//Fairy


}
