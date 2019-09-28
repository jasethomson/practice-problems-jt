function arrayFactors(array){
  const returnObject = {};
  for( let position = 0; position < array.length; position++){
    let currentObj = array[position];
    returnObject[currentObj] = [];
    let nestedCounter = 0;
    while(nestedCounter < array.length){
      if(nestedCounter !== position){
        if(currentObj % array[nestedCounter] === 0 )
          returnObject[currentObj].push(array[nestedCounter]);
      }
      nestedCounter++;
    }
  }
  return returnObject;
}
console.log(arrayFactors([4, 2, 8, 6, 3, 9]));
