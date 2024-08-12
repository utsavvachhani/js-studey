const user = {
    username : "Utsav",
    price: 999,
    welcomeMessage: function(){
        console.log(`${this.username},welcome to Webside`);
        console.log(this);
    }
}

// user.welcomeMessage();
// user.username = "Priya";
// user.welcomeMessage()

/* Output
Utsav,welcome to Webside
{
  username: 'Utsav',
  price: 999,
  welcomeMessage: [Function: welcomeMessage]
}
Priya,welcome to Webside
{
  username: 'Priya',
  price: 999,
  welcomeMessage: [Function: welcomeMessage]
}*/

// console.log(this);  // output => {}

function coding(){
    console.log(this);
    
}
// coding();

/* output
<ref *1> Object [global] {
  global: [Circular *1],
  queueMicrotask: [Function: queueMicrotask],
  clearImmediate: [Function: clearImmediate],
  setImmediate: [Function: setImmediate] {
    [Symbol(nodejs.util.promisify.custom)]: [Getter]
  },
  structuredClone: [Getter/Setter],
  clearInterval: [Function: clearInterval],
  clearTimeout: [Function: clearTimeout],
  setInterval: [Function: setInterval],
  setTimeout: [Function: setTimeout] {
    [Symbol(nodejs.util.promisify.custom)]: [Getter]
  },
  atob: [Getter/Setter],
  btoa: [Getter/Setter],
  performance: [Getter/Setter],
  fetch: [AsyncFunction: fetch]
}
  */

function coding(){
    let username = "utsav";
    console.log(this.username);   
}
// coding();   // output => undefined


const coding2 = function () {
    let username = "utsav";
    console.log(this.username);   
}
// coding2(); // output => undefined

const coding3 =  () => {
    let username = "utsav";
    console.log(this.username);   
}
// coding3(); // output => undefined

const addTwo1 = (nums1,nums2) => {
    return nums1+nums2;
}
// console.log(addTwo1(4,3)); // output => 7

const addTwo2 = (nums1,nums2) => nums1+nums2
// console.log(addTwo2(2,6));   // output => 8

const addTwo3 = (nums1,nums2) => (nums1+nums2)
console.log(addTwo3(2,6));   // output => 8
