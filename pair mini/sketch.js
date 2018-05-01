let state = 1;
let mainMusic;
let BGtext = "1";
let BGtext2 = "2";
let BGTtimer;
let rectX, rectY, rectWidth, rectHeight;
let ellipseX, ellipseY, ellipseSize;

function preload(){
  mainMusic = loadSound("music/powerCore.mp3");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  mainMusic.loop();
  BGTtimer = new Timer(3000);
  rectX = random(width);
  rectY = random(height);
  rectWidth = random(100, 400);
  rectHeight = random(100, 400);

  ellipseSize = 50;
}

function draw() {
  if (state === 1) {
    game();
    noCursor();
    if (BGTtimer.isDone()) {
      BGtext = " ";
      BGtext2 = " ";
    }
  }
  else if (state === 2) {
    gameII();
  }
}

function game(){
  background(0);
  textDisplay();
  player();
}

function gameII(){
  background(255,0,0);
}

function textDisplay(){
  textFont("impact");
  textAlign(CENTER,CENTER);
  fill(255);
  textSize(500);
  text(BGtext,width/2,height/2);
}

function player(){
  ellipseX = mouseX;
  ellipseY = mouseY;

  ellipse(ellipseX, ellipseY, ellipseSize, ellipseSize);
  
  if (collideRectCircle(rectX, rectY, rectWidth, rectHeight, ellipseX, ellipseY, ellipseSize)) {
    state = 2;
  }
}

class Timer{
  constructor(waitTime){
    this.waitTime = waitTime;
    this.startTime = millis();
    this.finishTime = this.startTime + this.waitTime;
    this.timerIsDone = false;
  }
  reset(newWaitTime){
    this.waitTime = newWaitTime;
    this.startTime = millis();
    this.finishTime = this.startTime + this.waitTime;
    this.timerIsDone = false;
  }
  isDone(){
    if (millis() >= this.finishTime) {
      return true;
    }
    else {
      return false;
    }
  }
}
