// McRavenTuazon
// 4/9/2018
//
let rows = 3;
let cols = 3;
let grid;
let cellS;

function preload() {

}

function setup() {
  createCanvas(windowWidth, windowHeight);
  cellS = width/ cols;
  // grid = random2dArray(cols,rows);
}

function draw() {
  background(255);
  drawGrid();
}

function drawGrid(){
  for (let x=0; x<cols; x++){
    for (let y=0; y<rows; y++){
      if (grid[x][y]===0) {
        fill(0);
      }
      else {
        fill(255);
      }
      rect(x*cellS, y*cellS, cellS, cellS);
    }
  }
}
