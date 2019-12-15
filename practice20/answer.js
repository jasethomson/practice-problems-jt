function randomize_list(arr){
  let length = arr.length;
  let index = 0;
  while(index < length){
    let pos = Math.floor(Math.random() * ((arr.length-1) + 1));
    arr.splice(pos, 0, arr.pop());
    index++;
  }
  return arr;
}

console.log("result:", randomize_list([3, 1, 5, 5, 2]));
