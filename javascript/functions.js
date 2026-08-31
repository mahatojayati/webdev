"use strict"
function add(number1, number2) {
     console.log(number1+number2);
}

add(12,34.34)

function multiply(number1, number2) {
    return number1*number2;
}
let multiplyresult = multiply(12, 56)
console.log("User the result is", multiplyresult);



function addnumbers() {
    let result  = 0
    for(let i = 0; i<arguments.length; i++)
    {
        result = result + arguments[i]
    }
    return result
}
let addresult = addnumbers(10,23,4,6,3,75,4)
console.log(result);

