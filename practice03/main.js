function groupArray(array){
  var currentPosition = 0;
  var lengthOfArray = array.length;
  var arrayToReturn = [];
  var data = array[currentPosition];
  var typeOfData = typeof data;
  var stringTempHolder = [];
  var numberTempHolder = [];
  var booleanTempHolder = [];
  while( currentPosition < lengthOfArray ){
    switch (typeOfData){
        case 'string':
          stringTempHolder.push(array[currentPosition]);
          break;
        case 'number':
          numberTempHolder.push(array[currentPosition]);
          break;
        case 'boolean':
          booleanTempHolder.push(array[currentPosition]);
    }
    currentPosition++;
    data = array[currentPosition];
    typeOfData = typeof data;
  }
  arrayToReturn.push(stringTempHolder);
  arrayToReturn.push(numberTempHolder);
  arrayToReturn.push(booleanTempHolder);
  return arrayToReturn;
}
