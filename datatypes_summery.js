// Data types have two categories based on how to store and access them.
//primitive & non primitive
//primitive

// 7 types : string, number, boolearn, null, undefiend, symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

//const bigNumber = 25345346732523453543432n




//  Refrence (Non primitive)

// Array, Objects, Functions

const heros = ["thor", "iron man", "cap america"]
let myObj = {
    name: "purna",
    age: 19,
}

const myFunction = function(){
    console.log("hello purna");
}

//console.log(typeof id);

//https://tc39.es/ecma262/#sec-typeof-operator



// +++++++++++++++++++++++++++++++++++++++++++

//memotry
// stack (primitive) , heap (Non-primitive)

let myYoutubename = "gloomy"

let anothername = myYoutubename
anothername = "purna"

console.log(myYoutubename);
console.log(anothername);

let userOne = {
    email: "user@gmail.com",
    upi:"user@ybl"
}

let userTwo = userOne

userTwo.email = "purna@gmail.com"

console.log(userOne.email);
console.log(userTwo.email);
