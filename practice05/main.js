function print(){
  var counter = 1;
  while(counter <= 100){
    if (counter % 3 === 0 && counter % 5 === 0){
      console.log("fizzBuzz");
    } else if(counter % 5 === 0){
      console.log("buzz");
    } else if (counter % 3 === 0){
      console.log("fizz");
    } else{
      console.log(counter);
    }
    counter++;
  } 
}
