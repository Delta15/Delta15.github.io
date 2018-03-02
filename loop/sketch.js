// let black = 0;
// let white = 255;
let pointsize;

function setup() {
  createCanvas(windowWidth, windowHeight);
  pointsize = width/8;
}

function draw() {
  background(255);
  drawboard();
  // fill(black);
  // fill(white);
  // rect(100,100,50,50);
}

function drawboard() {
  for(let i=0; i<8; i++){
    for(let j=0; j<8; j++){
      stroke(255,0,0);
      point(10,10);
    }
  }
}
