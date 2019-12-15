function invert_negatives(num){
  if(typeof num === "number"){
    if(num < 0){
      return num;
    } else {
      return num*-1;
    }
  } else {
    return false;
  }
}

console.log("result:", invert_negatives(-5));
console.log("result:", invert_negatives(4000));
console.log("result:", invert_negatives('puppies'));
