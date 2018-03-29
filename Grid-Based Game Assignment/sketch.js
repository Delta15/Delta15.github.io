// McRavenTuazon
// 3/28/2018
// recreating Tetris
let backMusic;
let TVscreen;

function preload(){
  backMusic = loadSound("music/tet.webm");
}

function setup() {
  TVscreen = 1;
  createCanvas(windowWidth, windowHeight);
  backMusic.loop();
}

function draw() {
  if (TVscreen ===1) {
    mainScreen();
  }
  if (TVscreen ===2) {
    gamePlay();
  }
  if (TVscreen ===3) {
    gameOver();
  }
}

function mainScreen(){
  background(34,139,34);
  textAlign(CENTER);
  textFont("Impact");
  textSize(250);
  fill(255);
  text("TETRIS",width/2,height/2);
  textSize(30);
  text("Press ENTER to start",width/2,height/2+100);
}

function gamePlay(){

}

function gameOver(){
  
}
