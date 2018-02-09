function setup() {
  createCanvas(windowWidth, windowHeight);
  document.addEventListener("contextmenu", event => event.preventDefault());
}

function draw() {

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

function keyPressed(){
  if (key === "e" || key === "E"){
    background(255);
  }
}

function deviceShaken(){
  rect(,y,w,h,[tl],[tr],[br],[bl])
}
