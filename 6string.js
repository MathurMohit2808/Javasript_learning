// how to use console.log in
// in a better way
// use these ``
//and use ${var} to insert values in it
// called string interpolation

let name = "Mohit";
let age = 21;

console.log(`My name is ${name} and my age is ${age}`);

// also we can use new keyword
const h1 = new String('hellos');

console.log(name.toUpperCase());

// if does not exist, it gives -1
console.log(h1.indexOf("t"));

// lets create a substring
// substring(start,end); till (end - 1);
console.log(`The substring is ${h1.substring(0,3)}`);

// we can use trim method also
// trim will remove the starting and end spaces
const s2 = new String("  HELLO BOYS");
console.log(`${s2}`);
console.log(s2.trim());

// we can use replace function
// replace("what to replace", "replace with")



// to convert a string to array
// we will use split function
const str1 = new String("My name is Mohit Mathur");
const str2 = str1.split('');
console.log(str2);



