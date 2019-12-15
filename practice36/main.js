function findVowels(string){
  let result = '';
  for(let index = 0; index < string.length; index++){
    switch(string[index]){
      case 'a': result += string[index];
        break;
      case 'e': result += string[index];
        break;
      case 'i': result += string[index];
        break;
      case 'o': result += string[index];
        break;
      case 'u': result += string[index];
    }
  }
  return result;
}

console.log("result:", findVowels("four score and seven years ago"));
