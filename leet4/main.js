const oddCells = function (numOfArrays, numOfVals, indices) {
  const arr = [];
  let oddTotal = 0;
  for (let yIndex = 0; yIndex < numOfArrays; yIndex++){
    let subArr = [];
    for (let xIndex = 0; xIndex < numOfVals; xIndex++) {
      subArr.push(0);
      for(let incremntIndex = 0; incremntIndex < indices.length; incremntIndex++){
        if(yIndex === indices[incremntIndex][0]){
          subArr[xIndex] += 1;
        }
        if(xIndex === indices[incremntIndex][1]){
          subArr[xIndex] += 1;
        }
      }
      if(subArr[xIndex] % 2 !== 0){
        oddTotal += 1;
      }
    }
    arr.push(subArr);
  }
  return oddTotal;
};

let num1 = 2;
let num2 = 3;
let indie = [[0, 1], [1, 1]];

console.log(oddCells(num1, num2, indie));
