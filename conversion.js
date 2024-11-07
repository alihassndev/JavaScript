"use strict";

// let age = null;
// let age = undefined;
// let age = "22ab";
// console.log(`Type of age : ${typeof age}`);
// console.log(`Value of age : ${age}`);

// let valueNumber = Number(age);
// console.log(`Type of age : ${typeof valueNumber}`);
// console.log(`Value of age : ${valueNumber}`);
// alternative method of above
// console.log(`Type of age : ${typeof age}`);

// ==============

// 0 & "" => false
// != 0 & "anything" => true

// ==============

// let isloggedIn = "";
let isloggedIn = 1;
let booleanlogin = Boolean(isloggedIn);
// console.log(`Type of age : ${typeof booleanlogin}`);
// console.log(`Value of age : ${booleanlogin}`);

let someNumber = 3;
let stringNum = String(someNumber);

// console.log(typeof stringNum);
// console.log(stringNum);

// ================== Operation ========================

let value = 3;
let negValue = -value;

// console.log(negValue);
// console.log(2 + 2);
// console.log(2 - 2);
// console.log(2 * 2);
// console.log(2 ** 2); // 2 to the power of 2
// console.log(2 / 2);

let str1 = "Ali";
let str2 = "Hassan";

let str3 = str1 + " " + str2;
// console.log(str3);

// console.log(1 + "2"); // Output => 12 because + operator only works with strings
// console.log("1" + 2 + 2); // Output => 122 because + operator only works with strings
// console.log(2 + 2 + "1"); // Output => 41 because + operator only works with strings

// console.log("1" * 2); // Output => 2
// console.log("1" / 2); // Output => 0.5

// console.log(true);
// console.log(+true); // Output => 1 | not preferred
// console.log(+""); // Output => 0 | not preferred

// let num1, num2, num3;
// num1 = num2 = num3 = 3 + 2; // Looks smart but not preferred

// console.table([num1, num2, num3]);

let counter = 100;
// counter++ // post-fix increment
// ++counter // post-fix increment
console.log(counter++);
console.log(counter);
