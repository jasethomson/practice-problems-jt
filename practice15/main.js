function numeric_toggles(num){
  const rtnArr = [];
  for(let i=0; i < 8; i++){
    if(i < 2){
      num = 2*(rtnArr.length + 2);
      rtnArr.push(num);
    } else if(i < 4){
      num = -3*(rtnArr.length+1);
      rtnArr.push(num);
    } else if(i < 6){
      num = 4*(rtnArr.length);
      rtnArr.push(num);
    } else if(i < 8){
      num = -5 * (rtnArr.length-1);
      rtnArr.push(num);
    }
  }
  return rtnArr;
}

console.log(numeric_toggles(2));
// output[4, 6, -9, -12, 16, 20, -25, -30];
