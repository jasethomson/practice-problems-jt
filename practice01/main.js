function biggerWords(string, array){
  const strLen = string.length;
  const arrLen = array.length;
  const rtrnArr = [];
  let index = 0;
  while(index < arrLen){
    if(strLen < array[index].length){
      rtrnArr.push(array[index]);
    }
    index++;
  }
  return rtrnArr;
}
const myArray = ['bug', 'insect', 'mammal', 'reptile', 'mammoth', 'turtles'];
console.log(biggerWords("whales", myArray));
