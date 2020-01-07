function romanNumerals(num){
  let rtnStr = "";
  while(num > 0){
    if (num < 4) {
      num -= 1;
      rtnStr += "I";
    } else if (num === 4) {
      num -= 4;
      rtnStr += "IV"
    } else if (num === 9) {
      num -= 9;
      rtnStr += "IX"
    } else if (num < 10) {
      num -= 5;
      rtnStr += "V";
    } else if (num >= 40 && num < 50) {
      num -= 40;
      rtnStr += "XL"
    } else if (num < 50) {
      num -= 10;
      rtnStr += "X";
    } else if (num >= 90 && num < 100) {
      num -= 90;
      rtnStr += "XC"
    } else if (num < 100) {
      num -= 50;
      rtnStr += "L";
    } else if (num >= 400 && num < 500) {
      num -= 400;
      rtnStr += "CD"
    } else if (num < 500) {
      num -= 100;
      rtnStr += "C";
    } else if (num >= 900 && num < 1000) {
      num -= 900;
      rtnStr += "CM"
    } else if (num < 1000) {
      num -= 500;
      rtnStr += "D";
    } else {
      num -= 1000;
      rtnStr += "M";
    }
  }

  return rtnStr;
}

console.log(romanNumerals(900));
