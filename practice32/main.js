function find_middle_letters(string){
  console.log(string.length/2);
  var middleLetter;
  if(string.length % 2 === 0){
    middleLetter = string[(string.length / 2) - 1] + string[string.length / 2];
  } else {
    middleLetter = string[(Math.floor(string.length / 2))];
  }
  return middleLetter;
}
