let nameIntro, classIntro;
let mainMusic;
let gameOn, Gmusic;
let programState;
let introSound, introSET, introGO, introSTART;
let textDisplay = " ";
let fadeAnimation;

function preload(){
  mainMusic = loadSound("music/Automation.mp3");
  introSound = loadSound("music/countDown.mp3");
  Gmusic = loadSound("music/Ryo.mp3");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  mainMusic.loop();
  programState = 1;
  nameIntro = new Timer(2000);
  fadeAnimation = createGraphics(windowWidth, windowHeight);
}

function draw() {
  if (programState === 1) {
    background(0);
    fill(255);
    textAlign(CENTER,CENTER);
    textSize(100);
    text("McRavenTuazon",width/2,height/2 - 50);
    text("WilliamAhiahonu",width/2,height/2 + 50);
    if (nameIntro.isDone()) {
      programState = 2;
      classIntro = new Timer(2000);
    }
  }
  else if (programState === 2) {
    background(0);
    fill(255);
    textAlign(CENTER,CENTER);
    textSize(100);
    text("CS30",width/2,height/2);
    if (classIntro.isDone()) {
      programState = 3;
    }
  }
  else if (programState === 3) {
    mainMenu();
  }
  else if (programState === 4) {
    introBG();
    textDisplay = "3";
    if (introSET.isDone()) {
      textDisplay = "2";
      introGO = new Timer(1000);
      introSTART = new Timer(1300);
      programState = 5;
    }
  }
  else if (programState === 5) {
    introBG();
    if (introGO.isDone()) {
      textDisplay = "1";
    }
    if (introSTART.isDone()) {
      programState = 6;
      gameOn = new Timer(1000);
    }
  }
  else if (gameOn.isDone() && programState === 6) {
    cupGame();
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
  text("MINI", width / 2, height / 2 + 110);
  text("[MINI]", width / 2, height / 2 );
  text("MINI", width / 2, height / 2 - 110);
  pop();
  push();
  fill(255);
  textAlign(CENTER);
  textSize(20);
  textFont("impact");
  text("Press any to continue", width / 2, height / 2 + 200);
  pop();
  if (mouseIsPressed || keyIsPressed) {
    programState = 4;
    introSET = new Timer(1000);
    mainMusic.stop();
    introSound.play();
  }
}

function introBG() {
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
}

function cupGame(){
  Gmusic.play();
  background(0);
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
