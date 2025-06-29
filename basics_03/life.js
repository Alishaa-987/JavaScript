// life 
// jab hmm function ko foran se execute karvana chah rahe hoo jaise he wo run karee jaise ke database ka connection to tab hmm ye use karte hee

// Immediately Invoked Function Expressions (IIFE)


(function chai(){
    // named IIFE
    console.log(`DB CONNECTED`);
})();                                    // simply brackets on whole function and then for execution put brackets 



// in case of arrwo function we write it like that and also give parameters
( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
} )('hitesh')