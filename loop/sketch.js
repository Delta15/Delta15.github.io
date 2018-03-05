// let black = 0;
// let white = 255;
let pointsize;

function setup() {
  createCanvas(windowWidth, windowHeight);
  pointsize = width/8;
}

function draw() {
  background(0);
  displayDots();
  // fill(black);
  // fill(white);
  // rect(100,100,50,50);
}

function displayDots(){
  let pointSpacing = 30;
  for (let x=pointSpacing; x < width; x+= pointSpacing) {
    for (let y=pointSpacing; y< height; y+= pointSpacing){
      fill(205, 7, 255);
      ellipse(x,y,4,4);
      stroke(255, 60);
      line(x,y,60,60);
    }
  }
}
