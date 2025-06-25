// We cannot change these values in the code further
const accountId = 144553;

// let should be always used as it does not allow to use the same name again
let accountEmail = "something@gmail.com";

// Do not use var because it lets the name be used again which changes the initial value also
var accountPass = "12345";

// Never use this but this works
accountCity = "Jaipur";

// in js if value is not assigned
//  then its value is undefined
let hello;

console.table([accountId, accountEmail, accountPass, accountCity, hello]);