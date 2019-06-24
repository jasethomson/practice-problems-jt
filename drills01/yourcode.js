function sumArray(array){
  var index = 0;
  var sum = 0;
  while(index<array.length){
  sum += array[index];
  console.log(sum);
  index++;
  }
  return sum;
}

function fitWithinVal(array, num){
  var index = 0;
  var sum = 0;
  var newArray = [];
  while(sum < num) {
    sum += array[index];
    if (sum < num){
      newArray.push(array[index]);
      console.log('sum ', sum);
      console.log('newArray ',newArray);
    } else if(sum > num) {
      sum -= array[index];
      console.log('sum ', sum);
      console.log('newArray ', newArray);
    }
    else {
      return newArray;
    }
    index++;
  }
}

function getAllNamesShorterThan(){

}

function makeLabel(){

}
