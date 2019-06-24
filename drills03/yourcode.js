
function getPath(string){
  var newArray= [];
  var index = 0;
  while(index < string.length){
  if(string.includes('/')) {
    var firstIndex = string.indexOf('/');
    var firstSplice = string.slice(0, firstIndex);
    newArray.push(firstSplice);
    string = string.replace(firstSplice, '');
    string = string.replace('/', '');
    console.log('newArray', newArray);
  } else {
    newArray.push(string);
    string = '';
    console.log('newArray', newArray);
  }
  index++;
  }
  return newArray;
}

function getPathParts(){

}

function getCapitalCount(){

}

function correctCalcChecker(){

}

function doMath(){

}
