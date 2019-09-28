function invert_negatives(number){
  if(typeof number === "number"){
    if(number < 0){
      return number;
    } else {
      return  number * -1;
    }
  } else {
    return false;
  }
}
