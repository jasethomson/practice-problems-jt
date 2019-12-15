
function bipolarLoop(num1, num2){
  let i;
  let j;
  for(i = num1, j = num2; i <= num2, j >= num1; i++, j--){
    console.log(i, j);
  }
}

bipolarLoop(0, 10);
