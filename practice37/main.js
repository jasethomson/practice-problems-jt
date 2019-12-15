function altCaps(str){
  // toUpperCase();
  let result = "";
  for(let index = 0; index < str.length; index++){
    // debugger;
    if(index % 2 !== 0){
      let tempStr = str[index];
      tempStr = tempStr.toUpperCase();
      result+=tempStr;
    } else{
      result+=str[index];
    }
  }
  return result;
}

console.log("result:",altCaps("amazing"));
