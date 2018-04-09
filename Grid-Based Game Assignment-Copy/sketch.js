// McRavenTuazon
// 4/9/2018
//
let rows = 3;
let cols = 3;
let grid;
let cellS;

// function preload() {
//
// }

function setup() {
  createCanvas(500, 500);
  cellS = width/ cols;
  grid = Random2dArray(cols,rows);
}

function draw() {
  background(0);
  drawGrid();
}

function drawGrid(){
  for (let x=0; x<cols; x++){
    for (let y=0; y<rows; y++){
      if (grid[x][y]===0) {
        fill(255);
      }
      else {
        fill(255,0,0);
      }
      rect(x*cellS, y*cellS, cellS, cellS);
    }
  }
}

function mousePressed() {
  let xcoord = floor(mouseX / cellS);
  let ycoord = floor(mouseY / cellS);

  if (grid[xcoord][ycoord] === 1) {
    grid[xcoord][ycoord] = 0;
  }
  else {
    grid[xcoord][ycoord] = 1;
  }
}

function keyPressed() {
  grid = Random2dArray(cols, rows);
}

function Random2dArray(cols, rows) {
  let randomGrid = [];
  for (let x=0; x<cols; x++) {
    randomGrid.push([]);
    for (let y=0; y<rows; y++) {
      if (random(100) < 50) {
        randomGrid[x].push(0);
      }
      else {
        randomGrid[x].push(1);
      }
    }
  }
  return randomGrid;
}

function keyPressed(){
  
}
