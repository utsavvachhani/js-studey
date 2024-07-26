//function defination
function sayMyName(){
    console.log("u");
    console.log("t");
    console.log("s");
    console.log("a");
    console.log("v");
}

//declertion
sayMyName()

function addTwonumbers(number1, number2) {
    console.log(number1+number2);
}

addTwonumbers(3,4) //7
addTwonumbers(3,"4") //34

const result = addTwonumbers(2,5);
console.log("Result : " ,result);


function addTwoNumber_usingReturnType(number1,number2) {
    let result = number1 + number2;
    return result ;
}

const result_r = addTwoNumber_usingReturnType(32,45);
console.log(result_r);


function loginUserMassage(username){
    if(username === undefined){      // equle to !username
        console.log("Please enter the username");
        return
    }
    return `&{username} just logged in`
}

console.log(loginUserMassage("utsav")); //utsav just logged in
console.log(loginUserMassage()); //Please enter the username


function calculateCartPrice(val1, val2, ...num1){
    return num1
}

// console.log(calculateCartPrice(200, 400, 500, 2000))

const user = {
    username: "hitesh",
    prices: 199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

// handleObject(user)
handleObject({
    username: "sam",
    price: 399
})

const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 400, 500, 1000]));