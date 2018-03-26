let grid = [[0,1,0],[1,1,0],[0,0,1]];
let rows = 3;
let cols = 3;
let cellSize;

function setup() {
  createCanvas(windowWidth, windowHeight);
  cellSize = width / cols;
}

function draw() {
  background(255);
  displayGrid();
}

function displayGrid(){
  for (let x=0; x<cols; x++){
    for(let y=0; y<rows; y++){
      if (grid[x][y]=== 0){
        fill(255);
      }
      rect(x*cellSize, y*cellSize, cellSize, cellSize);
    }
  }
}

function createRandom2DArray(){

}
