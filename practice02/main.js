function arrayReverse(array){

  let counter = 0;
  const returnArray = [];
  const arrayLength = array.length;
  while(counter < arrayLength){
    let temp = array.pop();
    returnArray.push(temp);

    counter++;
  }
  return returnArray;
}


console.log(arrayReverse(['hello', 45, 'Bob', 'what', '23']));
