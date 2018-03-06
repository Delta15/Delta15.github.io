let gameOpening;

function setup() {
  createCanvas(windowWidth, windowHeight);
  gameOpening = true;
}

function draw() {
  background(255);
  gameScreen();
}

function gameScreen(){
  fill(0);
  noStroke();
  rectMode(CENTER);
  rect(width/2,height/2,windowWidth,200);
}
