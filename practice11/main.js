function evenOdd(array){
  var objectToReturn = {evenArray: [], oddArray: []}
  for(var digitIndex = 0; digitIndex < array.length; digitIndex++){
    if(typeof array[digitIndex] === 'number'){
      if (array[digitIndex] % 2 === 0) {
        for(var evenIndex = 0; evenIndex < objectToReturn.evenArray.length; evenIndex++ ){
          if(array[digitIndex] === objectToReturn.evenArray[evenIndex]){
            array.splice(array[digitIndex],1);
          }
        }
        objectToReturn.evenArray.push(array[digitIndex]);
      } else {
        objectToReturn.oddArray.push(array[digitIndex]);
      }
    }
  }
  return objectToReturn;
}
evenOdd([2, 5, 1, 6, 8, 2, 20, 'cat', 13, 3]);
