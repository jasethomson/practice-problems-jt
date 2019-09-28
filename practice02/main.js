function arrayReverse(array){
  var counter = 0;
  var returnArray = [];
  var tempString = "";
  var arrayLength = array.length;
  while(counter < arrayLength){
    tempString = array.pop();
    returnArray.push(tempString);
    counter++;
  }
  return returnArray;
}
