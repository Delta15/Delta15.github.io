let state = 1;
let mainMusic;
let BGtext = "I";
let BGtext2 = "2";
let BGTtimer;

function preload(){
  mainMusic = loadSound("music/powerCore.mp3");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  mainMusic.loop();
  BGTtimer = new Timer(3000);
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
  background(255);
  textDisplay();
  player();
}

function gameII(){
  background(0,0,255);
}

function textDisplay(){
  textFont("impact");
  textAlign(CENTER,CENTER);
  fill(0);
  textSize(500);
  text(BGtext,width/2,height/2);
}

function player(){
  ellipse(mouseX, mouseY,40,40);
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
