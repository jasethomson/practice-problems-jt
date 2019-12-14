function biggerWords(string, array){
  var counter = 0;
  var arrayToReturn = [];
  while(counter < array.length){
    if(array[counter].length > string.length){
      arrayToReturn.push(array[counter]);
    }
    counter++;
  }
  return arrayToReturn;
}
biggerWords('whales', ['bug', 'insect', 'mammal', 'reptile', 'mammoth', 'turtles']);
