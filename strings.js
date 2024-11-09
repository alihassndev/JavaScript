"use strict";

const name = "Ali";
const repo = 50;

// console.log(name + repo + " value");

// String Interpolations
// console.log(`Hello my name is ${name}, and my repo count is ${repo}`);

// Alternate to declare a string
// console.log(gameName.__proto__); // returns an object

const gameName = new String("ali hassan"); // String is an object

// console.log(gameName[0]);
// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName);
// console.log(gameName.charAt(2)); // => output : 'i'
// console.log(gameName.indexOf("l")); // => output : 'i'
const newName = gameName.substring(0, 5);
// const another = gameName.slice(0, 5);
let another = gameName.slice(-6, gameName.length);
another = "Yousaf";

// => splice() do not work with Strings it only works with arrays
// const spliceNew = gameName.splice(4, gameName.length, "Yousaf");

// console.log(gameName);
console.log(another);

// const newString = "     Ali Hassan Yousaf";
// console.log(newString);
// console.log(newString.trim());

const url = "https://alihassan.com/ali%20hassan";

// console.log(url.replace("%20", "_"));

// console.log(url.includes("ali"));
const ali = "Ali Hassan Yousaf";
// Convert to an Array
const arrays = ali.split(" ");

console.log(ali);
console.log(arrays);
