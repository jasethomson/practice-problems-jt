function do_math(num1, num2, operator){
  switch (operator) {
    case '+': var answer = num1 + num2;
    break;
    case '-': answer = num1 - num2;
    break;
    case '*':
    case 'x':
    case 'X': answer = num1 * num2;
    break;
    case '/': answer = num1 / num2;
    break;
  }
  return answer;
}
console.log('do math +: ', do_math(2,4,'+'));
console.log('do math -: ', do_math(2, 4, '-'));
console.log('do math *: ', do_math(2, 4, '*'));
console.log('do math x: ', do_math(2, 4, 'x'));
console.log('do math X: ', do_math(2, 4, 'X'));
console.log('do math /: ', do_math(2, 4, '/'));
