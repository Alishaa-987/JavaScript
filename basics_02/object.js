//  object ko do tarha se declare kia ja sakta hee 
//  literals     jo abhe define hoa hee



//  singelton jo ke constructor ke through banta hee


const JsUser = {
    name: "Hitesh",
    "full name": "Hitesh Choudhary",
    [mySym]: "mykey1",
    age: 18,
    location: "Jaipur",
    email: "hitesh@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser.email)
// console.log(JsUser["email"])
// console.log(JsUser["full name"])
// console.log(JsUser[mySym])

// simply in that we define object but we can access object with .operator 
// we can simply access that with sq bracktes also             alternative way 
//but if we define our key in string there is no other way expect that we use square brackets instead of .operator for getting our vlaue



// we can also freeze our object so noobody can change that 
JsUser.email = "hitesh@chatgpt.com"
// Object.freeze(JsUser)
JsUser.email = "hitesh@microsoft.com"
// console.log(JsUser);                  in that case its not changed



//           *********************************************FUNCTION ****************************************************
/*
function ko hmm variable ke tarha treat kar sakte hee or  first wala simple function he or dosra wala hmm n object se value nikale
he with the help of string interpolation
*/
JsUser.greeting = function(){
    console.log("Hello JS user");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo()); 



// +++++++++++++++++++++++++++ SINGELTON AND NON SINGELTON OBJECT +++++++++++++++++++++++++++++

// const tinderUser = new Object()
// console.log(tinderUser)             // that how we declare singelton object

const tinderUser = {}
tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

// console.log(tinderUser);
console.log(tinderUser)          // thats how we decclare non sigelton objecct

// we can make object in objecct and can easily access that 
const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "hitesh",
            lastname: "choudhary"
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstname);



// hwo to add object 
const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}


const obj3 = {...obj1, ...obj2}    // same as array method 
// console.log(obj3);


// const obj3 = { obj1, obj2 }          alternative way 
// const obj3 = Object.assign({}, obj1, obj2, obj4)



// Hmm array me object bhe use kar sakte hee

const users = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
]
         users[1].email



// ab hamare pas object he jis me is ke key value pair hota hee or ab hmm object me se keys ya phir value ko output me lana chah rahe hee
// is ke output array me aye ge jis pr hmm loop lagva kar kafi kam kar sakte hee

    // console.log(tinderUser);
    // console.log(Object.keys(tinderUser));
    // console.log(Object.values(tinderUser));

// // console.log(Object.entries(tinderUser));
// entites is liye use hote hee jab hmm har key value pair ko aik array me display karvana chah rahe hote hee


// jab answer array me ata hee to tab hmm us pr properties laga kar check kar sakte hee 
console.log(tinderUser.hasOwnProperty('isLoggedIn'));      // check karna is me ye property exist karte he ya nahi




                 // ******************************************DESTRUCTURING ************************************************
//Destructuring is about taking values out of an array or object and storing them in variables,
//so instead of accessing them again and again with indexing (arr[0], obj.key),
//you can use the values directly through variable names.

// Without destructuring:
const colors = ["red", "blue", "green"];
console.log(colors[0]); // red
console.log(colors[1]); // blue


// With destructuring:
const [first, second] = colors;
console.log(first); // red
console.log(second); // blue


// example with objects:
// You have a lunchbox:

//               +++++++++++++++++++++++++++++++++++++++  WITH  OBJECTS ++++++++++++++++++++++++++++++++++++++
const lunchBox = {
  fruit: "apple",
  drink: "juice"
};
// Now instead of:
const fruits = lunchBox.fruit;
const drinks = lunchBox.drink;
// You do:


const { fruit, drink } = lunchBox;
// Now you have:


console.log(fruit); // apple
console.log(drink); // juice




