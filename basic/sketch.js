// basic interaction demo

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {

}

function keyPressed() {
  noStroke();
  fill(random(255), random(255), random(255), random(255));
  ellipse(random(0, width), random(0, height), random(50, 200), random(50, 200));
}

function mouseClicked() {
  noStroke();
  fill(random(255), random(255), random(255), random(255));
  rect(mouseX, mouseY, random(50, 200), random(50, 200));
}

function deviceShaken() {
  fill(0);
  textFont("Arial");
  textAlign(CENTER);
  textSize(40);
  text("Text Sample", random(width), random(height));

}
