function reverse_t9(code){
  let rtnStr = "";
  let digit;
  const codeMap = {
    '2': ['a', 'b', 'c'],
    '3': ['d', 'e', 'f'],
    '4': ['g', 'h', 'i'],
    '5': ['j', 'k', 'l'],
    '6': ['m', 'n', 'o'],
    '7': ['p', 'q', 'r', 's'],
    '8': ['t', 'u', 'v'],
    '9': ['w', 'x', 'y', 'z']
  };
  for(let i=0; i < code.length; ){
    if(code[i] === code[i+1]){
      if(code[i+1] === code[i+2]){
        if(code[i+2] === code[i+3]){
          rtnStr += codeMap[code[i]][3];
          i+=4;
        } else {
          rtnStr += codeMap[code[i]][2];
          i += 3;
        }
      } else {
        rtnStr += codeMap[code[i]][1];
        i += 2;
      }
    } else {
      rtnStr += codeMap[code[i]][0];
      i++;
    }
    if(code[i] === " "){
      i++;
    }
  }
  return rtnStr;
}

console.log(reverse_t9('44 444 44666 9 277733 99966688'));
//hihowareyou
