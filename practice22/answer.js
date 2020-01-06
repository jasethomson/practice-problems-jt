function sort_object_list_by_field(arr, field){
  for(let i = 0; i < arr.length; i++){
    for(let j = 0; j < arr.length-1; j++){
      if(arr[j][field] > arr[j+1][field]){
        let temp = arr[j];
        arr[j] = arr[j+1];
        arr[j+1] = temp;
      }
    }
  }
  return arr;
}

var input_array =
  [
    { name: 'John', age: 42, gender: 'M' },
    { name: 'Jack', age: 34, gender: 'M' },
    { name: 'Michael', age: 40, gender: 'M' },
    { name: 'Kendra', age: 48, gender: 'F' }
  ];

console.log(sort_object_list_by_field(input_array, "name"));
