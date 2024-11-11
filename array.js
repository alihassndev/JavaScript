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

// slice
console.log("A: ", arr2);
const myArr = arr2.slice(1, 3);
console.log(myArr);
console.log("B: ", arr2); // remains same
myArr[0] = 9;
myArr[1] = 8;
console.log(myArr); // values change
console.log("C: ", arr2); // remains same

// splice
const myArr1 = arr2.splice(1, 3);
console.log(myArr1);
console.log("D: ", arr2); // spliced elements removed
