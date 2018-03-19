let heights = [];
let numberOfrect;
function setup() {
  createCanvas(windowWidth, windowHeight);
  numberOfrect = width;
}

function draw() {
  background(255);
  displayTerrain();
}

function generateTerrain(numberofRect){
  for (let i=0; i<numberofRect; i++){
    heights.push(random(100, 500));
  }
}

function displayTerrain(){
  let rectWidth = width/numberOfrect;
  rectMode(CORNER);
  fill(0);
  for(let i=0; i<numberOfrect; i++){
    rect(0,height, rectWidth, height - height[0]);
  }
}
