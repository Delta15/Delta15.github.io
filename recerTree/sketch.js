let theta;

function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES);
}

function draw() {
  background(0);
  stroke(255);

  theta = 30;
  let branchSize = 150;

  //trunk
  translate(width/2, height);
  line(0,0,0, -branchSize);

  translate(0,-branchSize);

  //recursing
  branch(branchSize);
}

function branch(length){
  length *= 0.66;

  if (length > 3) {
    //right
    push();
    rotate(0,0,0, -length);
    translate(0, -length);
    branch(length);
    pop();
    //left
    push();
    line(0,0,0, -length);
    translate(0, -length);
    branch(length);
    pop();
  }
}
