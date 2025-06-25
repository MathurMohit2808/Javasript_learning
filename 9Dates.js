// Lets learn about date and time
let date1 = new Date();

console.log(date1);
console.log(date1.toString());
console.log(date1.toDateString());
console.log(date1.toLocaleString());

/* 
2025-05-29T07:55:48.905Z
Thu May 29 2025 13:25:48 GMT+0530 (India Standard Time)
Thu May 29 2025
29/5/2025, 1:25:48 pm
*/

// month start from 0 

// let newdate = new Date(year, month, date, hours, mins)

let newdate = new Date(2024,2,28,2,3);
console.log(newdate.toString());
