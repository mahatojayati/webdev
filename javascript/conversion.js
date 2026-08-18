"use strict"
let score

console.log(typeof score);
console.log(typeof(score));

let valueinnumber  = Number(score);

console.log( typeof valueinnumber);
console.log(valueinnumber);

// "33" - 33
// "33qwerty" - NaN
// "1 or 0" - true/false
let value  = 0;
console.log(Boolean(value));

// ' ' - false
// -1 - true
// 0 - false

// check negation of values
let negativevalue  = 5;
console.log(-negativevalue);

//str operations
let firstname = "Jayati";
let lastname = " Mahato";
let fullname = firstname+lastname;
console.log(fullname);

console.log(1 + "2");
console.log("2" + 1);
console.log(2 + 2 + "1");

//conversion
console.log(+true);
console.log(+"");

// data conversions 
let num1, num2, num3
num1 = num2 = num3 = 4.3;
console.log(num1)
console.log(num2)
console.log(num3)

let gamecounter = 100;

gamecounter++;
console.log(gamecounter);
--gamecounter;
console.log(gamecounter);







