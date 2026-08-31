// arrow functions

// syntax

const sayHello = () =>{
    console.log("Heyy.");

};
sayHello();

// const addnum = (a,b) =>{
//     return a+b;
// };

const addnum = (a,b) => a+b; // one liner

console.log(addnum(2,3));

// argument keyword

function multiplynumber() {
    console.log(arguments);
    
}

multiplynumber(10,23,45);
