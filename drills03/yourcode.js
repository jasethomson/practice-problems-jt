/*
- getPath: given a path string, return an array with the different parts of the path for
	- example: 'folder1/folder2/folder3'
	- returns ['folder1','folder2','folder3']
*/

function getPath(pathString){
  var newPathArray = [];
  var stringHolder = '';
  var lastString = '';
  var pathContainer = pathString;
  while(pathContainer.length>0) {
    if(pathContainer.indexOf('/')>0){
      stringHolder = pathContainer.slice(pathContainer.lastIndexOf('/'));
      newPathArray.push(stringHolder);
    } else {
      lastString = pathContainer;
      newPathArray.push(lastString);
    }
    console.log(newPathArray);
  }
}

function getPathParts(){

}

function getCapitalCount(){

}

function correctCalcChecker(){

}

function doMath(){

}
