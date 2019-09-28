function add_arrays(arrayOG, needleArray){
  let arrayPosition = 0;
  while(arrayPosition < arrayOG.length){
    arrayOG[arrayPosition] += needleArray[arrayPosition];
    arrayPosition++;
  }
  return arrayOG;
}
let first_array = [3, -5, 15, 4];
let second_array = [3, 18, -5, -4];

output = add_arrays(first_array, second_array);
console.log(output); //outputs [6,13,10,0];
