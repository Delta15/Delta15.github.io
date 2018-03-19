let swither;
let x;
let y;

function setup() {
  createCanvas(windowWidth, windowHeight);
  swither = 1;
  x = width/2;
  y = height/2;
}

function draw() {
  gameScreen();
}

function gameScreen(){
  if (swither===1){
    gameOpening();
  }
  else if (swither === 2) {
    gameStart();
  }
}

function keyPressed(){
  if (keyCode === ENTER){
    swither = 2;
  }
}

function gameOpening(){
  background(255);
  fill(0);
  noStroke();
  rectMode(CENTER);
  rect(width/2,height/2,windowWidth,200);
  fill(255);
  textFont("Impact");
  textAlign(CENTER, CENTER);
  textSize(100);
  text("DROP",width/2,height/2);
  textSize(30);
  text("Press ENTER to start",width/2, height/2+75);
}

function gameStart(){
  background(255);
  if (keyIsPressed) {
    moveSpaceship();
  }
  spaceShip(x,y);
}

function moveSpaceship(){
  if (key === "w"|| key === "W"){
    y - y -10;
  }
  else if (key ==="s"|| key ==="S") {
    y - y +10;
  }
  if (key ==="d"|| key ==="D") {
    x - x +10;
  }
  if (key === "a" || key ==="A") {
    x - x -10;
  }
}

function spaceShip(x,y){
  noStroke();
  fill(50,205,50);
  triangle(x, y, 100, 100,100,100);
}
