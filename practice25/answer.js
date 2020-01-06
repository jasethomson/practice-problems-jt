function add_arrays(arrayOG, needleArray){
  for(let i = 0; i < arrayOG.length; i++){
    arrayOG[i] += needleArray[i];
  }
  return arrayOG;
}
let first_array = [3, -5, 15, 4];
let second_array = [3, 18, -5, -4];

console.log(add_arrays(first_array, second_array));
