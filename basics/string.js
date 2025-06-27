// There are many method of writing string one is old metod and other one is modern method
let name = "alisha"
age = 20
console.log( name + age + "and i am a girl" )


// thsi is old way to concate stirng 
// right now we use string interpolation by using backticks
console.log(`Hello my name is ${name} and  my age is ${age} and i am a girl`)

// It increase code readibility and thats the modern way of concate string


//There ar a lot of method in string and we use that in daily basis
console.log(name.toUpperCase())
console.log(name.toLowerCase())
console.log(name.charAt(4))
console.log(name.indexOf())
console.log(name.substring( 0 , 4))
console.log(name.replace ( "ali" , "alji"))

//                                                  sLICE()
//  Method (used in strings and arrays)
// ✅ Purpose:
// Returns a portion (or "slice") of a string or array, without changing the original.

// ✅ Syntax:
// javascript
// Copy
// Edit
// string.slice(start, end)
// array.slice(start, end)
//        EXXAMPLE
// let str = "JavaScript";
// console.log(str.slice(0, 4));  
// Output: "Java"


//                              SPLIT
// split() in JavaScript?
// ✅ It is a method used on strings to break a string into parts and store them in an array.
// 🔸 Syntax:
// string.split(separator, limit)
// ✨ Parameters:
// separator: Where you want to split the string (like space " ", comma ",", etc.)

// limit (optional): Maximum number of parts to return

// Task	Example	Result
// Split by space	"A B C".split(" ")	["A", "B", "C"]
// Split by comma	"A,B,C".split(",")	["A", "B", "C"]
// Split into letters	"ABC".split("")	["A", "B", "C"]
// Split with a limit	"A B C D".split(" ", 2)	["A", "B"]


                  //  TRIM 
// trim() Method
// ✅ Purpose:
// Removes whitespace (empty spaces, tabs, newlines) from the beginning and end of a string.

// 🔧 Syntax:
// string.trim()
// 🧪 Example:

// let messy = "   Hello World!   ";
// let clean = messy.trim();

// console.log(clean);
// // Output: "Hello World!"
// 💡 Notes:
// It only removes spaces from the start and end, not in the middle.

// Useful when taking input from users.



//                    REPLACE METHOD 
// replace() Method (for Strings)
// ✅ Purpose:
// Replaces part of a string with something else.

// ✅ Syntax:
// string.replace(searchValue, newValue)
// searchValue: What you want to replace (can be a string or RegExp)

// newValue: What you want to put instead

// ✅ Example 1: Replace one word

// let msg = "I love Java";
// let newMsg = msg.replace("Java", "JavaScript");

// console.log(newMsg);
// Output: "I love JavaScript"






