//global variables
let x;
let y;

function setup() {
  createCanvas(windowWidth, windowHeight);
  x = width/2;
  y = height/2;
}

function draw() {
  background(255);
  if (keyIsPressed) {
    moveStickman();
  }
  drawStickman(mouseX,mouseY);
  drawStickman(x,y);

}

function moveStickman() {
    if (key == "w" || key == "W") {
      y = y -10;
    }
    else if (key == "s" || key == "S") {
      y = y +10;
    }
    if (key == "d" || key == "D") {
      x = x +10;
    }
    if (key == "a" || key == "A") {
      x = x -10;
    }
}

function drawStickman(x, y) {

  //draw the head of the stickman
  ellipse(x,y,100,100);
  //The hat of the stickman and color it
  fill(255, 0, 0)
  rect(x-50, y-80, 100, 30);
  rect(x-25, y-130, 50, 50);
  //body of the stickman
  line(x, y, x, y+200);
  //The arms of the stickman
  line(x-50, y+100, x+50, y+100);
  //The legs of the stick
  line(x,y+200,x-50,y+250);
  line(x,y+200,x+50,y+250);

}
