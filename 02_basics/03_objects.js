// singleton
// Object.create
// Object literals
const sym = Symbol("key1");

const JsUser = {
    name: "Utsav",
    "Full name": "Vachhani Utsav",
    [sym]:"UV21",
    age:"20",
    location: "Surat" ,
    email: "vachhaniutsav2@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday" , "Saturday"]
}

console.log(JsUser.email);
console.log(JsUser["email"]);
console.log(JsUser["Full name"]);
console.log(JsUser[sym]);

JsUser.email = "utsav@chatgpt.com"
// Object.freeze(JsUser); //freez the value
JsUser.email = "utsav@priya@com"
console.log(JsUser.email);

JsUser.greeting = function () {
    console.log("Hello i am utsav");
}

console.log(JsUser.greeting);

JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());