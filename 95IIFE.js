// Immediately Invoked Function Expression (IIFE)
// Example to perform db connection immediatetely 
// remove pollution of global scope

//use (definition)(to execute)

(() => {
    console.log(`this is IIFE`)
})();


// with param
((name) => {
    console.log(`My name is ${name}`)
})("Mohit");


