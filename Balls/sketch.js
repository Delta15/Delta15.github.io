let theBalls = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(255);
  moveBalls();
  displayBalls();
}

function moveBalls(){
  for (let i=0; i<theBalls.length; i++){
    theBalls[i].x += theBalls[i].dx;
    theBalls[i].y += theBalls[i].dy;

    if (theBalls[i].y < 0){
      theBalls[i].y = height;
    }
    else if (theBalls[i].y > height) {
      theBalls[i].y = 0;
    }
    if (theBalls) {

    }
  }
}

function displayBalls(){
  for (let i=0; i<theBalls.length; i++){
    fill(theBalls[i].color);
    noStroke();
    ellipse(theBalls[i].x, theBalls[i].y, theBalls[i].size, theBalls[i].size);
  }
}

function mouseClicked(){
  let aBall = {
    c: mouseX,
    y: mouseY,
    size: random(10, 100),
    color: color(random(255), random(255),random(255),random(255)),
    dx: random(-5, 5),
    dy: random(-5, 5),
  };
  theBalls.push(aBall);
}
