let state = 1;
let timerONE, timerTWO, timerTHREE;

function setup() {
  createCanvas(windowWidth, windowHeight);
  timerONE = new Timer(900);
}

function draw() {
  if (state === 1) {
    mainManu();
    if (timerONE.isDone()) {
      state = 2;
      timerTWO = new Timer(800);
    }
  }
  else if (state === 2) {
    intro();
    if (timerTWO.isDone()) {
      state = 3;
      timerTHREE = new Timer(800);
    }
  }
  else if (state === 3) {
    mainManu();
    if (timerTHREE.isDone()) {
      state = 1;
      timerONE = new Timer(800);
    }
  }
}

function mainManu(){
  background(0);
  textAlign(CENTER,CENTER);
  fill(255);
  textSize(100);
  text("SAMPLE",width/2,height/2);
}
function intro(){
  background(255,0,0);
  textAlign(CENTER,CENTER);
  fill(0);
  textSize(100);
  text("SAMPLE",width/2,height/2);
}

class Timer {
  constructor(waitTime) {
    this.waitTime = waitTime;
    this.startTime = millis();
    this.finishTime = this.startTime + this.waitTime;
    this.timerIsDone = false;
  }
  reset(newWaitTime) {
    this.waitTime = newWaitTime;
    this.startTime = millis();
    this.finishTime = this.startTime + this.waitTime;
    this.timerIsDone = false;
  }
  isDone() {
    if (millis() >= this.finishTime) {
      return true;
    }
    else {
      return false;
    }
  }
}
