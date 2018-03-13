let swither;

function setup() {
  createCanvas(windowWidth, windowHeight);
  swither = 1;
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

function keyPressed(){
  if (keyCode === ENTER){
    swither = 2;
  }
}

function gameOpening(){
  background(255);
  push();
  fill(0);
  noStroke();
  rectMode(CENTER);
  rect(width/2,height/2,windowWidth,200);
  fill(255);
  textFont("Impact");
  textAlign(CENTER, CENTER);
  textSize(100);
  text("DROP",width/2,height/2);

  pop();
  textAlign(CENTER,BOTTOM);
  textSize(30);
  text("Press ENTER key to start",width/2, height/2);
}

function gameStart(){
  background(255);
}
