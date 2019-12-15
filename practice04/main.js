function sort(arr){
  let length = arr.length;
  for (let index = 0; index < length; index++){
    for(let index2 = 0; index2 < length; index2++){
      if(arr[index2] > arr[index2 + 1]){
        let tmp = arr[index2];
        arr[index2] = arr[index2 + 1];
        arr[index2 + 1] = tmp;
      }
    }
  }
  return arr;
}

console.log("result:", sort(['mouse', 'cat', 'dog', 'human']));
