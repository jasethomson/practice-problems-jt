
function subStringGen(string){
  if(string){
    let letterArray = [string[0]];
    let longestArray = [];
    let outerCount = 1;
    let loopCount = 0;
    while (loopCount < string.length) {
      let innerCount = 0;
      let match = false;
      while (innerCount < letterArray.length) {
        if (string[outerCount] === letterArray[innerCount]) {
          if (letterArray.length > longestArray.length) {
            longestArray = letterArray;
          }
          letterArray = [];
          match = true;
          loopCount++;
          outerCount = loopCount;
          break;
        }
        if (letterArray.length > longestArray.length) {
          longestArray = letterArray;
        }
        innerCount++;
      }
      if (!match) {
        letterArray.push(string[outerCount]);
        match = false;
        outerCount++;
      }
      outerCount++;
    }
    if (longestArray.length < letterArray.length) {
      return letterArray.length;
    }
    return longestArray.length;
  }
  return 0;
}
