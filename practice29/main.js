function do_math(num1, num2, operator){
  let result;
  switch(operator){
    case '+': result = num1 + num2;
      break;
    case '-': result = num1 - num2;
      break;
    case '*':
    case 'x':
    case 'X': result = num1 * num2;
      break;
    case '/': result = num1 / num2;
      break;
  }
  return result;
}
console.log("result:",do_math(5,2,'*'));
