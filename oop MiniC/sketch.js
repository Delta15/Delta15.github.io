function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(255);
  move();
  display();
}

function move(){
  // if (key === "a" || key ==="B" ) {
  // 
  // }
}

function display(){
  ellipse(mouseX, mouseY, 50, 50);
}
