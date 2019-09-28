function fittingWords(string, array){
  var arrayToReturn = [];
  var stringArray = [];
  var indexOfArray = 0;
  var currentString = array[indexOfArray];
  var currentLetter;
  var matchedLetter = false;
  for (var stringPosition = 0; stringPosition < string.length; ) {
    currentLetter = string[stringPosition];
    for (var stringX = 0; stringX < currentString.length; stringX++) {
     if (currentString[stringX] === currentLetter){
      matchedLetter = true;
      break;
      }
    }
    stringPosition++
    if(matchedLetter === false){
      currentString += 1;
      indexOfArray += 1;
      currentString = array[indexOfArray];
      stringPosition = 0;
    } else if(stringPosition > string.length -1){
      arrayToReturn.push(currentString);
      indexOfArray += 1;
      currentString = array[indexOfArray];
      stringPosition = 0;
      matchedLetter = false;
    }else {
      matchedLetter = false;
    }
    if (currentString === undefined) {
      return arrayToReturn;
    }
  }
}
fittingWords("cat", ['caterpillar', 'whale', 'accurate', 'smile', 'cactus', 'cute']);
