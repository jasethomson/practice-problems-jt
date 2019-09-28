function randomize_list(array){
  var arrayLength = array.length;
  var arrayCopy = array;
  var rando;
  var tempHolder;
  var counter = 0;
  while(counter < arrayLength){
    // debugger;
    rando = Math.floor(Math.random()*arrayCopy.length);
    tempHolder = array.pop();
    arrayCopy.splice(rando,0, tempHolder);


    counter++;
  }
  return array;
}
