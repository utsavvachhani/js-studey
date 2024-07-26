//  Primitive

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

// const bigNumber = 3456543576654356754n



// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "hitesh",
    age: 22,
}

const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof anotherId);

// https://262.ecma-international.org/5.1/#sec-11.4.3



// **************************** Memory ********************************************

// stack(Primitive) ,  Heap (non-Primitive)

let myInstaagramId = "Vachhani_utsav" ; 

let mySeconfId = myInstaagramId;
console.log(myInstaagramId);
console.log(mySeconfId);

let userOne = {
    email : "utsavvachhani2@gmail.com" ,
    upi: "user1@" 
}

let userTwo = userOne;

userTwo.email = "vachhaniutsav2@gmail.com" ;

console.log(userOne.email);
console.log(userTwo.email);