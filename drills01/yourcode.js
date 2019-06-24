function sumArray(array){
  var index = 0;
  var sum = 0;
  while(index<array.length){
  sum += array[index];
  console.log(sum);
  index++;
  }
  return sum;
}

function fitWithinVal(array, num){
  var index = 0;
  var sum = 0;
  var newArray = [];
  while(sum < num) {
    sum += array[index];
    if (sum < num){
      newArray.push(array[index]);
      console.log('sum ', sum);
      console.log('newArray ',newArray);
    } else if(sum > num) {
      sum -= array[index];
      console.log('sum ', sum);
      console.log('newArray ', newArray);
    }
    else {
      return newArray;
    }
    index++;
  }
}

function getAllNamesShorterThan(array, num){
  var index = 0;
  var newArray = [];
  while(index<array.length){
    var string = array[index];
    if(string.length<num){
      newArray.push(string);
      console.log(newArray);
    }
    index++;
  }
  return newArray;
}
/*
 question: `given an object with data for a person in it, generate a
  shipping label in the following form:
    Miss Jane Doe<br>
    123 Any St<br>
    Springfield, Ma 12345
    Please note that the next lines are generated via newlines`,
  testVals: {
    inputs: [
      [{'familyName' : 'Paschal','givenName': 'Daniel','greeting': 'Mr.','age': 43,'height' : 185,'colors': {'eye': 'blue','hair': 'brown'},'home address': {'streetNumber': '9200','streetName': 'Irvine Center Drive','state': 'CA','zip': 92618,'city': 'Irvine'}}],
      [{'familyName' : 'McGee','givenName': 'Chuckles','greeting': 'Miss.','age': 28,'height' : 165,'colors': {'eye': 'green','hair': 'green'},'home address': {'streetNumber': '12345','streetName': 'Any St','state': 'Mo','zip': 63102,'city': 'Kansas City'}}],
    ],
    outputs: [`Mr. Daniel Paschal
9200 Irvine Center Drive
Irvine, CA 92618`,`Miss. Chuckles McGee
12345 Any St
Kansas City, Mo 63102`
    ]
  },
  functionToTest: 'makeLabel'
}]

*/
function makeLabel(familyObject){
  //var index = 0;
  var shippingLabel = '';
  var firstAddressInfo = familyObject.inputs[0][0];
  var secondAddressInfo = familyObject.inputs[0][1];
  shippingLabel += (firstAddressInfo.greeting + ' ');
  shippingLabel += (firstAddressInfo.givenName + ' '<br>);
  shippingLabel += (firstAddressInfo.familyName + ' '+);
  shippingLabel += (firstAddressInfo.streetNumber + ' ');
  shippingLabel += (firstAddressInfo.streetName + ' ');
  shippingLabel += (firstAddressInfo.city + ' ');
  shippingLabel += (firstAddressInfo.state + ' ');
  shippingLabel += (firstAddressInfo.zip + ' ');

  //while(familyArray[index]!== 1){
  console.log(shippingLabel);
  //}
}
