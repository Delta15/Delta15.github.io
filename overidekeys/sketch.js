let lightSwith;

function setup() {
  createCanvas(windowWidth,windowHeight);
  lightSwith = TRUE;
}

function draw() {
  drawLight();
}

function keyTyped() {
  if (key === ""){
    drawLight = !drawLight;
    return false;
  }
}

function drawLight() {
  if (drawLight === true) {
    fill(255);
  }
  else {
    fill(0)
  }
  rectMode(CENTER);
  rect(width/2, height/2, 200, 200);
}
