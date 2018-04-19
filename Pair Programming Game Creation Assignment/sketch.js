function setup() {
  createCanvas(windowWidth, windowHeight);
  backgroundSetup();
}

function draw() {
  mainMenu();
}

function backgroundSetup() {
  let goldColor = color(255, 198, 0);
  let blueColor = color(0, 102, 153);
  let mainMenuBackground = lerpColor(goldColor, blueColor, 0.50);
  background(mainMenuBackground);
}

function mainMenu() {
  textAlign(CENTER, CENTER);
  fill(0);
  textSize(100);
  text("SAMPLE", width / 2, height / 2);
}
