// Let's learn object;
const mysym = Symbol("hello");
// two way to declare objects
// 1. Literals -> {}
    const obj1 = {

        name: "Mohit",
        age: 21,
        uid: "22BCS11657",
        LoginDays: ["Monday", "Tuesday"],

        // to make key as a symbol
        [mysym] : "symbol1"
    } 

    console.log(obj1.name);
    console.log(obj1);

// to make object not changable
    // Object.freeze(obj1);


obj1.greetings = function() {
    console.log("OBJECT IS CREATED, HELLO");
}

obj1.disp_name = function() {
    console.log(`Name of this object is ${this.name}`);
}

console.log(obj1.greetings());
console.log(obj1.disp_name());



// 2. object singleton

const gameuser = new Object();

gameuser.id1 = "123";
gameuser.name1 = "Lanemorne";
gameuser.islogged1 = false;

// concatenation of object
const obj3  = Object.assign({}, obj1, gameuser);

// {} used as target in assign function and obj1 and obj2 will be stored in it

console.log(obj3);

// to get keys and values of obj into array

Object.keys(obj3);
Object.values(obj3);

console.log(obj3.hasOwnProperty('islogged1'));

