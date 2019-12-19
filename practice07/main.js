function translate(str){
  str += " ";
  let subStr = "";
  let char1;

  let index2 = 0;
  while(index2 < str.length-1){
    char1 = str[index2];
    index2++;
    while (str[index2] !== " ") {
      subStr += str[index2++];
    }
    index2++;
    if (index2 < str.length - 1){
      subStr += char1 + "ay ";
    } else {
      subStr += char1 + "ay";
    }

  }

  console.log("str:",subStr);
}
translate("Hello my name is Stu");
translate("Hello there");
