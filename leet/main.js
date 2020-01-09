let removeVowels = function (S) {
  let newS = "";
  for (let i = 0; i < S.length; i++) {
    switch (S[i]) {
      case "a":
      case "e":
      case "i":
      case "o":
      case "u":
        break;
      default:
        newS += S[i];
    }
  }
  return newS;
};

console.log(removeVowels("leetcodeisacommunityforcoders"));


let defangIPaddr = function (address) {
  let rtnAdd = "";
  for (let i = 0; i < address.length; i++) {
    rtnAdd += (address[i] === ".") ? "[.]" : address[i];
  }
  return rtnAdd;
};

console.log(defangIPaddr("1.1.1.1"));

let subtractProductAndSum = function (n) {
  let product = 1;
  let sum = 0;
  let s = n.toString();
  for (let i = 0; i < s.length; i++) {
    product *= parseInt(s[i]);
    sum += parseInt(s[i]);
  }
  product -= sum;
  return product;
};

console.log(subtractProductAndSum(245));

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
