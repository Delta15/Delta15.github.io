let backgroundMusic;

function preload() {
  backgroundMusic = loadSound("sound&music/Map.wav");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  backgroundMusic.setVolume(0.6);
  backgroundMusic.play();
}

function draw() {
  //background(255);
}
