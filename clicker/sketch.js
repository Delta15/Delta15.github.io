//Clicker
//McRaven Tuazon
//2/15/2018
let state = 1;

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);

}

function draw() {
  if (state === 1) {
    background(255,105,180);
    boxStart3();
    boxStart();
    boxStart2();
  }
  else if (state === 2) {
    background(255,0,0);
    boxStart3();
    boxStart2();
  }
  else if (state === 3) {
    background(0,255,0);
    boxStart3();
    boxStart();
  }
  else if (state === 4) {
    background(0,0,255);
    boxStart();
    boxStart2();
  }
}

function boxStart(){
  noFill();
  stroke(0);
  rotateY(millis() / 800);
  box(300, 300);
}

function boxStart2(){
  noFill();
  stroke(0);
  rotateX(millis() / 800);
  box(200, 200);
}

function boxStart3(){
  fill(255);
  stroke(0);
  rotateZ(millis() / 800);
  box(100, 100);
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
    state = 1;
  }
}

function keyTyped(){
  if (key === "e" || key === "E"){
    background(255);
    clear();
  }
}

function deviceShaken(){
  if (state === 1) {
    state = 2;
  }
}
