function search_array(haystack, needle){
  let needlePosition = 0;
  const found = [];
  while(needlePosition < needle.length){
    let haystackPosition = 0;
    while(haystackPosition < haystack.length){
      if(needle[needlePosition] === haystack[haystackPosition]){
        found.push(needle[needlePosition]);
      }
      haystackPosition++;
    }
    needlePosition++;
  }
  return found;
}




var haystack = ['cat', 'dog', 'bird', 'turtle', 'lizard'];
var needle = ['dog', 'lizard', 'flower', 'monkey', 'unicorn']
var output = null;

output = search_array(haystack, needle);
console.log(output); //outputs ['dog','lizard'];
