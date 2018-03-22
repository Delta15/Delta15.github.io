let backgroundMusic;

function preload() {
  backgroundMusic = loadSound("music/mapV.wav");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  backgroundMusic.setVolume(0.6);
  backgroundMusic.loop();
}

function draw() {
  background(255,0,0);
  textAlign(CENTER,CENTER);
  textSize(100);
  fill(255);
  text("Sample",width/2,height/2);
}
