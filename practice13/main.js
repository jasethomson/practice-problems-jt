function math_sequences(num1, num2){
  const rtnArr = [];
  rtnArr.push(num1+"+"+num2+"="+(num1+num2));
  rtnArr.push(num1 + "-" + num2 + "=" + (num1 - num2));
  rtnArr.push(num1 + "*" + num2 + "=" + (num1 * num2));
  rtnArr.push(num1 + "/" + num2 + "=" + (num1 / num2));
  return rtnArr;
}
math_sequences(2, 5);
