// for in loop is used to get index -> can work on objects too
// for of loop is used to get value -> cannot work with objects

const object =
{
    a : 1,
    b : 2
}

const arr = new Array(1,2,3,4,5,6);

for(let key in object)
{
    console.log(key);
}

for(let value of arr)
{
    console.log(value)
}

//now we will learn forEach method -> it modifies the original array -> doe snot have any return statement

let a1 = [1,2,3,4,5,6,7,8];

a1.forEach((value,index,array) => {
    array[index] = value + 2;
});

console.log(a1);

//Now, map
// this does not modify original array
// it has return statement in it

const array1 = a1.map((value,index) => {
    return value + 2;
});

console.log(array1);

//filter
// same characters as map

const array4 = a1.filter((value,index) => {
    return value % 2 === 0;
});

console.log(array4);

//find
// diff between filter and find is that 
// filter gives all the elements which satisfies the condition
// whereas find only return the first find

const finded = a1.find((value,index) => {
    return value % 2 === 0;
});

console.log(finded);                               