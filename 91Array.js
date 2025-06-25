// declared in square brackets []
// can contain different types of elements

const arr1 = [1,2,3];

//or

const arr2 = new Array(1,2,3,4,5);

// to add and remove values at end values at end
arr1.push(10);
arr2.pop;

// to add and remove values at first
arr2.unshift(10);
arr1.shift();

// to covert array to string
const strarr = new String(arr1.join());
const strarr1 = arr1.join();

// Now let's understand spile and slice

console.log(arr1);
console.log(strarr)
console.log(strarr1);

// slice does not manipulate the original array and do till end - 1
// splice manipulates the original array and run till end;

//indexOf(element) 
// if exist element
// else -1

const a1 = [1,2,3,4,5];
const a2 = [6,7,8,9,10];
//to join these two arrays use concat();

const a3 = a1.concat(a2);
console.log(a3);

// else use this spread operator -> ...
const na3 = [...a1, ...a2];

// to check if it is array
console.log(Array.isArray("Hitesh"));
console.log(Array.from("Hitesh"));

