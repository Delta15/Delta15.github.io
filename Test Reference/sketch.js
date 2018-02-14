function setup() {
  createCanvas(100, 100, WEBGL);
}
function draw() {
  background(255);
  rotateY(millis() / 1000);
  box();
}
