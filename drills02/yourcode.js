
/*
- countOccurences:
	- given an array of words and a separate word, count how many times a particular word given occurs within that array for example:
	- input ['dog','cat','dog','pig','canary','cat','dog'], 'dog'
	- returns 3

*/

function countOccurences(wordsArray, separateWord) {
  let count = 0;
  wordsArray.map(word => {
    if (word === separateWord) count++;
  });
  return count;
}
/*
- wordLengths:
	- given an array of words, return an array of numbers representing the length of each word For example:
	- input ['canary','silly','dog','a','mellow'])
  - return [6,5,3,1,6]
*/

function wordLengths(arrayOfWords) {
  let arr = [];
  arrayOfWords.map(word => arr.push(word.length));
  return arr;
}
/*
- getMinMaxMean: given an array of numbers, get the minimum, maximum, and mean numbers. Return them as an object. Mean is another word for average For example:
	- input [3,1,9,12,4]
  - return: {min: 1, max: 12, mean: 25.8}
*/
function getMinMaxMean(arrayOfNumbers) {
  const deets = {
    min: arrayOfNumbers[0],
    max: arrayOfNumbers[0],
    mean: 0
  };
  let total = 0;
  arrayOfNumbers.map(num => {
    if (num > deets.max) deets.max = num;
    if (num < deets.min) deets.min = num;
    total += num;
  });
  deets.mean = total / arrayOfNumbers.length;
  return deets;
}
/*
- findMode: Given an array of numbers, find the number that occurs the most often for example:
	- input [5,2,7,18,2,42,5,2]
  - returns 2, since it occurs 3 times. If 2 numbers occur the same amount, return the last one
*/

function findMode(arrayNumbers) {
  const modeObj = {};
  arrayNumbers.map(num => {
    typeof modeObj[num] === "number" ? modeObj[num] += 1 : modeObj[num] = 1;
  });
  let occurs = 0;
  let mode = arrayNumbers[0];
  for (const num in modeObj) {
    if (modeObj[num] > occurs) {
      occurs = modeObj[num];
      mode = num;
    }
  }
  return parseInt(mode);
}
