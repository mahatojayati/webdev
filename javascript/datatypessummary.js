"use strict"
// datatypes are of two types - primitve and non primitve

// primitve = BigInt, boolean, string, Number, null, undefined, symbol


// symbol - makes the value unique

const score = 140;
const isloggedin = false;
const outsidetemp = null;
let useremail;

const id = Symbol('123');
const anotherid = Symbol('123');
console.log(id === anotherid);

// non primitve  = Array, Objects, Functions

//array
let demons = ["megicula","patolli","lucifero"];
console.log(demons.pop());
console.log(demons.push("dante"));
console.log(demons, typeof(demons));



//objects
let myobjs = {
    name:"jayati",
    age: 20,
    height:164,
}

//function made using variables

const myfunction =  function(){
    console.log("Hello World");
}


