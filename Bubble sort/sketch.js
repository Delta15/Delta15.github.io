let someList = [5,15,3,8,9,1,20,7];
function setup() {
  createCanvas(windowWidth, windowHeight);
  someList = selectionSort(someList);
}

function draw() {
  background(0);
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

function selectionSort(aList){
  let swapeLocation = 0;
  while (swapeLocation < aList.length){
    let smallestLocation = swapeLocation;

    //one pass
    for (let i = swapeLocation; i < aList.length; i++){
      if (aList[i] < aList[smallestLocation]){
        smallestLocation = i;
      }
    }
    //swap
    let temp = aList[swapeLocation];
    aList[swapeLocation] = aList[smallestLocation];
    aList[smallestLocation] = temp;

    swapeLocation++;
    print(aList);
  }
  return aList;
}
