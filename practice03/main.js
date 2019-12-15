function groupArray(arr){
  const rtrnArr = [];
  const strArr = [];
  const numArr = [];
  const boolArr = [];
  let count = 0;
  while(count < arr.length){
    switch(typeof arr[count]){
      case "string": strArr.push(arr[count]);
        break;
      case "number": numArr.push(arr[count]);
        break;
      case "boolean": boolArr.push(arr[count]);
    }
    count++;
  }
  rtrnArr.push(strArr, numArr, boolArr);
  return rtrnArr;
}

console.log("result:", groupArray(['hello', 34, true, false, 'goodbye', 56, 12, '25', true]));
