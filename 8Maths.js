// Lets understand the maths library
//Math.abs() -> gives absolute value
//Math.round() -> roundof values
//Math.ceil() -> Top value
//Math.floor() -> bottom value

//Math.random() -> will give random value between 0 to 1
console.log(Math.random());

// to get value within any range
const min = 10;
const max = 20;

console.log(Math.floor(Math.random() * (max - min + 1)) + min);