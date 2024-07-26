const score = 178
console.log(score);

const balance = new Number(1000);
console.log(balance);

console.log(balance.toString().length);
console.log(balance.toFixed(2));

const otherNumber = 123.8966 ; 
console.log(otherNumber.toPrecision(4));

const hunders = 10000000000 ;
console.log(hunders.toLocaleString('en-IN')); //convert number to the indian standered like ,,


//+++++++++++++++++++++ Maths ++++++++++++++++++++++++++++++++++++
console.log(Math.abs(-20)); //convert Minues to Plues
console.log(Math.round(4.6)); //given the round number in integers
console.log(Math.ceil(4.2)); //hoing to upper of the number as like round
console.log(Math.floor(4.6)); //hoing to lower of the number as like round
console.log(Math.min(4,6,20,78)); //finding minimum value
console.log(Math.max(4,6,20,78)); //finding maximum value

console.log(Math.random()); //random value
console.log((Math.random()*10) +1);
console.log(Math.floor(Math.random()*10) +1);

const min = 10
const max = 20 

console.log(Math.floor(Math.random() * (max - min + 1)) + min);