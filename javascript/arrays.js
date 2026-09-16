gods = ['Athena','Zeus','Syspheus','Narcissus']
console.log(gods);
console.log(gods[0]);

// push - adds elements
gods.push("Hera");

console.log(gods);

// splice - adds elements at a specific space, by shifting other elements by +1.
gods.splice(3,0,"Posiden")

console.log(gods);

// pop - removes elements 
gods.pop();
console.log(gods);

// reverse - mirrors an array
gods.reverse()
console.log(gods);

// in js arrays are also heterogeneous

list = ["Leopold",4,33.44]
console.log(list);



