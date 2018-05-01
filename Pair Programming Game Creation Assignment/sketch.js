let nameIntro, classIntro;
let mainMusic;
let gameOn, Gmusic, startT;
let programState;
let introSound, introSET, introGO, introSTART;
let textDisplay = " ";
let fadeAnimation;
let BGtext = "1";
let BGtext2 = "2";
let BGTtimer;
let rects = [];
let numRects = 50;
let cir;

function preload() {
  mainMusic = loadSound("music/Ryo.mp3");
  introSound = loadSound("music/countDown.mp3");
  Gmusic = loadSound("music/powerCore.mp3");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  mainMusic.loop();
  programState = 1;
  nameIntro = new Timer(3900);
  fadeAnimation = createGraphics(windowWidth, windowHeight);
  for (i = 0; i < numRects; i++) {
    r = new rectObj(random(width), random(height), random(10, 50), random(10, 50)) // generate a rectObj
    rects.push(r); //add it to the array.
  }
  cir = new circleObj(20); // create a new circle object
  console.log(rects);
}

function draw() {
  if (programState === 1) {
    background(0);
    fill(255);
    textAlign(CENTER, CENTER);
    textSize(100);
    text("McRavenTuazon", width / 2 - 200, height / 2 - 50);
    rectMode(CENTER);
    rect(width / 2, height / 2 + 50, windowWidth, 100);
    fill(0);
    text("WilliamAhiahonu", width / 2 + 200, height / 2 + 50);
    if (nameIntro.isDone()) {
      programState = 2;
      classIntro = new Timer(3900);
    }
  } else if (programState === 2) {
    background(0);
    fill(255);
    textAlign(CENTER, CENTER);
    textSize(100);
    text("CS30", width / 2, height / 2);
    if (classIntro.isDone()) {
      programState = 3;
    }
  } else if (programState === 3) {
    mainMenu();
  } else if (programState === 4) {
    introBG();
    textDisplay = "3";
    if (introSET.isDone()) {
      textDisplay = "2";
      introGO = new Timer(1000);
      introSTART = new Timer(1300);
      programState = 5;
    }
  } else if (programState === 5) {
    introBG();
    if (introGO.isDone()) {
      textDisplay = "1";
    }
    if (introSTART.isDone()) {
      programState = 6;
      gameOn = new Timer(1000);
      Gmusic.play();
    }
  } else if (gameOn.isDone() && programState === 6) {
    noCursor();
    for (i = 0; i < numRects; i++) {
      rects[i].disp();
      rects[i].collide(cir); //collide against the circle object
    }

    cir.disp(mouseX, mouseY); //pass the x,y pos in to the circle.
  }
}

function rectObj(x, y, w, h) {
  this.x = x
  this.y = y
  this.w = w
  this.h = h
  this.color = color(255, 0, 0)
  this.hit = false;

  this.collide = function(obj) {

    this.hit = collideRectCircle(this.x, this.y, this.w, this.h, obj.x, obj.y, obj.dia); //collide the cir object into this rectangle object.

    if (this.hit) {
      this.color = color(0) //set this rectangle to be black if it gets hit
      // state = 2;
    }

  }

  this.disp = function() {
    noStroke();
    fill(this.color);
    this.y += 3 //move down!
    if (this.y > height) { //loop to the left!
      this.y = -this.h;
    }
    rect(this.x, this.y, this.w, this.h);

  }

}

function circleObj(dia) {
  this.dia = dia;
  this.color = color(255)
  this.x;
  this.y;

  this.disp = function(x, y) {
    this.x = x;
    this.y = y;
    noStroke();
    fill(this.color);
    ellipse(this.x, this.y, this.dia, this.dia);
  }

}

function mainMenu() {
  background(255);
  push();
  fadeAnimation.noStroke();
  fadeAnimation.rectMode(CENTER, CENTER);
  fadeAnimation.fill(0, 8);
  fadeAnimation.rect(width / 2, height / 2, windowWidth, windowHeight / 1.1);
  image(fadeAnimation, 0, 0, windowWidth, windowHeight / 1.1);
  textAlign(CENTER, CENTER);
  fill(255);
  textSize(200);
  text("MINI", width / 2, height / 2 + 110);
  text("[MINI]", width / 2, height / 2);
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
  rect(width / 2, height / 2, 500, windowHeight);
  fill(255);
  rect(width / 2, height / 2, 480, windowHeight);
  fill(0);
  textAlign(CENTER, CENTER);
  textSize(100);
  text(textDisplay, width / 2, height / 2);
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
    } else {
      return false;
    }
  }
}
