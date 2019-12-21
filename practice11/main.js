function evenOdd(arr){
  let arrLen = arr.length;
  let index = 0;
  const even = [];
  const odd = [];
  while(index < arrLen){
    let cur = arr[index];
    if (typeof cur === "number"){
      if( cur % 2 === 0){
        let dblChkIndex = 0;
        let dbl = false;
        while(dblChkIndex < even.length){
          if(cur === even[dblChkIndex] ){
            dbl = true;
            break;
          }
          dblChkIndex++;
        }
        if(dbl === false){
          even.push(cur);
        }
      } else {
        let dblChkIndex = 0;
        let dbl = false;
        while (dblChkIndex < odd.length) {
          if (cur === odd[dblChkIndex]) {
            dbl = true;
            break;
          }
          dblChkIndex++;
        }
        if (dbl === false) {
          odd.push(cur);
        }
      }
    }
    index++;
  }

  return "odd:" + odd +  "even:" +  even;
}
console.log(evenOdd([2, 5, 1, 6, 8, 2, 20, 'cat', 13, 3]));
