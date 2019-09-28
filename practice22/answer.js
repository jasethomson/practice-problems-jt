function sort_object_list_by_field(array, field){
  var swapped = true;
  switch(field){
    case 'name':
      var prop = 'name';
      break;
    case 'age':
      var prop = 'age';
      break;
    case 'gender':
      var prop = 'gender';
      break;
  }
  while (swapped){
    swapped = false;
    for(var currentPosition = 0; currentPosition < array.length -1; currentPosition++){
      if(array[currentPosition][prop] > array[currentPosition + 1][prop]){
        var tempholder = array[currentPosition];
        array[currentPosition] = array[currentPosition + 1];
        array[currentPosition + 1] = tempholder;
        swapped = true;
      }
    }
  }
  return array;
}
