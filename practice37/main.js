function capitalizeEveryOtherLetter(string){
  var stringToReturn = "";
  var charPlace = 0;
  var tempHolder = "";
  while(charPlace<string.length){
    if(charPlace % 2 === 0){
      stringToReturn += string[charPlace];
    } else {
      tempHolder = string[charPlace];
      stringToReturn += tempHolder.toUpperCase();
    }
    charPlace++;
  }
  return stringToReturn;
}
