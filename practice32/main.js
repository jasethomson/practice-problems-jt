function find_middle_letters(string){

  if(string.length % 2 !== 0){
    return string[Math.floor( (string.length-1) / 2)];
  } else {
    return (string[Math.floor((string.length - 1) / 2)] + string[Math.ceil((string.length - 1) / 2)]);
  }
}

console.log("result:", find_middle_letters('dish'));

