let fr = 60;
let time = 0;

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  document.addEventListener("contextmenu", event => event.preventDefault());
}

function draw() {
  frameRate(fr);
  background(0)
  // background(random(255), random(255), random(255), random(255));
  noStroke();
  // fill(random(255), random(255), random(255), random(255));
  fill(255,105,180);
  rotateY(millis() / 900);
  rotateX(millis() / 900);
  box(300, 300);
}

function mouseClicked(){
  if (mouseButton == LEFT){
    noStroke();
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
