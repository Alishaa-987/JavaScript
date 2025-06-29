 // let              var             const
//  let a = 10 
//  const b = 20
//  var c  = 30

// these are simple varaibal decleration but if we define that same in the function and then want to console then let and const 
// give output because there scope is limited to that fuction and in every function the block of code or scope of something is 
// defined by the curly brackets 

function name (){
    let a = 10 
    const b = 20
    var c  = 30
}
    console.log(a)   // it give error 
    console.log(b)   // same here 
    console.log(c)   // but its scope is global 

    // problme arise when we declare same varaiblae outside the function and also inside the fuction with the same name 
    // in that case scope is prefered and inside the curly brackets variable is prefered 

    // let and const come because they dont allow to make same name variaable


    // curly brackets => block level scope
    // anywhere in the code => global scope


    if (true) {
    const username = "hitesh"
    if (username === "hitesh") {
        const website = " youtube"
        // console.log(username + website);
    }
    // console.log(website);
}

// console.log(username);


// is me ye bataya gya hee k agr hmm curly braces laga dete hee to us varaiabl ka sccope waha tak limited ho gata hee hm us variable ko baher access nahi kar sakte 
// webiste ko curly braces ke ander declare or initilaize kia gya tha lakin baher access kar rahe hee to error aye gaa same as username 

// -------------------------------------- FUNCTION DECLERATION TYPES -------------------------------------

function addone(num){
    return num + 1
}
console.log(addone(5))
// this is simple jaise hmm pehle karte hee lakin is ko hmm is tarha bhe likh sakte hee
// it give no error 

console.log(addone(5))

function addone(num){
    return num + 1
}


// function ko is tarha bhe declare kia ga sakta hee is ko hmm expression ke foam me kehte hee 
const addTwo = function(num){
    return num + 2
}
addTwo(5)


// age hmm is ko is tarha declare kare gee to error aye gaa ku k hmm n is ko bad me variable ke tarha initaize kar dia hee
addTwo(5)
const addTwoo = function(num){
    return num + 2
}
