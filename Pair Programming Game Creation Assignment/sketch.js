let mainMusic;
let programState;
let textDisplay = "SAMPLE ";

function preload(){
  mainMusic = loadSound("music/Automation.mp3");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  backgroundSetup();
  mainMusic.loop();
  programState = 1;
}

function draw() {
  if (programState === 1) {
    mainMenu();
  }
  else if (programState === 2) {
    intro();
  }
}

function backgroundSetup() {
  let goldColor = color(255);
  let blueColor = color(0);
  let mainMenuBackground = lerpColor(goldColor, blueColor, 0.30);
  background(mainMenuBackground);
}

function mainMenu() {
  push();
  noStroke();
  rectMode(CENTER);
  fill(0);
  rect(width/2,height/2,windowWidth,500);
  textAlign(CENTER, CENTER);
  fill(255);
  textSize(200);
  text("MINI", width / 2, height / 2 + 100);
  text("MINI", width / 2, height / 2 );
  text("MINI", width / 2, height / 2 - 100);
  pop();
  push();
  fill(255);
  textAlign(CENTER);
  textSize(20);
  textFont("impact");
  text("Press any to continue", width / 2, height / 2 + 200);
  pop();
  if (mouseIsPressed) {
    programState = 2;
    mainMusic.stop();
  }
}

function intro() {
  background(255);
  fill(0);
  textAlign(CENTER);
  textSize(100);
  text(textDisplay, width / 2, height / 2);
}

class Timer {
  constructor(waitTime) {
    this.waitTime = waitTime;
    // this.startTime = millis();
    // this.finishTime = this.startTime + this.waitTime;
    this.timerIsDone = false;
  }

  start() {
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
      this.timerIsDone = true;
    }
    return this.timerIsDone;
  }
}
