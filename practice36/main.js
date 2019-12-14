function findVowel(string){
  var currentCharacter = 0;
  var stringOfVowels = "";
  while(currentCharacter < string.length){
    switch(string[currentCharacter]){ //a e i o u
      case 'a':
      case 'e':
      case 'o':
      case 'u':
      case 'i':
        stringOfVowels += string[currentCharacter];
    }
    currentCharacter++;
  }
  return stringOfVowels;
}
