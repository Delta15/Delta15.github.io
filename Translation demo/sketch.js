function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(255);
  push();//save
  translate(width/2,height/2);
  rotate(frameCount);
  fill(0);
  rectMode(CENTER);
  rect(0,0,300,50);

  pop();//return
  rectMode(CENTER);
  ellipse(width/2,height/2,500);
}
