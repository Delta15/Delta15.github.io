//Clicker
//McRaven Tuazon
//2/15/2018
let drawBox;
let drawBox2;
let drawBox3;
let drawBox4;

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  drawBox = true;
  drawBox2 = true;
  drawBox3 = true;
  drawBox4 = true;
  document.addEventListener("contextmenu", event => event.preventDefault());
}

function draw() {
  background(255,105,180);
  boxStart3();
  boxStart();
  boxStart2();
}

function boxStart(){
  if (drawBox === true){
    noFill();
    stroke(0);
    rotateY(millis() / 800);
    box(300, 300);
  }
}

function boxStart2(){
  if (drawBox2 === true){
    noFill();
    stroke(0);
    rotateX(millis() / 800)
    box(200, 200);
  }
}

function boxStart3(){
  if (drawBox3 === true){
    noFill();
    stroke(0);
    rotateZ(millis() / 800)
    box(100, 100);
  }
}

function mouseClicked(){
  if (mouseButton == LEFT){
    drawBox = false();
  }
}

function keyTyped(){
  if (key === "e" || key === "E"){
    background(255);
    clear();
  }
}

function deviceShaken(){
  noStroke();
  fill(random(255),random(255),random(255),random(255));
  rect(random(50,100),random(50, 100),random(50, 100),random(50, 100));
}
