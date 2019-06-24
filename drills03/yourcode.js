
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


/*
var testVals = [{
  question: `getPath: given a path string, return an array with the different parts of the path
    for example: 'folder1/folder2/folder3'
        returns ['folder1','folder2','folder3']
  `,
  testVals: {
    inputs: [
        ['var/www/html'],
        ['stuff/thing/stuff/howdy'],

    ],
    outputs:
    [  ['var','www','html'],
       ['stuff','thing','stuff','howdy'],
    ]
  },
  functionToTest: 'getPath'
  */

function getPathParts(){

}

function getCapitalCount(){

}

function correctCalcChecker(){

}

function doMath(){

}
