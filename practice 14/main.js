Document.ready(app);

function app(){
  const testArray = [4, 2, 8, 6, 3, 9];
  arrayFactors(testArray);
}

function arrayFactors(array){
  let returnDiv = $("<div>");
  returnDiv.text("Hello, World!");
  $("body").append(returnDiv);
  console.log("array", array);
}
