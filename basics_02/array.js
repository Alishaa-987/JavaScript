// 📘 What is an Array in JavaScript?
// An array is a special variable that can store multiple values in a single variable.

// ✅ Example:

// let fruits = ["apple", "banana", "mango"];
// fruits[0] → "apple"

// fruits.length → 3

// 🔧                             Common Array Methods
// 🔹 1. push() → Add at the END
// ✅ Adds new item to the end of the array.
// fruits.push("orange");
// console.log(fruits);  
// // ["apple", "banana", "mango", "orange"]

// 🔹 2. pop() → Remove from the END
// ✅ Removes the last item from the array.
// fruits.pop();
// console.log(fruits);  
// ["apple", "banana", "mango"]

// 🔹 3. unshift() → Add at the START
// ✅ Adds item to the beginning of the array.

// fruits.unshift("kiwi");
// console.log(fruits);  
// ["kiwi", "apple", "banana", "mango"]


// 🔹 4. shift() → Remove from the START
// ✅ Removes the first item from the array.
// fruits.shift();
// console.log(fruits);  
// ["apple", "banana", "mango"]


//                                🔹 5. splice() → Add, Remove, Replace
              // most important thing in splics as compare to slics is that it manipulate origanl array 
// ✅ Used to add/remove/replace elements at a specific index.
// Syntax:
// array.splice(startIndex, deleteCount, item1, item2, ...)
// ✅ Examples:
// 🔸 Remove:
// fruits.splice(1, 1);  // Remove 1 item from index 1
// ["apple", "mango"]


// 🔸 Add:
// fruits.splice(1, 0, "peach");  // Add without removing
// ["apple", "peach", "mango"]


// 🔸 Replace:
// fruits.splice(1, 1, "banana");  // Replace at index 1
// ["apple", "banana", "mango"]



// 🔹 6. slice() → Copy a part of array
// ✅ Returns a portion of the array. It does NOT change the original array.
// Syntax:
// array.slice(startIndex, endIndex)
// ✅ Example:
// let colors = ["red", "green", "blue", "yellow"];
// let newColors = colors.slice(1, 3);
// console.log(newColors);  
// ["green", "blue"]
// console.log(colors);     
// ["red", "green", "blue", "yellow"] → original unchanged


//  if we want to add someting in array we use push in array and use the concat method 
const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

// marvel_heros.push(dc_heros)


 const allHeros = marvel_heros.concat(dc_heros)
// console.log(allHeros);


// in js that not the correct method of concating we prefer thais method 

const all_new_heros = [...marvel_heros, ...dc_heros]

// console.log(all_new_heros);

// if array has another arrray and in that there is another array 
const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const real_another_array = another_array.flat(Infinity)
console.log(real_another_array);

// we use this to get a single arrray on output 

// we can ask question like is that array 
console.log(Array.isArray("Hitesh"))         // false

// and we can also conver any thing into array 

console.log(Array.from("Hitesh"))    // This convert that into array 

// we can also pass object as an array but it give empty array bcz it dont know what to convert either key or vlaue 

console.log(Array.from(
    {name: "hitesh"})) // interesting



    // .from , .of  ,  i should have to be study these metod of array 
let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));



