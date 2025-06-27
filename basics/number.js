let num = 100
console.log(num)  // in that answer is 100

let num1 = 100
console.log (new Number(num1))   
// in that case it show on ouput that it has number datatype and the answer is 100

// number datatypes has a lot of method like string

// Now we can also change that number into string data type
console.log(num1.toString)
console.log(num1.toString.length)  // now a strign is made so we can also apply stirng methods on that 




//                                  TO  FIXED 

// 🔹 What is toFixed() in JavaScript?
// ✅ Purpose:
// toFixed() is a method used to format a number to a fixed number of decimal places.

// It returns the result as a string (not a number).

// 🔸 Syntax:
// number.toFixed(digits)
// digits: The number of digits you want after the decimal point.


let num2 = 3.14159;
let fixedNum = num2.toFixed(2);

console.log(fixedNum);  
// Output: "3.14"  (as a string)

//                                                 PRECISION

// 🔹 What is toPrecision() in JavaScript?
// ✅ Purpose:
// toPrecision() is a method that formats a number to a specified total number of significant digits.

// It’s different from toFixed(), which only controls decimal places.
// toPrecision() controls the total number of digits, before and after the decimal.

// 🔸 Syntax:

// number.toPrecision(digits)
// digits: Total number of significant digits (not just after the decimal)

// Returns a string.

let num4 = 12.3456;
console.log(num4.toPrecision(4));  
// Output: "12.35"









//                            ************************ MATH ***********************************
console.log(Math)
console.log(Math.abs(-4))        //abs convert teh negative value into positive not alternatively   in answre it give 4
console.log(Math.round(4.56))
// same as max , min , ceil(it choosse upper value ) , floor( it choose lower value )

console.log(Math.random())       // it give random value between the 0 and 1 if you want higher vlaue multiply with numer like

console.log(Math.random()  * 10)  // is se kabhi kabar value ste he 0.1 something like that why we add 1
// hm value 1 se zaida chahye to hmm aise likhe gee
console.log(Math.random() *10 + 1 )


// jab hmme max or minimim define kare to hmm 10 se multiply karne ke bagae un dono ko minus kar ke 1 add kar de gee ta ke zero se 
// avoid kia ja sakee

console.log(Math.random() * (max - min + 1) + min )
// min ko last pe is liye add kia he tak min ke value pata chale is se niche nahi jana
// max-min ka matlba range identify karna
// +1 ka matlab zero ko avoid karna