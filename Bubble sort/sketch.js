let someList = [5,15,3,8,9,1,20,7];
function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(255);
  someList = bubbleSort(someList);
  print(someList);
}

function bubbleSort(aList){
  let swapeRequired = true;
  while (swapeRequired){
    swapeRequired = false;
    for (let i = 0; i < aList.length - 1; i++) {
      if (aList[i] > aList[i+1]) {
        let temp = aList[i];
        aList[i] = aList[i+1];
        aList[i+1] = temp;
        swapeRequired = true;
      }
    }
    print(aList);
  }
}
