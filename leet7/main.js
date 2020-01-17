var decompressRLElist = function (nums) {
  let rtnArr = [];
  for (let arrIndex = 0; arrIndex < nums.length; arrIndex += 2) {
    let freq = nums[arrIndex]; let val = nums[arrIndex + 1]; const
    tmpArr = [];
    for (let freqIndex = 0; freqIndex < freq; freqIndex++) {
      tmpArr.push(val);
    }
    rtnArr = rtnArr.concat(tmpArr);
  }
  return rtnArr;
};

let input = [1, 2, 3, 4];

decompressRLElist(input);
