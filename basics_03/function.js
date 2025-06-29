
function sayMyName(){
    console.log("H");
    console.log("I");
    console.log("T");
    console.log("E");
    console.log("S");
    console.log("H");
}

// sayMyName()

// function addTwoNumbers(number1, number2){

//     console.log(number1 + number2);
// }

function addTwoNumbers(number1, number2){

    // let result = number1 + number2
    // return result
    return number1 + number2
}
// return ke bas kuch bhe execute nahi hota

const result = addTwoNumbers(3, 5)

// console.log("Result: ", result);


function loginUserMessage(username = "sam"){    // agr hmm argument pass nahi kar rahe to parameter me value dene pare gee otherwise undefined
    if(!username){            // username === undefined 
        console.log("PLease enter a username");
        return
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("hitesh"))    // ye tab jab hmm apne marze se argument pass kare gee
// console.log(loginUserMessage("hitesh"))





function calculateCartPrice(val1, val2, ...num1){
    return num1                                        // num1 me value 500 , 2000
}

// console.log(calculateCartPrice(200, 400, 500, 2000))

// *********************************************function and object************************************************8

const user = {
    username: "hitesh",
    prices: 199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

// handleObject(user)          // hmm pehle object define kar ke is tarha kar sakte hee or functoin call karvate waqat bhe object pass kar sakte hee 

handleObject({
    username: "sam",
    price: 399
})

// ___________________________________ARRAY AND FUNCTION ________________________________________________________

const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 400, 500, 1000]));