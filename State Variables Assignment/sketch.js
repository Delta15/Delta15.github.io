let swither;

function setup() {
  createCanvas(windowWidth, windowHeight);
  swither = 2;
}

function draw() {
  gameScreen();
}

function gameScreen(){
  if (swither===1){
    gameOpening();
  }
  else if (swither === 2) {
    gameStart();
  }
}

function gameOpening(){
  background(255);
  fill(0);
  noStroke();
  rectMode(CENTER);
  rect(width/2,height/2,windowWidth,200);
  fill(255);
  textFont("Impact");
  textAlign(CENTER, CENTER);
  textSize(100);
  text("WELCOME",width/2,height/2);
  textAlign(BOTTOM);
  textSize(30);
  text("Press any key to start",width/2, height/2);
}

function gameStart(){
  background(0);
}
