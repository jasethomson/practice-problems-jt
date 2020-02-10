
// $(".country").each(function (index, country) {
//   $("table").css("border-collapse", "collapse");
//   if ($(country).text() === "USA") {
//     let parent = $(country).parent();
//     $(parent).css({"border-style": "solid", "border-color": "red", "border-width": "2px"});
//   }
// });

// const cities = [];
// $(".city").each(function (index, city) {
//   cities.push($(city).text());
// });

// console.log(cities);

const cars = [
  { name: "Car One", type: "Coupe", year: 2017},
  { name: " Car Two", type: "Sedan", year: 1992 },
  { name: " Car Three", type: "Truck", year: 2007 },
  { name: " Car Four", type: "Convertible", year: 2010 },
  { name: " Car Five", type: "Truck", year: 2014 },
  { name: " Car Six", type: "Truck", year: 2010 },
  { name: " Car Seven", type: "Sedan", year: 1996 },
  { name: " Car Eight", type: "Coupe", year: 2016 },
  { name: " Car Nine", type: "Sedan", year: 2019 }
];

// const sedans = [];
// cars.map(car => {
//   if(car.type === "Sedan"){
//     sedans.push(car);
//   }
// })

// console.log(sedans);

const table = $("<table>").css({"border-collapse":"collapse", "border": "1px solid black"});
const tableHead = $("<thead>");
const tHeadTr = $("<tr>");
const tHeadName = $("<th>").text("Name").css("border", "1px solid black");
const tHeadType = $("<th>").text("Type").css("border", "1px solid black");
const tHeadYear = $("<th>").text("Year").css("border", "1px solid black");

tHeadTr.append(tHeadName, tHeadType, tHeadYear);
tableHead.append(tHeadTr);
table.append(tableHead);

for(let carI = 0; carI < cars.length; carI++){
  let tRow = $("<tr>").css("border", "1px solid black");
  let tName = $("<td>").text(cars[carI].name).css("border", "1px solid black");
  let tType = $("<td>").text(cars[carI].type).css("border", "1px solid black");
  let tYear = $("<td>").text(cars[carI].year).css("border", "1px solid black");
  tRow.append(tName, tType, tYear);
  table.append(tRow);
}

$("body").append(table);
