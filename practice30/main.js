
function random_range(start_num, end_num) {
  if (end_num) return parseInt(Math.random() * (end_num - start_num) + start_num);
  return start_num[parseInt(Math.random() * start_num.length)];
}


console.log("2,15", random_range(2, 15));
console.log("1,100", random_range(1, 100));
console.log("result:", random_range(['a', 'b', 'c', 'd', 'e']));
