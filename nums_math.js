"use strict";

const num = 200;
const balance = new Number(100);

// console.log(balance);
// console.log(balance.toString());
// console.log(balance.toString().length);
// console.log(typeof balance.toString());
// console.log(balance.toFixed(2));
// console.log(typeof balance);

const other = 23.453343;

// console.log(other.toPrecision(3));

const hundres = 1000000;
// console.log(hundres.toLocaleString());

// ============ MATHS ==============
// console.log(Math);
// console.log(Math.abs(-234)); // convert negative values to positive
// console.log(Math.round(4.533));
// console.log(Math.floor(Math.random() * 10) + 1);
// console.log(Math.round(Math.random() * 10));

const min = 11;
const max = 20;
const rand = Math.floor(Math.random() * (max - min + 1) + min);
console.log(rand);
