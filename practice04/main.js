
function sort(array){
var swap = true;
var arrayLength = array.length -1;
var savedArray = array;
  while(swap){
    // debugger;
    swap = false;
    for (var arrayIndex = 0; arrayIndex < arrayLength; arrayIndex++){
      if(savedArray[arrayIndex] > savedArray[arrayIndex + 1]){
        var tempHolder = savedArray[arrayIndex];
        savedArray[arrayIndex] = savedArray[arrayIndex + 1];
        savedArray[arrayIndex + 1] = tempHolder;
        swap = true;
      }
    }
    arrayLength--;
  }
  return savedArray;
}


// var swap;
// var n = a.length - 1;
// var x = a;
// do {
//   swap = false;
//   for (var i = 0; i < n; i++) {
//     if (x[i] < x[i + 1]) {
//       var temp = x[i];
//       x[i] = x[i + 1];
//       x[i + 1] = temp;
//       swap = true;
//     }
//   }
//   n--;
// } while (swap);
// return x;
// }
