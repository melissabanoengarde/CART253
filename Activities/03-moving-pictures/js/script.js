/**************************************************
Activity 03: Moving Pictures
CART 253-B
Melissa Banoen-Garde

Programming moving pictures, referring to video
"03-8 - Moving Pictures" posted on Moodle and
"Activity 03: Moving Pictures" lecture notes, provided
by Pippin Barr.
**************************************************/

let bg ={
  r:0,
  g:0,
  b:0
};

let circleL ={
  x:0,
  y:250,
  size:100,
  growthRate:1,
  speed:1,
  fill:255,
  alpha:200

};

let circleR ={
  x:700,
  y: 250,
  size:75,
  sizeRatio: 0.75,
  speed:-1,
  fill:255,
  alpha:200

};

// setup()
//
// Description of setup() goes here.
function setup() {
  createCanvas(500,500);
  noStroke();
  circleL.y = height/2;
  circleR.x = width;
  circleR.y = height/2;

}

// draw()
//
// Description of draw() goes here.
function draw() {
  //Background
  background(bg.r, bg.g, bg.g);
  bg.r = map(circleL.size,100,width,0,255);

  //Left Circle
  circleL.x = circleL.x + circleL.speed;
  circleL.x = constrain(circleL.x,0,width/2);
  circleL.size = circleL.size + circleL.growthRate;
  circleL.size = constrain(circleL.size,0,width);
  fill(circleL.fill,circleL.alpha);
  ellipse(circleL.x,circleL.y,circleL.size);


  //Right Circle
  circleR.x = circleR.x + circleR.speed;      //'add' a negative 1
  circleR.x = constrain(circleR.x,width/2,width);
  circleR.size = circleL.size * circleR.sizeRatio;    //cool!!
  fill(circleR.fill,circleR.alpha);
  ellipse(circleR.x,circleR.y,circleR.size);



}
