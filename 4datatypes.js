// primitive
// -> these data types are copied using call by value
// String, Number, BigInt, Boolean, null, undefiend, Symbol


// Non-Prmitive
// -> Call by reference
// Array, Objects and Functions

// Javascript does not require 
// to define the datatype
// So it is a dynamically typed langauge

//symbol example
const id = Symbol('123');
const id2 =  Symbol('123');
// id and id2 are different

console.log(id === id2);
// will result false




//imp remeber
console.log(typeof(null));
// it returns object

// non primitive type of returns onject onlys