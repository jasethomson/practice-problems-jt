function arrayFactors(arr){
  const rtnObj = {};
  let tmpArr = [];
  for(let i=0; i < arr.length; i++){
    tmpArr = [];
    for(let j=arr[i]-1; j > 0; j--){
      if( arr[i] % j === 0 && j !== 1){
        tmpArr.push(j);
      }
    }
    rtnObj[arr[i]] = tmpArr;
  }
  return rtnObj;
}
console.log(arrayFactors([4, 2, 8, 6, 3, 9]));
