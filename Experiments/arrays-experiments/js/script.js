"use strict";

/**************************************************
Week 6: Arrays
Melissa Banoen-Garde

Experimenting with arrays.
**************************************************/

let barkSFX;

function setup() {
  createCanvas(600, 600);
  barkSFX = loadSound(assets/sounds/bark.wav);
}

function draw() {
  background(0);
  noStroke();

  c.x = mouseX;
  c.y = mouseY;

  for (let i = 0; i < c.trail.length; i++) {
    let position = c.trail[i];
    ellipse(position.x, position.y, c.size);
  }

  ellipse(c.x, c.y, c.size);

  let newTrailPosition = {
    x: c.x,
    y: c.y,
  };

  c.trail.push(newTrailPosition);

  if (c.trail.length > c.trailSize){
    c.trail.shift();
  }
}
