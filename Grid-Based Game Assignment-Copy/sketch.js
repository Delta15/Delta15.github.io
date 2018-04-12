// McRavenTuazon
// 4/9/2018
//launchpad
//Imitate a launchpad for example https://www.youtube.com/watch?v=qAeybdD5UoQ
let rows = 4;
let cols = 4;
let grid;
let cellS;
let instrumental;
let one, two, three, four, five, six, seven, eight, nine, ten, eleven, twelve, thirten, fourten, fifteen, sixten;
// let after, better, doit, ever, faster, harder, hour, makeit, makeus, morethan, never, our, over, stronger, workis, workit;

function preload() {
  one = loadSound("music/1.wav");
  two = loadSound("music/2.wav");
  three = loadSound("music/3.wav");
  four = loadSound("music/4.wav");
  five = loadSound("music/5.wav");
  six = loadSound("music/6.wav");
  seven = loadSound("music/7.wav");
  eight = loadSound("music/8.wav");
  nine = loadSound("music/9.wav");
  ten = loadSound("music/10.wav");
  eleven = loadSound("music/11.wav");
  twelve = loadSound("music/12.wav");
  thirten = loadSound("music/13.wav");
  fourten = loadSound("music/14.wav");
  fifteen = loadSound("music/15.wav");
  sixten = loadSound("music/16.wav");
  instrumental = loadSound("music/instrumental.mp3");
  //////////////////////////////////////////////////////////////////////////////
  // after = loadSound("music/after.wav");
  // better = loadSound("music/better.wav");
  // doit = loadSound("music/doit.wav");
  // ever = loadSound("music/ever.wav");
  // faster = loadSound("music/faster.wav");
  // harder = loadSound("music/harder.wav");
  // hour = loadSound("music/hour.wav");
  // makeit = loadSound("music/makeit.wav");
  // makeus = loadSound("music/makeus.wav");
  // morethan = loadSound("music/makethan.wav");
  // never = loadSound("music/never.wav");
  // our = loadSound("music/our.wav");
  // over = loadSound("music/over.wav");
  // stronger = loadSound("music/stronger.wav");
  // workis = loadSound("music/workis.wav");
  // workit = loadSound("music/workit.wav");

}

function setup() {
  createCanvas(600, 600);
  cellS = width / cols;
  grid = Random2dArray(cols, rows);
}

function draw() {
  drawGrid();
}


function drawGrid() {
  for (let x = 0; x < cols; x++) {
    for (let y = 0; y < rows; y++) {
      if (grid[x][y] === 0) {
        fill(255);
      }
      else {
        fill(255, 0, 0);
      }
      rect(x * cellS, y * cellS, cellS, cellS);
    }
  }
}

function mousePressed() {
  let xcoord = floor(mouseX / cellS);
  let ycoord = floor(mouseY / cellS);

  if (xcoord === 0 && ycoord === 0) {
    one.play();
  }
  else if (xcoord === 1 && ycoord === 0) {
    two.play();
  }
  else if (xcoord === 2 && ycoord === 0) {
    three.play();
  }
  else if (xcoord === 3 && ycoord === 0) {
    four.play();
  }
  else if (xcoord === 0 && ycoord === 1) {
    five.play();
  }
  else if (xcoord === 1 && ycoord === 1) {
    six.play();
  }
  else if (xcoord === 2 && ycoord === 1) {
    seven.play();
  }
  else if (xcoord === 3 && ycoord === 1) {
    eight.play();
  }
  else if (xcoord === 0 && ycoord === 2) {
    nine.play();
  }
  else if (xcoord === 1 && ycoord === 2) {
    ten.play();
  }
  else if (xcoord === 2 && ycoord === 2) {
    eleven.play();
  }
  else if (xcoord === 3 && ycoord === 2) {
    twelve.play();
  }
  else if (xcoord === 0 && ycoord === 3) {
    thirten.play();
  }
  else if (xcoord === 1 && ycoord === 3) {
    fourten.play();
  }
  else if (xcoord === 2 && ycoord === 3) {
    fifteen.play();
  }
  else if (xcoord === 3 && ycoord === 3) {
    sixten.play();
  }
  // if (grid[xcoord][ycoord] === 1) {
  //   grid[xcoord][ycoord] = 0;
  //   ten.play();
  // }
  // else {
  //   grid[xcoord][ycoord] = 1;
  // }

}

// function keyPressed() {
//   grid = Random2dArray(cols, rows);
// }

function Random2dArray(cols, rows) {
  let randomGrid = [];
  for (let x = 0; x < cols; x++) {
    randomGrid.push([]);
    for (let y = 0; y < rows; y++) {
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

function keyTyped() {
  if (key === "q" || key === "Q") {
    one.play();
  }
  else if (key === "w" || key === "W") {
    two.play();
  }
  else if (key === "e" || key === "E") {
    three.play();
  }
  else if (key === "r" || key === "R") {
    four.play();
  }
  else if (key === "t" || key === "T") {
    five.play();
  }
  else if (key === "y" || key === "Y") {
    six.play();
  }
  else if (key === "a" || key === "A") {
    seven.play();
  }
  else if (key === "s" || key === "S") {
    eight.play();
  }
  else if (key === "d" || key === "D") {
    nine.play();
  }
  else if (key === "f" || key === "F") {
    ten.play();
  }
  else if (key === "g" || key === "G") {
    eleven.play();
  }
  else if (key === "z" || key === "Z") {
    twelve.play();
  }
  else if (key === "x" || key === "X") {
    thirten.play();
  }
  else if (key === "c" || key === "C") {
    fourten.play();
  }
  else if (key === "v" || key === "V") {
    fifteen.play();
  }
  else if (key === "b" || key === "B") {
    sixten.play();
  }
  else if (key === "p" || key === "P") {
    instrumental.stop();
    instrumental.play();
  }
}
