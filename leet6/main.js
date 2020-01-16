const doMath = (num1, num2, opp) => {
  switch(opp){
    case "+":
      num1 += num2;
      return num1;
    case "-":
      num1 -= num2;
      return num1;
    case "*":
      num1 *= num2;
      return num1;
    case "/":
      num1 /= num2;
      return num1;
  }
}

console.log(doMath(2,5,"/"));
