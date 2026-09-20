
const students = ["Leon","Kelly","Jane"]

const given_numbers = [1,2,3,4,5,6,7]
//high order functions 
// 1 .ForEach() = The forEach() function in JavaScript is a built-in array method that executes a provided callback function once for each element in an array. it's for calling and printing purposes, doesn't return a value.
function print(n)
{
    console.log(n);
    
}

students.forEach (print)

//2 map() = the .map() function, is used to perform tasks, do operations on original array, and it returns values

function double(num) {
    return num*2;
    
}
let newArr = given_numbers.map(double)
console.log(newArr);

//3 .find() function, used to find an element, if element present, it is returned, or else undefined.

let answer_number = given_numbers.find(num => num === 6)

console.log(answer_number);

//4 .findIndex() function, is used to return the index of the element if present in an array.

let answer_index = given_numbers.findIndex(num => num === 12)

console.log(answer_index);

// 5 .includes() function, returns a boolean value based on the presence of the element.

let answer_element = given_numbers.includes(9)
console.log(answer_element);

// 6 .filter() function, filters out elements based on certain conditions.

let filter_element = given_numbers.filter((num) => num%2 == 0)
console.log(filter_element);

// 7 .slice() function, slices and return a slice of elements.

let slice_element = given_numbers.slice(1,6)

console.log(slice_element);

// 8 .splice() function, used to add or delete elements at custom indexes in array

let splice_element = given_numbers.splice(1,2)
console.log(splice_element);










