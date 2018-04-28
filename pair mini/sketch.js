let state = 1;
function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  if (state === 1) {
    game();
  }
  else if (state === 2) {
    gameII();
  }
}

function game(){
  background(255);
  textDisplay();
  player();
}

function gameII(){
  background(0,0,255);
}

function textDisplay(){
  textAlign(CENTER,CENTER);
  fill(0);
  textSize(100);
  text("SAMPLE",width/2,height/2);
}

function player(){
  ellipse(width/2,height/2,200,200);
  // triangle(width/2,height/2,width/2,height/2);
}
