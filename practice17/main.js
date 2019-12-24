function skippy_numbers(num){
  const rtnArr = [num];
  for(let i = 0; i < 7; i++){
    num++;
    if(i % 2 !== 0){
      num++;
    }
    rtnArr.push(num);
  }
  return rtnArr;
}
skippy_numbers(2);
