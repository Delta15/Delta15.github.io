// McRavenTuazon
// 3/28/2018
// recreating Tetris
let backMusic;

function preload(){
  backMusic = loadSound("music/tet.webm");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  backMusic.loop();
}

function draw() {
  TVscreen();
}

function TVscreen(){
  background(34,139,34);
  textAlign(CENTER);
  textFont("Impact");
  textSize(250);
  fill(255);
  text("TETRIS",width/2,height/2);
  textSize(30);
  text("Press ENTER to start",width/2,height/2+125);
}
