function highFive(arr){
  const obj = {};
  const rtnArr = [];
  for(let arrScore = 0; arrScore < arr.length; arrScore++){
    let tmp = arr[arrScore];
    if(obj[tmp[0]]){
      if (obj[tmp[0]].count < 5){
        obj[tmp[0]].sum += tmp[1];
        obj[tmp[0]].count++;
        obj[tmp[0]].nums.push(tmp[1]);
      } else {
        for(let numsI = 0; numsI < obj[tmp[0]].nums.length; numsI++){
          if(obj[tmp[0]].nums[numsI] < tmp[1]){
            obj[tmp[0]].sum -= obj[tmp[0]].nums[numsI];
            obj[tmp[0]].sum += tmp[1];
            obj[tmp[0]].nums[numsI] = tmp[1];
            break;
          }
        }
      }
    } else {
      obj[tmp[0]] = {
        sum: tmp[1],
        count: 1,
        nums: [tmp[1]]
      };
    }
  }
  console.log(obj);
  for(const student in obj){
    let avg = Math.floor(obj[student].sum / obj[student].count);
    rtnArr.push([student, avg]);
  }
  return rtnArr;
}

console.log(highFive([[1, 91], [1, 92], [2, 93], [2, 97], [1, 60], [2, 77], [1, 65], [1, 87], [1, 100], [2, 100], [2, 76]]));
