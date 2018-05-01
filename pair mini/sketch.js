let state = 1;
let mainMusic;
let BGtext = "1";
let BGtext2 = "2";
let BGTtimer;
let rects = [];
let numRects = 50;
let cir;

function preload() {
  mainMusic = loadSound("music/powerCore.mp3");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  mainMusic.loop();
  BGTtimer = new Timer(3000);
  for (i = 0; i < numRects; i++) {
    r = new rectObj(random(width), random(height), random(10, 50), random(10, 50)) // generate a rectObj
    rects.push(r); //add it to the array.
  }

  cir = new circleObj(20); // create a new circle object
  console.log(rects);
}

function draw() {
  if (state === 1) {
    gameII();
    if (mouseIsPressed) {
      state = 2;
    }
  }
  else if (state === 2) {
    game();
    noCursor();
    if (BGTtimer.isDone()) {
      BGtext = " ";
      BGtext2 = " ";
    }
  }
}

function rectObj(x, y, w, h) {
  this.x = x;
  this.y = y;
  this.w = w;
  this.h = h;
  this.color = color(255, 0, 0);
  this.hit = false;

  this.collide = function(obj) {

    this.hit = collideRectCircle(this.x, this.y, this.w, this.h, obj.x, obj.y, obj.dia); //collide the cir object into this rectangle object.

    if (this.hit) {
      // this.color = color(0); //set this rectangle to be black if it gets hit
      state = 1;
    }

  };

  this.disp = function() {
    noStroke();
    fill(this.color);
    this.y += 3; //move down!
    if (this.y > height) { //loop to the left!
      this.y = -this.h;
    }
    rect(this.x, this.y, this.w, this.h);

  };

}

function circleObj(dia) {
  this.dia = dia;
  this.color = color(0);
  this.x;
  this.y;

  this.disp = function(x, y) {
    this.x = x;
    this.y = y;
    noStroke();
    fill(this.color);
    ellipse(this.x, this.y, this.dia, this.dia);
  };

}

function game() {
  background(255);
  textDisplay();
  for (i = 0; i < numRects; i++) {
    rects[i].disp();
    rects[i].collide(cir); //collide against the circle object
  }

  cir.disp(mouseX, mouseY); //pass the x,y pos in to the circle.
}

function gameII() {
  background(255, 0, 0);
}

function textDisplay() {
  textFont("impact");
  textAlign(CENTER, CENTER);
  fill(0);
  textSize(500);
  text(BGtext, width / 2, height / 2);
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
