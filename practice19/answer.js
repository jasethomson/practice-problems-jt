function sort_object_list_by_name(arr){
  let len = arr.length -1;
  for (let index1 = 0; index1 < len; index1++){
    for (let index2 = 0; index2 < len; index2++){
      if(arr[index2].name > arr[index2 + 1].name){
        let tmpSpot = arr[index2];
        arr[index2] = arr[index2+1];
        arr[index2 + 1] = tmpSpot;
      }
    }
  }
  console.log(arr);
}
const input_array =
  [
    { name: 'John', age: 42, gender: 'M' },
    { name: 'Jack', age: 34, gender: 'M' },
    { name: 'Michael', age: 40, gender: 'M' },
    { name: 'Kendra', age: 48, gender: 'F' }
  ];

sort_object_list_by_name(input_array);
