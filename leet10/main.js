let reverseString = function (arr) {

  let p1 = 0;
  let p2 = arr.length-1;
  while (p1<p2) {
    [arr[p1], arr[p2]] = [arr[p2], arr[p1]];
    p1++;
    p2--;
  }
  return arr;
};

console.log(reverseString(["H","e","l","l","o"]));
