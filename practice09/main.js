function fittingWords(str, arr){
  let arrLen = arr.length;
  let index = 0;
  const rtrnArr = [];
  while(index < arrLen){
    let innerIndex = 0;
    let strIndex = 0;
    let curLetter = str[strIndex];
    let curStr = arr[index];
    while(innerIndex < curStr.length){
      if(curStr[innerIndex] === curLetter){
        innerIndex = 0;
        strIndex++;
        if(strIndex === str.length){
          rtrnArr.push(curStr);
          break;
        }
        curLetter = str[strIndex];
      }
      innerIndex++;
    }
    index++;
  }
  console.log("return Array:", rtrnArr);
}
fittingWords("cat", ['caterpillar', 'whale', 'accurate', 'smile', 'cactus', 'cute']);
