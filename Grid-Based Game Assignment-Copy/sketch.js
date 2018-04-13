// McRavenTuazon
// 4/9/2018
//launchpad
//Imitate a launchpad for example https://www.youtube.com/watch?v=qAeybdD5UoQ

let rows = 4;
let cols = 8;
let grid;
let cellS;
let instrumental;
let one, two, three, four, five, six, seven, eight, nine, ten, eleven, twelve, thirten, fourten, fifteen, sixten;
let after, better, doit, ever, faster, harder, hour, makeit, makeus, morethan, never, our, over, stronger, workis, workit;
let textPOP = " ";

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
}

function setup() {
  createCanvas(700, 600);
  cellS = width / cols;
  grid = Random2dArray(cols, rows);
  after = loadSound("music/after.wav");
  better = loadSound("music/better.wav");
  doit = loadSound("music/do it.wav");
  ever = loadSound("music/ever.wav");
  faster = loadSound("music/faster.wav");
  harder = loadSound("music/harder.wav");
  hour = loadSound("music/hour.wav");
  makeit = loadSound("music/make it.wav");
  makeus = loadSound("music/makes us.wav");
  morethan = loadSound("music/more than.wav");
  never = loadSound("music/never.wav");
  our = loadSound("music/our.wav");
  over = loadSound("music/over.wav");
  stronger = loadSound("music/stronger.wav");
  workis = loadSound("music/work is.wav");
  workit = loadSound("music/work it.wav");
}

function draw() {
  background(0);
  drawGrid();
  displayText();
}

function displayText(){
  fill(255);
  textFont("Impact");
  textSize(100);
  textAlign(CENTER,CENTER);
  text(textPOP,width/2,height/2 +160);
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
    textPOP = "WORK IT";
    one.play();
  }
  else if (xcoord === 1 && ycoord === 0) {
    textPOP = "MAKE IT";
    two.play();
  }
  else if (xcoord === 2 && ycoord === 0) {
    textPOP = "DO IT";
    three.play();
  }
  else if (xcoord === 3 && ycoord === 0) {
    textPOP = "MAKE US";
    four.play();
  }
  else if (xcoord === 4 && ycoord === 0) {
    textPOP = "AFTER";
    after.play();
  }
  else if (xcoord === 5 && ycoord === 0) {
    textPOP = "BETTER";
    better.play();
  }
  else if (xcoord === 6 && ycoord === 0) {
    textPOP = "DO IT";
    doit.play();
  }
  else if (xcoord === 7 && ycoord === 0) {
    textPOP = "EVER";
    ever.play();
  }
  else if (xcoord === 0 && ycoord === 1) {
    textPOP = "HARDER";
    five.play();
  }
  else if (xcoord === 1 && ycoord === 1) {
    textPOP = "BETTER";
    six.play();
  }
  else if (xcoord === 2 && ycoord === 1) {
    textPOP = "FASTER";
    seven.play();
  }
  else if (xcoord === 3 && ycoord === 1) {
    textPOP = "STRONGER";
    eight.play();
  }
  else if (xcoord === 4 && ycoord === 1) {
    textPOP = "FASTER";
    faster.play();
  }
  else if (xcoord === 5 && ycoord === 1) {
    textPOP = "HARDER";
    harder.play();
  }
  else if (xcoord === 6 && ycoord === 1) {
    textPOP = "HOUR";
    hour.play();
  }
  else if (xcoord === 7 && ycoord === 1) {
    textPOP = "MAKE IT";
    makeit.play();
  }
  else if (xcoord === 0 && ycoord === 2) {
    textPOP = "MORE THAN";
    nine.play();
  }
  else if (xcoord === 1 && ycoord === 2) {
    textPOP = "HOUR";
    ten.play();
  }
  else if (xcoord === 2 && ycoord === 2) {
    textPOP = "OUR";
    eleven.play();
  }
  else if (xcoord === 3 && ycoord === 2) {
    textPOP = "NEVER";
    twelve.play();
  }
  else if (xcoord === 4 && ycoord === 2) {
    textPOP = "MAKE US";
    makeus.play();
  }
  else if (xcoord === 5 && ycoord === 2) {
    textPOP = "MORE THAN";
    morethan.play();
  }
  else if (xcoord === 6 && ycoord === 2) {
    textPOP = "NEVER";
    never.play();
  }
  else if (xcoord === 7 && ycoord === 2) {
    textPOP = "OUR";
    our.play();
  }
  else if (xcoord === 0 && ycoord === 3) {
    textPOP = "EVER";
    thirten.play();
  }
  else if (xcoord === 1 && ycoord === 3) {
    textPOP = "AFTER";
    fourten.play();
  }
  else if (xcoord === 2 && ycoord === 3) {
    textPOP = "WORK IS";
    fifteen.play();
  }
  else if (xcoord === 3 && ycoord === 3) {
    textPOP = "OVER";
    sixten.play();
  }
  else if (xcoord === 4 && ycoord === 3) {
    textPOP = "OVER";
    over.play();
  }
  else if (xcoord === 5 && ycoord === 3) {
    textPOP = "STRONGER";
    stronger.play();
  }
  else if (xcoord === 6 && ycoord === 3) {
    textPOP = "WORK IS";
    workis.play();
  }
  else if (xcoord === 7 && ycoord === 3) {
    textPOP = "WORK IT";
    workit.play();
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
  if (key === "1" || key === "1") {
    textPOP = "WORK IT";
    one.play();
  }
  else if (key === "2" || key === "2") {
    textPOP = "MAKE IT";
    two.play();
  }
  else if (key === "3" || key === "3") {
    textPOP = "DO IT";
    three.play();
  }
  else if (key === "4" || key === "4") {
    textPOP = "MAKE US";
    four.play();
  }
  else if (key === "5" || key === "5") {
    textPOP = "HARDER";
    five.play();
  }
  else if (key === "6" || key === "6") {
    textPOP = "BETTER";
    six.play();
  }
  else if (key === "7" || key === "7") {
    textPOP = "FASTER";
    seven.play();
  }
  else if (key === "8" || key === "8") {
    textPOP = "STRONGER";
    eight.play();
  }
  else if (key === "q" || key === "Q") {
    textPOP = "MORE THAN";
    nine.play();
  }
  else if (key === "w" || key === "W") {
    textPOP = "HOUR";
    ten.play();
  }
  else if (key === "e" || key === "E") {
    textPOP = "OUR";
    eleven.play();
  }
  else if (key === "r" || key === "R") {
    textPOP = "NEVER";
    twelve.play();
  }
  else if (key === "t" || key === "T") {
    textPOP = "EVER";
    thirten.play();
  }
  else if (key === "y" || key === "Y") {
    textPOP = "AFTER";
    fourten.play();
  }
  else if (key === "u" || key === "U") {
    textPOP = "WORK IS";
    fifteen.play();
  }
  else if (key === "i" || key === "I") {
    textPOP = "OVER";
    sixten.play();
  }
  else if (key === "p" || key === "P") {
    instrumental.stop();
    instrumental.play();
  }
  else if (key === "a" || key === "A") {
    textPOP = "AFTER";
    after.play();
  }
  else if (key === "s" || key === "S") {
    textPOP = "BETTER";
    better.play();
  }
  else if (key === "d" || key === "D") {
    textPOP = "DO IT";
    doit.play();
  }
  else if (key === "f" || key === "F") {
    textPOP = "EVER";
    ever.play();
  }
  else if (key === "g" || key === "G") {
    textPOP = "FASTER";
    faster.play();
  }
  else if (key === "h" || key === "H") {
    textPOP = "HARDER";
    harder.play();
  }
  else if (key === "j" || key === "J") {
    textPOP = "OUR";
    hour.play();
  }
  else if (key === "k" || key === "K") {
    textPOP = "MAKE IT";
    makeit.play();
  }
  else if (key === "z" || key === "Z") {
    textPOP = "MAKE US";
    makeus.play();
  }
  else if (key === "x" || key === "X") {
    textPOP = "MORE THAN";
    morethan.play();
  }
  else if (key === "c" || key === "C") {
    textPOP = "NEVER";
    never.play();
  }
  else if (key === "v" || key === "V") {
    textPOP = "OUR";
    our.play();
  }
  else if (key === "b" || key === "B") {
    textPOP = "OVER";
    over.play();
  }
  else if (key === "n" || key === "N") {
    textPOP = "STRONGER";
    stronger.play();
  }
  else if (key === "m" || key === "M") {
    textPOP = "WORK IS";
    workis.play();
  }
  else if (key === "," || key === "<") {
    textPOP = "WORK IT";
    workit.play();
  }
}

function keyPressed(){
  if (keyCode === ESCAPE) {
    instrumental.stop();
  }
}
