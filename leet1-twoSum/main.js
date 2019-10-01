function addUpToTarget(array, target){
  let outerCounter = 0;
  while(outerCounter < array.length){
    let numX = array[outerCounter];
    let innerCounter = 0;
    while(innerCounter < array.length){
      if(outerCounter !== innerCounter){
        let numY = array[innerCounter];
        let test = numX + numY;
        if(test === target){
          const returnArray = [outerCounter, innerCounter];
          return returnArray;
        }
      }
      innerCounter++;
    }
    outerCounter++;
  }
}

const testArray = [11, 15, 2, 7];

addUpToTarget(testArray, 9);
