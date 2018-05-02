let nameIntro, classIntro;
let mainMusic;
let gameOn, Gmusic, startT;
let programState;
let introSound, introSET, introGO, introSTART;
let textDisplay = " ";
let fadeAnimation;
let rects = [];
let numRects = 50;
let cir;

// #################################################################################################
//---------------------------------
// Stickman Game - William Ahiahonu
// Component of MINI Arcade
// Computer Science 30
// Pair Programming Assignment
// May 2nd, 2018
//---------------------------------

// Stickman game global variables - William.
let stickman, collisionDetector;
let stickmanGameImage, stickmanStandState, stickmanJumpState, stickmanRunState1, stickmanRunState2,
  stickmanRunState3, stickmanRunState4;
let obstacleX, obstacleSpeed, obstacleState, obstacleStateArray = [1, 2, 3, 4], lavaImage;
let gameState, score, highScore;
// #################################################################################################

function preload() {
  mainMusic = loadSound("music/Ryo.mp3");
  introSound = loadSound("music/countDown.mp3");
  Gmusic = loadSound("music/powerCore.mp3");

  // ###############################################################################################
  // Stickman game assets - William.
  stickmanGameImage = loadImage("assets/backgroundimage.png");
  stickmanStandState = loadImage("assets/stickman_stand.png");
  stickmanJumpState = loadImage("assets/stickman_jump.png");
  stickmanRunState1 = loadImage("assets/stickman_run1.png");
  stickmanRunState2 = loadImage("assets/stickman_run2.png");
  stickmanRunState3 = loadImage("assets/stickman_run3.png");
  stickmanRunState4 = loadImage("assets/stickman_run4.png");
  lavaImage = loadImage("assets/lavaimage.png");
  // ###############################################################################################
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  mainMusic.loop();
  programState = 1;
  nameIntro = new Timer(3900);
  fadeAnimation = createGraphics(windowWidth, windowHeight);
  for (i = 0; i < numRects; i++) {
    r = new rectObj(random(width), random(height), random(10, 50), random(10, 50));// generate a rectObj
    rects.push(r); //add it to the array.
  }
  cir = new circleObj(20); // create a new circle object
  console.log(rects);

  // ###############################################################################################
  // Stickman game setup tools - William.
  // Stickman display and behaviour class - William.
  stickman = new StickmanCharacter(150);
  // Collision Detection class, which includes the appearance and behaviour of the obstacles.
  //- William.
  collisionDetector = new CollisionDetection(150);
  // Obstacle movement and appearance changes - William.
  obstacleX = windowWidth/2;
  obstacleSpeed = 15;
  obstacleState = 1;
  // Controls for gameover screen and actual game - William.
  gameState = 1;
  // game and highscore control - William.
  score = 0;
  highScore = 0;
  // Checking for a local storage value from the last time played, else
  // the value is set beginning with the first game played - William.
  if (!localStorage.getItem("highscore")) {
    // Set the highscore.
    setHighScore();
  }
  else {
    // Retrieve the highscore if it already exists - William.
    getHighScore();
  }
  // #################################################################################################
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
  }
  else if (programState === 2) {
    background(0);
    fill(255);
    textAlign(CENTER, CENTER);
    textSize(100);
    text("CS30", width / 2, height / 2);
    if (classIntro.isDone()) {
      programState = 3;
    }
  }
  else if (programState === 3) {
    mainMenu();
  }
  else if (programState === 4) {
    instract();
  }
  else if (programState === 5) {
    introBG();
    textDisplay = "3";
    if (introSET.isDone()) {
      textDisplay = "2";
      introGO = new Timer(1000);
      introSTART = new Timer(1300);
      programState = 6;
    }
  }
  else if (programState === 6) {
    introBG();
    if (introGO.isDone()) {
      textDisplay = "1";
    }
    if (introSTART.isDone()) {
      programState = 7;
      gameOn = new Timer(1000);
      Gmusic.play();
    }
  }
  else if (gameOn.isDone() && programState === 7) {
    game1();
    noCursor();
  }
  else if (programState === 8) {
    cursor();
    background(255);
    // #################################################################################################
    noStroke();
    if (gameState === 1) {
    // Stickman game function, containing all of the components of it - William.
      stickManGame();
    }
    else if (gameState === 2) {
    // If stickman hits an obstacle, game over - William.
      gameOverConditionals();
    }
  // #################################################################################################

  }

  function game1() {
    background(0);
    for (i = 0; i < numRects; i++) {
      rects[i].disp();
      rects[i].collide(cir); //collide against the circle object
    }

    cir.disp(mouseX, mouseY); //pass the x,y pos in to the circle.
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
      programState = 8;
    }

  };

  this.disp = function() {
    noStroke();
    fill(this.color);
    this.y += 3; //move down!;
    if (this.y > height) { //loop to the left!
      this.y = -this.h;
    }
    rect(this.x, this.y, this.w, this.h);

  };

}

function circleObj(dia) {
  this.dia = dia;
  this.color = color(255);
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
  text("Press any key to continue", width / 2, height / 2 + 200);
  pop();
  if (keyIsPressed) {
    programState = 4;
    mainMusic.stop();
  }
}

function instract(){
  background(255);
  textAlign(CENTER,CENTER);
  fill(0);
  textSize(50);
  text("I", width/2, height/2 - 300);
  text("Use mouse to control white circle", width/2, height/2 - 200);
  text("Avoid red rectangles", width/2, height/2 - 100);
  text("II", width/2, height/2);
  text("SAMPLE", width/2, height/2 + 100);
  text("CLICK TO CONTINUE", width/2, height/2 + 300);
  if (mouseIsPressed) {
    programState = 5;
    introSET = new Timer(1000);
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
    }
    else {
      return false;
    }
  }
}
// ###################################################################################################
function stickManGame() {
  // Background Image.
  push();
  imageMode(CORNER);
  image(stickmanGameImage, 0, 0, windowWidth, windowHeight+150);
  pop();
  // Collision Detector (Hitbox) also containing the obstacles - William.
  // Set to follow the stickman's movements. Hitbox is hidden. - William.
  collisionDetector.newPositionAndSurfaceDetection();
  collisionDetector.jump(-7.8);
  // Reveal the obstacles at the approriate times - William.
  collisionDetector.obstacles();
  // Surface of the game - William.
  push();
  fill(0);
  rect(0, 696, windowWidth, windowHeight);
  pop();
  // Stickman Character appearance, movement and behaviour - William.
  stickman.updateDisplay();
  stickman.newPositionAndSurfaceDetection();
  stickman.jump(-7.8);
  // Tracking the score - William.
  scoreTracker();
  // Disabling spacebar functionality so the window does not scroll up or down
  // when the spacebar is pressed - William.
  window.onkeydown = function killSpaceBar() {
    return !(keyCode === 32);
  };
  // Function to disable the ability to scroll - William.
  function disableScrolling() {
    window.scrollTo(0, 0);
  }
  // Adding listener to disable scrolling - - William.
  window.addEventListener("scroll", disableScrolling);
}
function scoreTracker() {
  // Display for score and highscore within the game - William.
  push();
  textSize(50);
  fill(0);
  push();
  textFont("impact");
  textAlign(CENTER);
  text("Score: " + score + " m", windowWidth/2, 70);
  text("High Score: " + highScore + " m", windowWidth/2, 150);
  pop();
}
// Function to set local storage value to highscore in the game - William.
function setHighScore() {
  localStorage.setItem("highscore", score);
}
// Function to get local storage value if possible - William.
function getHighScore() {
  highScore = localStorage.getItem("highscore");
}
// Function to remove local storage value, if you can't beat the highscore :) - William.
function keyTyped() {
  if (key === "c") {
    localStorage.removeItem("highscore");
  }
}
function gameOverConditionals() {
  // Display final score after stickman is dead - William.
  background(0);
  push();
  fill(255);
  textSize(90);
  textAlign(CENTER);
  textFont("impact");
  fill("red");
  text("YOU DIED!", windowWidth/2, windowHeight/2);
  fill("gold");
  textSize(40);
  text("Final Score: " + score + " m", windowWidth/2, windowHeight/2+70);
  text("High Score: " + highScore + " m", windowWidth/2, windowHeight/2+140);
  pop();
  // Obstacles are pushed to the end of the screen opposite of the stickman
  // before the game is rerun to give the player time to react - William.
  obstacleX = windowWidth;
  // Change...
  if(keyIsDown(82)) { // key r
    gameState = 1;
    score = 0;
  }
}
class StickmanCharacter {
  constructor(objectX) {
    this.width = width;
    this.height = height;
    this.objectX = objectX;
    this.objectY = 654;
    this.velocityY = 0;
    this.gravity = 0.3;
    this.gravitySpeed = 0;
    this.stickmanStanding = true;
    this.runningState = 1, this.frameDuration1 = 60 , this.frameDuration2 = 60,
    this.frameDuration3 = 60, this.frameDuration4 = 60;
    this.lastTimeFrameChanged = millis();
  }
  updateDisplay() {
    noStroke();
    imageMode(CENTER);
    if (this.objectY < 654) {
      image(stickmanJumpState, this.objectX+30, this.objectY, 480, 380);
    }
    else if (!this.objectY < 654 && this.stickmanStanding === true) {
      image(stickmanStandState, this.objectX, this.objectY-25, 70, 150);
    }
    if (keyIsDown(39) && !keyIsDown(38) && this.gravitySpeed === 0) { //39 - right arrow
      this.stickmanStanding = false;

      if (this.runningState === 1) {
        image(stickmanRunState1, this.objectX-20, this.objectY-10, 120, 125);
        if (millis() > this.lastTimeFrameChanged + this.frameDuration1) {
          this.runningState = 2;
          this.lastTimeFrameChanged = millis();
        }
      }
      if (this.runningState === 2) {
        image(stickmanRunState2, this.objectX-20, this.objectY-10, 100, 125);
        if (millis() > this.lastTimeFrameChanged + this.frameDuration2) {
          this.runningState = 3;
          this.lastTimeFrameChanged = millis();
        }
      }
      if (this.runningState === 3) {
        image(stickmanRunState3, this.objectX-20, this.objectY-16, 80, 135);
        if (millis() > this.lastTimeFrameChanged + this.frameDuration3) {
          this.runningState = 4;
          this.lastTimeFrameChanged = millis();
        }
      }
      if (this.runningState === 4) {
        image(stickmanRunState4, this.objectX-30, this.objectY-10, 120, 125);
        if (millis() > this.lastTimeFrameChanged + this.frameDuration4) {
          this.runningState = 1;
          this.lastTimeFrameChanged = millis();
        }
      }
    }
    else {
      this.stickmanStanding = true;
    }
  }
  newPositionAndSurfaceDetection() {
    this.gravitySpeed += this.gravity;
    this.objectY += this.velocityY + this.gravitySpeed;
    if (this.objectY > 654) {
      this.objectY = 654;
      this.gravitySpeed = 0;
    }
  }
  jump(negativeNumericalValue) {
    if (keyIsDown(38) && this.objectY > 639) { //up arrow
      stickman.gravity = negativeNumericalValue;
    }
    else if (keyIsDown(88) && this.objectY > 639) { //key x
      stickman.gravity = negativeNumericalValue-2;
    }
    else {
      stickman.gravity = 0.8;
    }
  }
}
class CollisionDetection {
  constructor(objectX) {
    this.width = width;
    this.height = height;
    this.objectX = objectX;
    this.objectY = 654;
    this.velocityY = 0;
    this.gravity = 0.3;
    this.gravitySpeed = 0;
  }
  updateDisplay() {
    //fill("grey");
    // Hitbox.
    rect(this.objectX-36, this.objectY-92, 60, 150);
  }
  newPositionAndSurfaceDetection() {
    this.gravitySpeed += this.gravity;
    this.objectY += this.velocityY + this.gravitySpeed;
    if (this.objectY > 654) {
      this.objectY = 654;
      this.gravitySpeed = 0;
    }
  }
  jump(negativeNumericalValue) {
    if (keyIsDown(38) && this.objectY > 639) { //up arrow
      collisionDetector.gravity = negativeNumericalValue;
    }
    else if (keyIsDown(88) && this.objectY > 639) { //key x
      collisionDetector.gravity = negativeNumericalValue-2;
    }
    else {
      collisionDetector.gravity = 0.8;
    }
  }
  obstacles() {
    //Obstacle 1.
    if (obstacleState === 1) {
      this.obstacleOccurance =
      collideRectCircle(this.objectX-36, this.objectY-92, 60, 150, obstacleX, 590, 240);
      fill("grey");
      ellipse(obstacleX, 580, 240);
    }
    //Obstacle 2.
    else if (obstacleState === 2) {
      this.obstacleOccurance =
      collideRectCircle(this.objectX-36, this.objectY-92, 60, 150, obstacleX, 580, 230, 50);
      fill("grey");
      triangle(obstacleX-60, 570, obstacleX-88, 470, obstacleX-116, 570);
      triangle(obstacleX+27, 570, obstacleX-1, 460, obstacleX-29, 570);
      triangle(obstacleX+117, 570, obstacleX+89, 470, obstacleX+61, 570);
      push();
      fill("black");
      rectMode(CENTER);
      rect(obstacleX, 580, 240, 50);
      pop();
      fill(0);
      rect(obstacleX-120, 605, 40, 100);
      rect(obstacleX-20, 605, 40, 100);
      rect(obstacleX+80, 605, 40, 100);
    }
    //Obstacle 3.
    else if (obstacleState === 3) {
      this.obstacleOccurance =
      collideRectRect(this.objectX-36, this.objectY-92, 60, 150, obstacleX-150, 655, 300, 100);
      this.obstacleOccurance3 =
      collideRectRect(this.objectX-36, this.objectY-92, 60, 150, obstacleX-200, 290, 400, 100);
      fill(0);
      rect(obstacleX-200, 315, 400, 100);
      fill("red");
      rect(obstacleX-150, 655, 300, 100);
      image(lavaImage, obstacleX, 700, 300, 90);
      fill(0);
      rect(obstacleX-200, 655, 50, 90);
      rect(obstacleX+150, 655, 50, 90);
    }
    // Obstacle 4.
    else if (obstacleState === 4) {
      this.obstacleOccurance =
      collideRectRect(this.objectX-36, this.objectY-92, 60, 150, obstacleX, 500, 500, 20);
      push();
      translate(obstacleX, 400);
      rotate(millis() / 100);
      fill(0);
      rectMode(CENTER);
      rect(0, 0, 300, 20);
      pop();
      push();
      fill(0);
      rect(obstacleX-20, 400, 40, 700);
      fill("red");
      ellipseMode(CENTER);
      ellipse(obstacleX, 400, 40);
      pop();
    }
    if (keyIsDown(39)) {
      obstacleX -= obstacleSpeed;
      if (score > highScore) {
        setHighScore();
        highScore = score;
      }
      if (frameCount % 5 === 0) {
        score ++;
      }
    }
    if (obstacleX <= -120) {
      obstacleX = windowWidth;
      obstacleState = obstacleStateArray[Math.floor(Math.random() * obstacleStateArray.length)];
    }
    if (this.obstacleOccurance || this.obstacleOccurance3) {
      gameState = 2;
    }
  }
}
// ###################################################################################################
