// similarly we can create
// number using new keyword

const n1 = new Number(1000);
console.log(`${n1}`);
console.log(n1);


// to convert to string
const s1 = n1.toString();
console.log(typeof(s1));

// toFixed(precision to how much decimal)
// if 5 it will round to +1
const n2 = 32.3450;
console.log(n2.toFixed(2));

// to set max and min values
const min1 = Number.MAX_VALUE;
const max1 = Number.MIN_VALUE;

