function setup() {
  createCanvas(windowWidth, windowHeight);
  noStroke();
}

function draw() {
  background(0);
  let theLevel = int(map(mouseX, 0, width,1,8));
  drawC(width/2, width/2, theLevel);
}

function drawC(x, radius, level){
  let fillColor = 125;
  fill(fillColor, 200 + level/4);
  ellipse(x, height/2, radius*2, radius*2);
  if (level > 1) {
    level = level - 1;
    drawC(x - radius/2, radius/2, level);
    drawC(x + radius/2, radius/2, level);
  }
}
