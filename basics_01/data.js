// Dates
let date = new Date()
console.log(date.toString())
// is tarha hm data le sakte he js me ab is ke or boht se methods he jo k diff format me answer dete hee ouput me
 console.log(date.toDateString());           // Fri Jun 27 2025
 console.log(date.toLocaleString());            // 6/27/2025, 5:22:59 PM
//  console.log(typeof myDate);

 // date ke datatype object hote hee


 // we can create our own date also 
 // let myCreatedDate = new Date(2023, 0, 23)
// let myCreatedDate = new Date("2023-01-14")
// let myCreatedDate = new Date("01-14-2023")
// console.log(myCreatedDate.toLocaleString());

// we can do whatever we want to display how we display our date on ouptut

//                    ********************************TIME STAMP ***********************************
// we use time stamp for getting value in  milisecond from the standard time 
//A timestamp is just a number that shows how much time has passed since January 1, 1970 (called the UNIX Epoch).
// 🕒 It's measured in milliseconds (1 second = 1000 milliseconds).


// let timestamp = Date.now();
// console.log(timestamp);
// Output: 1720110900000 (example)


// agr ap specific date tak compare karna hee to 
// let myCreatedDate = new Date("2023-01-14")
// console.log(myCreatedDate.getTime());
 
// ab ye is data tak time compare karee gee age ap ko seconds me chahyee to 
// console.log(Math.floor(Date.now()/1000));

// Math.floor => tak points me value na aee

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth() + 1);
console.log(newDate.getDay());




