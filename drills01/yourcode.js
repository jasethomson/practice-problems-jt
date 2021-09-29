function sumArray(array) {
  let total = 0;
  array.map(num => total += num);
  return total;
}

function fitWithinVal(array, number) {
  let total = 0, newArr = [];
  array.map(num => {
    if (total + num <= number) {
      total += num;
      newArr.push(num);
    }
  });
  return newArr;
}
function getAllNamesShorterThan(array, value) {
  let newArr = [];
  array.map((name, index) => {
    if (name.length < value) newArr.push(name);
  });
  return newArr;
}

function makeLabel(object) {
  return `${object.greeting} ${object.givenName} ${object.familyName}\n${object['home address'].streetNumber} ${object['home address'].streetName}\n${object['home address'].city}, ${object['home address'].state} ${object['home address'].zip}`;
}
