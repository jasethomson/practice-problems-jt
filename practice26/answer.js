function search_array(haystack, needle){
  const rtnArr = [];
  for(let nI=0; nI < needle.length; nI++){
    for(let hI=0; hI < haystack.length; hI++){
      if(needle[nI] === haystack[hI]){
        rtnArr.push(needle[nI]);
        break;
      }
    }
  }
  return rtnArr;
}


var haystack = ['cat', 'dog', 'bird', 'turtle', 'lizard'];
var needle = ['dog', 'lizard', 'flower', 'monkey', 'unicorn']

console.log(search_array(haystack, needle));
