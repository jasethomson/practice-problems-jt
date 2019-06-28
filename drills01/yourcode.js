
function sumArray(array){
  var index = 0;
  var sum = 0;
  while(index<array.length){
    sum += array[index];
    index++;
  }
  return sum;
}

function fitWithinVal(array, number){
  var newArray = [];
  var sum = 0;
  for (var index = 0;index<array.length; index++){
    sum += array[index];
    //var sumAfterNextNum = su
    if(sum < number){
      newArray.push(array[index]);
    } else {
      sum -= array[index];
    }
  }

  return newArray;
}
function getAllNamesShorterThan(array, value){

  var newArray = [];
  for(var index =0; index<array.length; index++){
    //debugger;
    var name = array[index];
    if(name.length < value ){
      newArray.push(name);
    }
  }
  return newArray;
}

function makeLabel(object){
  var familyName = (object.familyName);
  var givenName = (object.givenName);
  var greeting = (object.greeting);
  var streetNumber = (object['home address'].streetNumber);
  var streetName = (object['home address'].streetName);
  var city = (object['home address'].city);
  var state = (object['home address'].state);
  var zip = (object['home address'].zip);
  var name = greeting + ' ' + givenName + ' ' + familyName + '\n';
  var streetAddress = streetNumber + ' ' + streetName + '\n' + city + ', ' + state + ' ' + zip;
  return(name + streetAddress);
}
