// McRavenTuazon
// 3/28/2018
// recreating Tetris
let backMusic;

function preload(){
  backMusic = loadSound("music/tet.webm");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  TVscreen();
}

function TVscreen(){
  backMusic.play();
  background(34,139,34);
  textAlign(CENTER);
  textFont("Impact");
  textSize(250);
  fill(255);
  text("TETRIS",width/2,height/2);
}
