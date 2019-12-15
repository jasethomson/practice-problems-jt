
function random_range(start_num, end_num){

  if(typeof start_num === "number"){
    let rndmNum = Math.floor(Math.random() * (end_num - start_num + 1) + start_num);
    while (rndmNum === start_num || rndmNum === end_num) {
      rndmNum = Math.floor(Math.random() * (end_num - start_num + 1) + start_num);
    }
    return rndmNum;
  } else {
    let rndmSelection = Math.floor(Math.random() * ((start_num.length-1) + 1));
    return start_num[rndmSelection];
  }

}

console.log("result:", random_range(['a', 'b', 'c', 'd', 'e']));

