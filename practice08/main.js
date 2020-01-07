function character_convert(string){
  let asciiCode = "";
  for(let i=0; i < string.length; i++){
    asciiCode += string.charCodeAt(i);
  }
  return asciiCode;
}

console.log(character_convert('the cat in the hat'));
