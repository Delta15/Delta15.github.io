// McRavenTuazon
// 4/9/2018
//launchpad
//Imitate a launchpad for example https://www.youtube.com/watch?v=qAeybdD5UoQ
let rows = 4;
let cols = 4;
let grid;
let cellS;
//packA
let voc, voc2, hardDrum, hardDrum2, hardDrum3, bellT;
//packB
let one, two, three, four, five, six, seven, eight, nine, ten, eleven, twelve, thirten, fourten, fifteen, sixten;

function preload() {
  voc = loadSound("music/voc.mp3");
  voc2 = loadSound("music/voc2.mp3");
  hardDrum = loadSound("music/hardDrum.mp3");
  hardDrum2 = loadSound("music/hardDrum2.mp3");
  hardDrum3 = loadSound("music/hardDrum3.mp3");
  bellT = loadSound("music/bellT.mp3");
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
}

function setup() {
  createCanvas(600, 600);
  cellS = width / cols;
  grid = Random2dArray(cols, rows);
}

function draw() {
  background(255);
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

  if (grid[1][1]) {
    grid[xcoord][ycoord] = 0;
    one.play();
  }
  else if (grid[1][2]) {
    four.play();
  }
  else {
    grid[xcoord][ycoord] = 1;
    two.play();
  }
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
}

// function aPack(){
//   if (key === "7") {
//     hardDrum.play();
//   }
//   else if (key === "8") {
//     hardDrum2.play();
//   }
//   else if (key === "9") {
//     hardDrum3.play();
//   }
//   else if (key === "4") {
//     bellT.play();
//   }
//   else if (key === "1") {
//     voc.play();
//   }
//   else if (key === "2") {
//     voc2.play();
//   }
// }
//
// function bPack(){
//
// }
