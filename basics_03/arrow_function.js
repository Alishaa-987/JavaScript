// Arrow function current context ko refer karta hee  

const user = {
    username: "hitesh",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`);  // is me this ka matlab jab bhe hmm context change kare gee value automatically change ho gae gee
        console.log(this);
    }

}

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()         // is me second me output sam aye gaa output me ku k ab context chaange ho raha hee


// console.log(this);      is ke output empty brackets aye gee ku k is ka global context kuch nahi hee
// but agr hmm window ke cosole me gae to waha ye properties show kare gaa jo ke window ke browser me exist karte heee


// ___________________________________________ARROW FUNCTION ____________________________________________
function chai(){
    let username = "hitesh"
    console.log(this);           // agr hmm this ko fun ke ander use karte hee to kafi sare vlaue jaise global varialbe or boht sare cheze a gate he node environment ke ander
     console.log(this.username);   // is ke ouput undefined aye gee         
}

chai()

// hmm function me this ko use nahi kar sakte

                  // ye he simple function or agr hmm is me se function ka keyword hata dee or arrow lage de to wo arrow function ban gata hee
// const chai = function () {
//     let username = "hitesh"
//     console.log(this.username);
// }

const chai =  () => {
    let username = "hitesh"
    console.log(this);
}
chai()


const add  =(num1 , num2) =>{
    return num1 + num2
}
console.log(add(4 , 5))


// Explicit return  => jab hmm return keyword use karte hee
// implicit return => jab hmm return keyword use nahi karte


// if we used curly braces in arrow funciton we have to use explicit return
// if dont then we dont have to write return keyword we just use paranthesis 

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// const addTwo = (num1, num2) =>  num1 + num2

// const addTwo = (num1, num2) => ( num1 + num2 )

const addTwo = (num1, num2) => ({username: "hitesh"})   // object bas tab he run karee gaa jab hmm curly braces ke sathe paranthesis bhe lagaee


console.log(addTwo(3, 4))
