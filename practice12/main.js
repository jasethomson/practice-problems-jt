function math_sequence(num) {

  num *=2;
  const rtnArr = [num];
  for(let i = 0; i<17; i++){
    if (rtnArr[0] === 4){
      if (i < 8) {
        num += 2;
      } else if (i === 8) {
        num /= 4;
        num += .5;
      } else {
        num += .5;
      }
      rtnArr.push(num);
    } else if(i<16){
      num += 2;
      rtnArr.push(num);
    }
  }
  return rtnArr;
}

console.log(math_sequence(2));
console.log(math_sequence(5));
