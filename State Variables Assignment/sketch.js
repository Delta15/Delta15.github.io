let gameOpening;

function setup() {
  createCanvas(windowWidth, windowHeight);
  gameOpening = true;
}

function draw() {
  gameScreen();
}

function gameScreen(){
  background(255);
  fill(0);
  noStroke();
  rectMode(CENTER);
  rect(width/2,height/2,windowWidth,200);
  fill(255);
  textFont("Impact");
  textAlign(CENTER);
  textSize(100);
  text("WELCOME",width/2,height/2);
  textAlign(BOTTOM);
  textSize(30);
  text("Press any key to start",width/2,height/2);
}
