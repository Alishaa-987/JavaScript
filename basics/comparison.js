// 2 > 1
// 1 < 3
// 3 == 3
// 23 <= 34
// 24 >= 45
// 2 != 3

//  these are the basic conversion and dont cause any trouble


/*
The problme arise when we compare different data types
 like string with number 
*/
// console.log("2"  < 1);
// console.log(2  > "1");

// in thsi situation hte answer is false and true it convert the stirng into number and then compare that so give accurate answaer 
//  sometime it give unpredictable result so make sure while comparing the data type is same


// lets compare with null and undefined wiht zero
// console.log( null > 0)
// console.log( null == 0)
// console.log( null >= 0)
// console.log( null < 0)

    // In that it only covert the data type while using comparison operator like = > or =< not simple operator 
    //  in that it only give true answre while >= operator 
console.log( undefined > 0)
console.log( undefined == 0)
console.log( undefined >= 0)
console.log( undefined < 0)

//  in that case all the aswer are falsse 