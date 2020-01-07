function permutations(str){
  const rtnArr = [];
  const str1 = str[0]+str[2]+ str[1];
  const str2 = str[1] + str[2] + str[0];
  const str3 = str[1] + str[0] + str[2];
  const str4 = str[2] + str[1] + str[0];
  const str5 = str[2] + str[0] + str[1];
  rtnArr.push(str, str1, str2, str3, str4, str5);
  return rtnArr;
}

console.log(permutations("abc"));
