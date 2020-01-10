var oddCells = function (n, m, indices) {
  const arr = [];
  let oddTotal = 0;
  for(let i = 0; i < n; i++){
    let subArr = [];
    for (let j = 0; j < m; j++) {
      subArr.push(0);
      if(indices[0][0] === i){
        subArr[j] += 1;
      }
      if(indices[1][0] === i){
        subArr[j] += 1;
      }
      if (indices[0][1] === j) {
        subArr[j] += 1;
      }
      if (indices[1][1] === j) {
        subArr[j] += 1;
      }
      if(subArr[j] % 2 !== 0){
        oddTotal += 1;
      }
    }
    arr.push(subArr);
  }
  return oddTotal;
};

let num1 = 2;
let num2 = 2;
let indie = [[1, 1], [0, 0]];

console.log(oddCells(num1, num2, indie));
