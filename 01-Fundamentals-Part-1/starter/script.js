

// primative data types
let age = 22; // 
let firstName = 'Jonas';
let isAdult = true;

let children;

/*
// js has dynamic typing
// value is NOT variable
console.log(firstName);
console.log(typeof isAdult);

console.log(typeof children);

console.log(typeof null);

// use const keyword
const PI = 3.14159;
console.log(PI);

// use var keyword
var job = 'programmer';
job = 'teacher';

console.log(`the PI is 
${PI}
`);
*/

const isOldEnough = age >= 18;
if (isOldEnough) {
  console.log(`you can drive now 👍`);
} else {
  console.log(`nope 😢`);
}
// finished Type Conversion and Coercion