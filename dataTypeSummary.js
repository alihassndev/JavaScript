"use strict";

// JS is dynamically Typed Language

// ==========================
// Premitive DataType
// 7 Categories
// ==========================

// 1. String
// 2. Number
// 3. NULL
// 4. Undefined
// 5. Symbol
// 6. Boolean
// 7. BigInt

// ==========================

const score = 100;
const value = 10.25;

const isLoggedIn = true;
const signedIn = null;
let userEmail;

const id1 = Symbol("123");
const id2 = Symbol("123");

// console.log(id1 == id2); // Output => False

// const bigNumber = 12344676543288214125n; // Type Big int

// ==========================
// Non-Premitive DataType
// ==========================

// 1. Arrays
// 2. Objects
// 3. Functions

// ==========================
// Arrays
const heros = ["Ali", "Hassan", "Yousaf"];
console.log(heros);

// Objects
const person = {
  name: "Ali",
  age: 22,
};

console.log(person);

// Functions (variable type)
const myFunc = function () {
  console.log(`Hello World !`);
};

// To find the type of the variables
console.log(typeof person);
