let x;
let y;

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(255);
  move();
  display();
}

function move() {

}

function display() {
  ellipse(mouseX, mouseY, 20, 20);
}
