function find_factors(factNum){
  const rtnArr = [];
  for(let i=factNum;i>0; i--){
    if(factNum % i === 0){
      rtnArr.push(i);
    }
  }
  return rtnArr;
}

console.log(find_factors(24));
