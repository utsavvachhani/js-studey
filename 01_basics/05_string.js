const name = "utsav"
const repoCount = 12

console.log(name + repoCount + " Value");

console.log(`Hello My name is ${name} and my repo count is ${repoCount}`);

const gamename = new String('farmHouse')

console.log(gamename[0]);
console.log(gamename.__proto__);
console.log(gamename.toUpperCase()); //upper case
console.log(gamename.charAt(4));  //posittion at which key word
console.log(gamename.indexOf('r')); //finding the charchter possition

const newString = gamename.substring(0,4);
console.log(newString);

const anotherString = gamename.slice(-8,4);
console.log(anotherString);

const stringTrim = "    utsav      ";
console.log(stringTrim);
console.log(stringTrim.trim());


const url ="https://utsav.git.io/webside.io%20WT_lab"
console.log(url.replace('%20','-')); //replaced same with same
console.log(url.includes('utsav')); //Questions

console.log