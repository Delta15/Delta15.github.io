//Clicker
//McRaven Tuazon
//2/15/2018

let fr = 60;
let time = 0;
let endBox = TRUE;

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  document.addEventListener("contextmenu", event => event.preventDefault());
}

function draw() {
  background(255,105,180)
  // background(random(255), random(255), random(255), random(255));
  // fill(random(255), random(255), random(255), random(255));
  noFill();
  stroke(0);
  rotateY(millis() / 800);
  //rotateX(millis() / 900);
  box(300, 300);
  rotateX(millis() / 800);
  box(200, 200);
  rotateZ(millis() / 800);
  box(100, 100);
  fill(255);
  noStroke();
  sphere(40);
}

function mouseClicked(){
  if (mouseButton == LEFT){
    fill(random(255), random(255), random(255), random(255));
    ellipse(mouseX, mouseY, random(50, 200), random(50, 200));
  }
  else if (mouseButton == RIGHT) {
    noStroke();
    fill(random(255),random(255),random(255),random(255));
    rect(mouseX,mouseY,random(50, 150),random(50,150));
  }
}

function keyTyped(){
  if (key === "e" || key === "E"){
    background(255);
  }
}

function deviceShaken(){
  noStroke();
  fill(random(255),random(255),random(255),random(255));
  rect(random(50,100),random(50, 100),random(50, 100),random(50, 100));
}
