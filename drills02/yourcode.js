
/*
- countOccurences:
	- given an array of words and a separate word, count how many times a particular word given occurs within that array for example:
	- input ['dog','cat','dog','pig','canary','cat','dog'], 'dog'
	- returns 3

*/

function countOccurences(wordsArray, separateWord){
  var countNumberOfOccurences = 0;
  for(var arrayAtReference = 0;arrayAtReference<wordsArray.length; arrayAtReference++) {
    if (wordsArray[arrayAtReference] === separateWord){
      countNumberOfOccurences++;
    }
  }
  return countNumberOfOccurences;
}
/*
- wordLengths:
	- given an array of words, return an array of numbers representing the length of each word For example:
	- input ['canary','silly','dog','a','mellow'])
  - return [6,5,3,1,6]
*/

function wordLengths(arrayOfWords){
  var newArrayOfNumbers = [];
  for(var arrayCounter = 0; arrayCounter<arrayOfWords.length; arrayCounter++){
    var lengthOfArray = arrayOfWords[arrayCounter].length;
    newArrayOfNumbers.push(lengthOfArray);
  }
  return newArrayOfNumbers;
}
/*
- getMinMaxMean: given an array of numbers, get the minimum, maximum, and mean numbers. Return them as an object. Mean is another word for average For example:
	- input [3,1,9,12,4]
  - return: {min: 1, max: 12, mean: 25.8}
*/
function getMinMaxMean(arrayOfNumbers){
  var numberObject = {};
  var maxNum = arrayOfNumbers[0];
  var minNum = arrayOfNumbers[0];
  var sumNums = 0;
  for ( var numberChecker = 0; numberChecker<arrayOfNumbers.length; numberChecker++){
    sumNums += arrayOfNumbers[numberChecker];
    if (arrayOfNumbers[numberChecker]>maxNum){
      maxNum = arrayOfNumbers[numberChecker];
    } else if (arrayOfNumbers[numberChecker]<minNum){
      minNum = arrayOfNumbers[numberChecker];
    }
  }
  var mean = sumNums / arrayOfNumbers.length;
  numberObject.min = minNum;
  numberObject.max = maxNum;
  numberObject.mean = mean;
  return numberObject;
}
/*
- findMode: Given an array of numbers, find the number that occurs the most often for example:
	- input [5,2,7,18,2,42,5,2]
  - returns 2, since it occurs 3 times. If 2 numbers occur the same amount, return the last one
*/

function findMode(arrayNumbers){
  var numberCounter = 0;
  var occursTheMost = 0;
  var stringNumTheMost = 0;
  for (var numberOfNumbers = 0; numberOfNumbers < arrayNumbers.length; numberOfNumbers++ ){
    var numToCheck = arrayNumbers[numberOfNumbers];
    for (var numChecker = 0; numChecker < arrayNumbers.length; numChecker++) {
      if (numToCheck === arrayNumbers[numChecker]){
        numberCounter++;
      }
    }
    if (numberCounter>occursTheMost){
      occursTheMost = numberCounter;
      stringNumTheMost = numToCheck;
    } else if (numberCounter === occursTheMost){
      occursTheMost = numberCounter;
      stringNumTheMost = numToCheck;
    }
    numberCounter = 0;
  }
  return stringNumTheMost;
}
