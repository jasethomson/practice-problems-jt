const numberOfSteps = num => {
  let count = 0;
  while(num !== 0){
    (num % 2 === 0) ? num /= 2 : num -= 1;
    count++;
  }
  return count;
}

numberOfSteps(123);
