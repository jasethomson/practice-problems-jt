function do_math(num1, num2, operator) {
  switch (operator) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    case '*':
    case 'x':
    case 'X':
      return num1 * num2;
    case '/':
      return num1 / num2;
  }
}
console.log("result:", do_math(5, 2, '*'));
