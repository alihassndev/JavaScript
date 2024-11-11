"use strict";

const array = [1, 2, 3, 4, 5];

// console.log(array[0]); // first element in the array
// console.log(array[2]); // arbitrary element in the array
// console.log(array[array.length - 1]); // last value in the array

// console.log(array["2"]); // output => 3
// console.log(array["02"]); // output => undefined
// console.log(array["2"] !== array["02"]); // output => true

const arr2 = new Array(1, 2, 3, 4, 5);

// console.log(arr2);
// Array methods
// arr2.push(0);
// arr2.push(5);
// console.log(arr2);
// arr2.pop();
// console.log(arr2);

// arr2.unshift(9);
// console.log(arr2);

// arr2.shift();
// console.log(arr2);

// console.log(arr2.includes(3));
// console.log(arr2.indexOf(3));

// const newArr = arr2.join();
// console.log(newArr); // joins the elements of array with comma
// console.log(typeof newArr); // output => String

// Slice and Splice
// slice creates shallow copy of array (reference type like) and splice creates deep copy of array (like independent). Slice do not modify the original array but splice modify the original array
// slice
// console.log("A: ", arr2);
const myArr = arr2.slice(1, 3);
// console.log(myArr);
// console.log("B: ", arr2); // remains same
myArr[0] = 9;
myArr[1] = 8;
// console.log(myArr); // values change
// console.log("C: ", arr2); // remains same

// splice
const myArr1 = arr2.splice(1, 3);
// console.log(myArr1);
// console.log("D: ", arr2); // spliced elements removed

// Arrays part 2
const marvelHeros = ["thor", "ironman", "spiderman"];
const dcHeros = ["superman", "batman", "flash"];

// push method
// marvelHeros.push(dcHeros);
// // this creates another array inside the marvel array
// console.log(marvelHeros); // output => [ 'thor', 'ironman', 'spiderman', [ 'superman', 'batman', 'flash' ] ]
// console.log(marvelHeros[3][1]); // output => batman

// concat method
// const allHeros = marvelHeros.concat(dcHeros);
// console.log(allHeros); // output => [ 'thor', 'ironman', 'spiderman', 'superman', 'batman', 'flash' ]

// const allHeros = [...marvelHeros, ...dcHeros]; // because of spread operator "..."
// // this will merge the DCArray into MarvelArray
// console.log(allHeros); // output => [ 'thor', 'ironman', 'spiderman', 'superman', 'batman', 'flash' ]
// console.log(marvelHeros[4]); // output => batman

// const another = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]];

// const real = another.flat(Infinity);
// console.log(real);

// console.log(Array.isArray("Ali"));
// console.log(Array.from("Ali")); // Convert strings into an Array

// console.log(Array.from({ name: "Ali" })); // interesting (results in empty array)

const person = {
  name: "ali",
  age: 22,
  city: "Lahore",
};

// const arrayValue = Object.values(person);
// const arrayKeys = Object.keys(person);
// const arrayEntries = Object.entries(person);
// console.log(arrayValue);
// console.log(arrayKeys);
// console.log(arrayEntries);

let score1 = 100;
let score2 = 200;
let score3 = [300, 400];
// console.log(Array.of(score1, score2, ...score3));

const number1 = [1, 2, 3, 4, 5];
const evenNumbers = number1.filter((num) => num % 2 === 0);
console.log(evenNumbers); // Output: [2, 4]

const number2 = [1, 2, 3];
const squaredNumbers = number2.map((num) => num ** 2);
console.log(squaredNumbers); // Output: [1, 4, 9]
