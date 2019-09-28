function lcs(param1, param2){
  var needle;
  var haystack;
  var newString = "";
  var tempString ="";
  var counterForHaystack = 0;
  var counterForNeedle = 0;
  if(param1.length<param2.length){
    needle = param1;
    haystack = param2;
  } else {
    needle = param2;
    haystack = param1;
  }
  while (counterForNeedle < needle.length){
    if(needle[counterForNeedle] === haystack[counterForHaystack]){
      while(needle[counterForNeedle] === haystack[counterForHaystack]){
        tempString += needle[counterForNeedle];
        counterForNeedle++;
        counterForHaystack++;
      }
      newString = tempString;
      tempString = "";
      counterForNeedle = 1;
    }
    counterForNeedle++;
    counterForHaystack++;
  }
  return newString;
 }
