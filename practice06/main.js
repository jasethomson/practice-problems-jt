function fibSequence(num){
  let index = 2;
  let num1 = 0;
  let num2 = 1;
  let rtrnStr = num1 + " " + num2 + " ";
  let num3 = 0;
  while(index < num){
    num3 = num1 + num2;
    num1 = num2;
    num2 = num3;
    rtrnStr += (num3 + " ");
    index++;
  }
  return rtrnStr;
}
fibSequence(12);
