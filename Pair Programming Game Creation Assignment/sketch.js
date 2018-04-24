let mainMusic;
let introSound;
let programState;
let nameIntro;
let introSET;
let introGO;
let gameBegin;
let textDisplay = " ";
let fadeAnimation;

function preload(){
  mainMusic = loadSound("music/Automation.mp3");
  introSound = loadSound("music/countDown.mp3");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  mainMusic.loop();
  programState = 1;
  nameIntro = new Text(2000);
  fadeAnimation = createGraphics(windowWidth, windowHeight);
}

function draw() {
  if (programState === 1) {
    background(0);
    fill(255);
    textAlign(CENTER,CENTER);
    textSize(100);
    text("McRavenTuazon",width/2,height/2 - 100);
    text("WilliamAhiahonu",width/2,height/2);
    text("CS30",width/2,height/2 + 100);
    if (nameIntro.isDone()) {
      programState = 2;
    }
  }
  else if (programState === 2) {
    mainMenu();
  }
  else if (programState === 3) {
    intro();
    if (introSET.isDone()) {
      textDisplay = "SET";
    }
  }
}

function mainMenu() {
  background(255);
  push();
  fadeAnimation.noStroke();
  fadeAnimation.rectMode(CENTER, CENTER);
  fadeAnimation.fill(0, 1);
  fadeAnimation.rect(width/2,height/2,windowWidth,500);
  image(fadeAnimation, 0, 0, windowWidth, 800);
  textAlign(CENTER, CENTER);
  fill(255);
  textSize(200);
  text("MINI", width / 2, height / 2 + 100);
  text("[MINI]", width / 2, height / 2 );
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
    programState = 3;
    introSET = new Timer(1000);
    mainMusic.stop();
    introSound.play();
  }
  else if (keyIsPressed) {
    programState = 3;
    introSET = new Timer(1000);
    mainMusic.stop();
    introSound.play();
  }
}

function intro() {
  background(255);
  noStroke();
  rectMode(CENTER);
  fill(0);
  rect(width/2,height/2,500,windowHeight);
  fill(255);
  rect(width/2,height/2,480,windowHeight);
  fill(0);
  textAlign(CENTER, CENTER);
  textSize(100);
  text(textDisplay, width/2, height/2);
  textDisplay = "READY";
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

class Text{
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
