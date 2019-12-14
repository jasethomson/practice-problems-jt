function math_sequences(num1, num2){
  let arrayToReturn = [];
  arrayToReturn.push(num1 + "+" + num2 + "=" + (num1 + num2));
  arrayToReturn.push(num1 + "-" + num2 + "=" + (num1 - num2));
  arrayToReturn.push(num1 + "*" + num2 + "=" + (num1 * num2));
  arrayToReturn.push(num1 + "/" + num2 + "=" + (num1 / num2));
  return arrayToReturn;
}
math_sequences(2, 5);

//required return value: ["2+5=7", "2-5=-3", "2*5=10", "2/5=0.4"];
