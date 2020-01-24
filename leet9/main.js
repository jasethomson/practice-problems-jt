
const morseCode = [".-", "-...", "-.-.", "-..", ".", "..-.", "--.", "....", "..", ".---", "-.-", ".-..", "--", "-.", "---", ".--.", "--.-", ".-.", "...", "-", "..-", "...-", ".--", "-..-", "-.--", "--.."];

const uniqueMorseRepresentations = (words) => {
  const rtnArr = [];
  for(let curWordI = 0; curWordI < words.length; curWordI++){
    let curWord = words[curWordI];
    let tmpStr = "";
    for(let curLetterI = 0; curLetterI < curWord.length; curLetterI++){
      let morseI = (curWord.charCodeAt(curLetterI)) -97;
      tmpStr += morseCode[morseI];
    }
    let found = false;
    for(let rtnArrI = 0; rtnArrI < rtnArr.length; rtnArrI ++){
      if(tmpStr === rtnArr[rtnArrI]){
        found = true;
      }
    }
    if(!found){
      rtnArr.push(tmpStr);
    }
  }
  return rtnArr.length;
};

console.log(uniqueMorseRepresentations(["gin", "zen", "gig", "msg"]));
