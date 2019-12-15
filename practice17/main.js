function skippy_numbers(num){
  var arrayToReturn = [num];
  var numPlusOne;
  var numPlusTwo;
  for (var currentPosition = 0; currentPosition  < 8; currentPosition += 2){
    numPlusOne = arrayToReturn[currentPosition] + 1;
    numPlusTwo = numPlusOne + 2;
    arrayToReturn.push(numPlusOne,numPlusTwo);
    if(arrayToReturn.length > 8){
      arrayToReturn.pop();
    }
  }
  return arrayToReturn;
}
skippy_numbers(2);
