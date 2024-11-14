"use strict";

// const isLoggedIn = true;
// const temp = 26;

// if statement

// if (isLoggedIn) {
//   console.log(`user logged in ...`);
// }

// if (2 == "2") {
//   console.log(`Executed`);
// }
// logical operators => {<, >, <=, >=, ==, ===, !=}

// if (temp <= 25) {
//   console.log(`Its cold outside`);
// } else {
//   console.log(`Its hot outside`);
// }

// ========= Short hand notation =========
const balance = 1000;

// if (balance > 500) console.log(`test`);
// not recommended
// if (balance > 500) console.log(`test`), console.log(`test2`);

// if (balance < 500) {
//   console.log(`less than 500`);
// } else if (balance < 750) {
//   console.log(`less than 500`);
// } else if (balance < 900) {
//   console.log(`less than 500`);
// } else {
//   console.log(`less than 1200`);
// }

const isLoggedIn = true;
const debitcard = true;
const loggedInGoogle = false;
const loggedInEmail = true;

// if (isLoggedIn && debitcard) {
//   console.log(`Allow to buy the course`);
// }

// if (loggedInGoogle || loggedInEmail) {
//   console.log(`User Logged in`);
// }

// falsy value
// false, 0, -0, BigInt 0n, "", null, undefined, NaN

// Truthy value
// "0", "false", " ", [], {}, function () {}

// ============ Switch Statement ============
// const day = 1;

// switch (day) {
//   case 1:
//     console.log(`Monday`);
//     break;
//   case 2:
//     console.log(`Tuesday`);
//     break;
//   case 3:
//     console.log(`Wednesday`);
//     break;
//   case 4:
//     console.log(`Thursday`);
//     break;
//   case 5:
//     console.log(`Friday`);
//     break;
//   case 6:
//     console.log(`Saturday`);
//     break;
//   case 7:
//     console.log(`Sunday`);
//     break;
//   default:
//     console.log(`wrong selection`);
// }

const fruits = [];

// if (fruits.length === 0) {
//   console.log(`Array is empty`);
// }

const obj = {};

// if (Object.keys(obj).length === 0) {
//   console.log(`Object is empty`);
// }

// Nullish Coalescing operator (??) : null undefined
let val1;
// val1 = 5 ?? 10;
// val1 = null ?? 10;
val1 = undefined ?? 10;

// console.log(val1);

// ternary

// (condition) ? true : false
const iceTeaPrice = 100;

iceTeaPrice <= 80
  ? console.log(`less than 80`)
  : console.log(`greater than 80`);
