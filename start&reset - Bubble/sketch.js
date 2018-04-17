let myTimer;

function setup() {
  createCanvas(windowWidth, windowHeight);
  myTimer = new Timer(1000);
}

function draw() {
  if (myTimer.isDone()) {
    ellipse(random(width), random(height), random(25, 100), random(25, 100));
    myTimer.reset(100);
  }
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

class Bubble {
  constructor(){
    ellipse(random(width), random(height), random(100, 100), random(100, 100));
  }
}
