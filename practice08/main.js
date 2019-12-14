function character_convert(string){
  let stringPosition = 0;
  let coolString = "";
  while(stringPosition < string.length){
    coolString += string.charCodeAt(stringPosition);
    stringPosition++;
  }
  return coolString;
}

console.log(character_convert('the cat in the hat'));
