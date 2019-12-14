function fibSequence(number){
  var counter = 0;
  var fib1 = 0;
  var fib2 = 1;
  var addToArray;
  var returnArray = [fib1, fib2];
  while(counter<number-2){
    addToArray = fib1 + fib2;
    returnArray.push(addToArray);
    fib1 = fib2;
    fib2 = addToArray;
    counter++;
  }
  return returnArray;
}
