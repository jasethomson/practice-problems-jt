function matrix_add(arr1, arr2){
  for(let outer=0; outer < arr1.length; outer++){
    for(let inner=0; inner < arr1[outer].length; inner++){
      arr1[outer][inner] += arr2[outer][inner];
    }
  }
  return array1;
}

var array1 =
  [
    [1, 2, 3],
    [3, 4, 5],
    [6, 7, 8]
  ];
var array2 =
  [
    [1, 2, 3],
    [1, 2, 3],
    [1, 2, 3]
  ];
console.log(matrix_add(array1, array2));
