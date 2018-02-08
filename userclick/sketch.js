//create a sketch to make the following happen:
  //when the user clicks on the sketch with the left mouse button, draw a rectangle there
  //Same thing for the right mouse button

function setup() {
  createCanvas(windowWidth,windowHeight,);
  document.addEventListener("contextmenu", event => event.preventDefault())
}

function draw() {

}
function mouseClicked() {
  if (mouseButton == LEFT){
    noStroke();
    fill(random(255),random(255),random(255),random(255));
    rect(mouseX,mouseY,random(50, 150),random(50, 150));
  }
  else if (mouseButton === RIGHT) {
    ellipse(mouseX, mouseY, random(50, 150), random(50, 150));
  }
}

function keyPressed() {
  if (key === "e" || key === "E") {
    background(255);
  }
  //else if (key === "b" || key === "B")
}
