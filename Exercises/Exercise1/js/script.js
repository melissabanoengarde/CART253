/**************************************************
E1: I like to move it!
Melissa Banoen-Garde
CART 253 - B
You (your cursor) are a fairy visiting trapped moths
**************************************************/
//Variables

let bg = {
r:43,
g:43,
b:104

};

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

let fairycolours = {

r:0,
g:0,
b:0,

};
let fairy = {
  x: 0,
  y: 500,
  size:100,
  colour:255

};

let moth = {

x:250,
y:250,
size:20,
fill:255,
speed:1

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
  background(bg.r,bg.g,bg.b);


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
  fairycolours.r =random(100,255);
  fairycolours.g =random(50,170);
  fairycolours.b =random(200,255);
  fill(fairycolours.r,fairycolours.g,fairycolours.b);

  fairy.size = map(mouseY, height,0,30,100);

  fairy.x = constrain(mouseX,0+50,width-50);
  fairy.y = constrain(mouseY,0+50,height-15);
  ellipse(fairy.x,fairy.y,fairy.size);

//Moth
  moth.x = moth.x + 1
  moth.y = moth.y +1
  fill(moth.fill);
  moth.size = random(5,20);
  moth.x = constrain(moth.x,190,290);
  moth.y = constrain(moth.y,190,360);
  ellipse(moth.x,moth.y,moth.size);






  // reference
  // stroke(255);
  // line(195,0,195,500);
  // line(303,0,303,500);




}
