function sort_object_list_by_name(array){
  var swapped = true;
  while(swapped){
    swapped = false;
    for(var index = 0; index < array.length -1; index++ ){
      if(array[index].name > array[index + 1].name) {
        var tempHolder = array[index];
        array[index] = array[index + 1];
        array[index + 1] = tempHolder;
        swapped = true;
      }
    }
  }
  return array;
}
var input_array =
  [
    { name: 'John', age: 42, gender: 'M' },
    { name: 'Jack', age: 34, gender: 'M' },
    { name: 'Michael', age: 40, gender: 'M' },
    { name: 'Kendra', age: 48, gender: 'F' }
  ];

sort_object_list_by_name(input_array);
