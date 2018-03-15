let backgroundMusic;

function preload() {
  backgroundMusic = loadSound("sound&music/bensound-acousticbreeze.mp3");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(255);
  backgroundMusic.setVolume(0.6);
  backgroundMusic.play();
}
