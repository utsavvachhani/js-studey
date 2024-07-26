// const tinderUser = new Object()
const tinderUser = {} 
tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false 

// console.log(tinderUser); 
const regularUser = {
    email: "vachhani@gmail.com",
    fullname: {
        username : {
            firstname: "Utsav" ,
            lastnamee: "Vachhani"
        }
    }
}
// console.log(regularUser.fullname.username.firstname);

const obj1 = {1:"a" ,2: "b"}
const obj2 = {3:"a" ,4: "b"}
const obj4 = {5:"a" ,6: "b"}

// const obj3 = { obj1, obj2 }
// const obj3 = Object.assign({} , obj1 , obj2 , obj4)
const onj3 = {...obj1, ...obj2}
// console.log(obj3);

const user = [
    {},
    {
        id : 1 ,
        email: "utsav@gmail.com"
    },
    {
        id : 1 ,
        email: "utsav@gmail.com"
    },
    {
        id : 1 ,
        email: "utsav@gmail.com"
    }
]

user[1].email

// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));
// console.log(tinderUser.hasOwnProperty('isLoggedIn'));


const course = {
    coursenaame: "Js",
    price : "2115",
    courseInstructor: "Me"
}

// course.courseInstructor

const {courseInstructor} = course
// console.log(courseInstructor);

// api 
// {
//     "name" : "utsav",
//     "age"  : "20",
//     "Location" : "Surat"
// }

