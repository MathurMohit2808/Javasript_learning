// function has a easy syntax
// fucntion func_name(param) no need to specify the datatypes of param

function sayname()
{
    console.log("MOHITS");
}

//function calling is 
// funn_name(args) 
sayname();

// function which require unknown no. o arguments

function calculateTotalPrice(...num) // this is a rest operator used to concatnate arrays or objects
{
    return num;
} 


const addOne = function(num2){
    console.log(` this is a const func`);
}

// let's learn about the this keyword

const user = {
    username : "LANEMORNE",
    pass : "Hello123",

    welcomeMessage: function(){
        console.log(`${this.username}, welcome to website`);
    }
}

// console.log(this) every scope gives different values


// Now let's learn arrow func
const arrows = () => {
    console.log(`this is a arrow function`)
}

// basic syntax : () => {}


// implicit return

const addTwo = (num1, num2) => (num1 + num2)


