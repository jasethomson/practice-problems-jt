function translate(string){
  var stringToReturn = "";
  var firstLetter = string[0];
  var storeFirstLetter = string[0];
  for(var character = 1; character < string.length + 1; character++){
    // debugger;
    if(string[character] === " "){
      stringToReturn += firstLetter + "ay ";
      firstLetter = string[character + 1];
      character += 1;
    } else if(string[character] === undefined) {
      stringToReturn += firstLetter + "ay ";
    } else {
      stringToReturn += string[character];
    }
  }
  return stringToReturn;

}
translate("Hello my name is Stu");
