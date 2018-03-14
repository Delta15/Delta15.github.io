let clockSize;
function setup() {
  createCanvas(windowWidth, windowHeight);
  if (width > height){
    clockSize = height + 0.9;
  }
  else{
    clockSize = width + 0.9;
  }
}

function draw() {
  background(255);
  push();//save
  // translate(width/2,height/2);
  // rotate(frameCount);
  // fill(0);
  // rectMode(CENTER);
  // rect(0,0,300,50);
  translate(width/2,height/2);
  strokeWeight(8);
  ellipse(0,0, clockSize,clockSize);
  strokeWeight(10);
  strokeCap(SQUARE);

  for(let i=0; i < 12; i++){
    line(0,clockSize/2*0.95,0,clockSize/2*0.80);
    rotate(360/60);
  }

  pop();//return
  // rectMode(CENTER);
  // ellipse(width/2,height/2,500);
}
