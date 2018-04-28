let state = 1;

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
}

function draw() {
  if (state === 1) {
    background(255,0,8);
    inBox();
    midBox();
    MidBoxII();
    outBox();
  }
  else if (state === 2) {
    background(34,0,255);
    inBox();
    midBox();
    MidBoxII();
  }
  else if (state === 3) {
    background(0,255,51);
    inBox();
    midBox();
  }
  else if (state === 4) {
    background(255,255,0);
    inBox();
  }
  else if (state === 5) {
    background(242,0,255);
    inBox();
    midBox();
  }
  else if (state === 6) {
    background(242,0,255);
    inBox();
    midBox();
    MidBoxII();
  }
}

function mouseClicked(){
  if (state === 1) {
    state = 2;
  }
  else if (state === 2) {
    state = 3;
  }
  else if (state === 3) {
    state = 4;
  }
  else if (state === 4) {
    state = 5;
  }
  else if (state === 5) {
    state = 6;
  }
  else if (state === 6) {
    state = 1;
  }
}

function inBox(){
  noFill();
  stroke(255);
  rotateX(millis() / 700);
  box(100, 100);
}

function midBox(){
  noFill();
  stroke(255);
  rotateY(millis() / 700);
  box(150, 150);
}

function MidBoxII(){
  noFill();
  stroke(255);
  rotateZ(millis() / 700);
  box(200, 200);
}

function outBox(){
  noFill();
  stroke(255);
  rotateX(millis() / 700);
  box(300, 300);
}
