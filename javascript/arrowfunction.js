// arrow functions

// 1. syntax

const sayHello = () =>{
    console.log("Hello, folks.");

};
sayHello();

// const addnum = (a,b) =>{
//     return a+b;
// };

const addnum = (a,b) => a+b; // one liner

console.log(addnum(2,3));

// 2. argument keyword

function multiplynumber() {
    console.log(arguments);
    
}

multiplynumber(10,23,45);


// 3. Hoisting

sayKonichiwa();

function sayKonichiwa() {
    console.log("Konichiwa Minasan!");
    
    
}

