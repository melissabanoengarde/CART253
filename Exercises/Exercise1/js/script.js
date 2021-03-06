/**************************************************
E1: I like to move it!
Melissa Banoen-Garde
CART 253 - B
You (your cursor) are a fairy visiting trapped moths
**************************************************/
//Variables

let bg = {
  r: 43,
  g: 43,
  b: 104

};

let jar = {
  x: 195,
  y: 200,
  w: 110,
  h: 170,
  tlr: 30, //top left radius
  trr: 30, //top right radius
  brr: 20, //bottom right radius
  blr: 20, //bottom left radius
  fill: 255,
  alpha: 100

};

let lid = {

  x: 198,
  y: 200,
  w: 103,
  h: 10,
  rad: 90,
  r: 102,
  g: 102,
  b: 153

};

let fairycolours = {

  r: 0,
  g: 0,
  b: 0,

};

let fairy = {
  x: 0,
  y: 500,
  size: 120,
  colour: 255

};

let moth1 = {

  x: 250,
  y: 250,
  size: 30,
  fill: 255,
  speed: 1,
  alpha: 100

};

let moth2 = {

  x: 280,
  y: 340,
  size: 20,
  fill: 255,
  speed: 1,
  alpha: 150

};



//SETUP()
// Dimensions of my canvas
function setup() {
  createCanvas(500, 500);

}



//DRAW()
//Jar, moths, and fairy.
function draw() {
  background(bg.r, bg.g, bg.b);


  //Jar
  strokeWeight(3);
  stroke(0, 30);
  fill(jar.fill, jar.alpha);
  rect(jar.x, jar.y, jar.w, jar.h, jar.tlr, jar.trr, jar.brr, jar.blr);

  //Lid
  stroke(0, 10);
  fill(lid.r, lid.g, lid.b);
  rect(lid.x, lid.y, lid.w, lid.h, lid.r);
  rect(lid.x, lid.y - 10, lid.w, lid.h, lid.r);
  rect(lid.x, lid.y - 20, lid.w, lid.h, lid.r);
  noStroke();

  //Moth1
  moth1.x = moth1.x + 1
  moth1.y = moth1.y + 1
  fill(moth1.fill, moth1.alpha);
  moth1.size = random(5, 30);
  moth1.x = constrain(moth1.x, 190, 290);
  moth1.y = constrain(moth1.y, 190, 350);
  ellipse(moth1.x, moth1.y, moth1.size);

  //Moth2
  moth2.x = moth2.x - 1
  moth2.y = moth2.y - 1
  fill(moth2.fill, moth2.alpha);
  moth2.size = random(5, 20);
  moth2.x = constrain(moth2.x, 195, 320);
  moth2.y = constrain(moth2.y, 220, 400);
  square(moth2.x, moth2.y, moth2.size, 3);

  //Fairy
  fairycolours.r = random(100, 255);
  fairycolours.g = random(50, 170);
  fairycolours.b = random(200, 255);
  fill(fairycolours.r, fairycolours.g, fairycolours.b);
  fairy.size = map(mouseY, height, 0, 30, 120);   //Size change
  fairy.x = constrain(mouseX, 0 + 50, width - 50);
  fairy.y = constrain(mouseY, 0 + 50, height - 15);
  ellipse(fairy.x, fairy.y, fairy.size);





}
