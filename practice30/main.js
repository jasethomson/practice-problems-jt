function random_range (start_num, end_num){
  // debugger;
  if (typeof start_num === "object"){
    var randomArrayGenerator = Math.floor(Math.random() * (start_num.length));
    return start_num[randomArrayGenerator];
  } else {
      var randomNumberGenerator = Math.floor(Math.random() * (end_num - start_num + 1) + start_num);
      return randomNumberGenerator;
  }

}
