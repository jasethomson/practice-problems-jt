let palindrome = function (str) {
  // let str2 = str.split("").reverse().join("");
  // return str===str2
  let len;
  if(str.length % 2 === 0){
    len = str.length / 2;
  } else {
    len = Math.floor(str.length / 2)
  }

  let j = str.length-1;
  for(let i=0; i < len; i++){
    if(str[i] === str[j]){
      j--;
    } else {
      return false;
    }
  }
  return true;
};
console.log(palindrome("eyeer"));
