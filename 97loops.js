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