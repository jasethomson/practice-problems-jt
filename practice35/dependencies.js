
var dependencies = [
  {
    name: 'superCool',
    dependencies: [
      'awesome',
      'stdio',
      'moocow'
    ]
  },
  {
    name: 'mrMan',
    dependencies: [
      'sayWhat',
      'stdio',
      'iPity'
    ]
  },
  {
    name: 'moocow',
    dependencies: [
      'bovine',
      'quadrapated'
    ]
  },
  {
    name: 'stdio',
    dependencies: [
      'c_lib',
      'keys',
    ]
  }
]

var injectArray = [];
var mainVar = 0;
var secondVar = 0;
var nextMainVar = dependencies.length-1;
var nextSecondVar = 0;
var countOfArrayLength = 0;
var countOfSecondaryArray = 0;
var lengthOfSecondaryArray = dependencies[nextMainVar].dependencies.length;
while(countOfArrayLength < dependencies.length-1){
  lengthOfSecondaryArray = dependencies[nextMainVar].dependencies.length;
  if ((injectArray.indexOf((dependencies[mainVar].dependencies[secondVar]))< 0)){
    injectArray.push(dependencies[mainVar].dependencies[secondVar]);
  }
  while(countOfSecondaryArray < lengthOfSecondaryArray){
    if ((injectArray.indexOf((dependencies[nextMainVar].dependencies[nextSecondVar]))<0)){
      injectArray.push(dependencies[nextMainVar].dependencies[nextSecondVar]);
    }
    countOfSecondaryArray++;
    nextSecondVar++;
  }
  nextSecondVar = 0;
  countOfSecondaryArray = 0;
  countOfArrayLength++;
  secondVar++;
  nextMainVar--;
}
console.log("injectArray",injectArray);
