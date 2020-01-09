let findNumbers = function (nums) {
  let count = 0;
  let tmp;
  for (let i = 0; i < nums.length; i++) {
    tmp = (nums[i]).toString();
    if (tmp.length % 2 === 0) {
      count++;
    }
  }
  return count;
};
console.log(findNumbers([12, 345, 2, 6, 7896]));
