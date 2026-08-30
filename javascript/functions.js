// "use strict"
// function add(number1, number2) {
//      console.log(number1+number2);
// }

// add(12,34.34)

// function multiply(number1, number2) {
//     return number1*number2;
// }
// let result = multiply(12, 56)
// console.log("User the result is", result);


function sumofallnumbers() {
    let ans = 0;
    for(let i = 0; i<arguments.length; i++)
    {
        ans = ans+arguments[i];
    }
}
 let result = sumofallnumbers(10,23,55,45)
 console.log(result);
    
    
