let backgroundMusic;
let anotherMusic;
let coder;

function preload() {
  backgroundMusic = loadSound("music/mapV.wav");
  anotherMusic = loadSound("music/Jingle.wav");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  backgroundMusic.setVolume(0.6);
  anotherMusic.setVolume(0.6);
  backgroundMusic.loop();
  coder = 0;
}

function draw() {
  background(coder);
  textAlign(CENTER,CENTER);
  textSize(100);
  fill(255);
  text("Sample",width/2,height/2);
}

function mouseClicked(){
  backgroundMusic.stop();
  anotherMusic.play();
  coder = 255;
  fill(0);
  text("W",width/2,height/2);
}
