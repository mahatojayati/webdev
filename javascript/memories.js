// primitive datatype - stack
// non primitve datatype - heap

let accesscode = "error@12345";
console.log(accesscode);

let changedpassword = "bugs@3445";

accesscode = changedpassword;
console.log(accesscode);

let carduser ={
    name:"jake",
    cardnumber:9984753,
    pin: 3344,
}

let newcarduser = carduser;
newcarduser.pin = 1221;
console.log(carduser.pin);
console.log(newcarduser.pin);
