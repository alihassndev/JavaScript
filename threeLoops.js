"use strict";

// all these loops are array specific loops
// for of loop
const myArray = [1, 2, 3, 4, 5];

// here object means any iterable in for of loop
for (const element of myArray) {
  //   console.log(element);
}

const greeting = "Hello Ali!";
for (const greet of greeting) {
  //   if (greet == " ") continue;
  //   console.log(`Each char of greeting is ${greet}`);
}

// ====================================
// Maps
const map = new Map();

// Contains uniques values in the same order in which they are written
map.set("PK", "Pakistan");
map.set("US", "United States");
map.set("FR", "France");
// map.set("PK", "Pakistan");

// console.log(map);

for (const [key, values] of map) {
  //   console.log(key, ": ", values);
}

const games = {
  game1: "NFS",
  game2: "Spiderman",
};

// Object are not iteratable

// for (const [key, values] of games) {
//   console.log(`${key}: ${values}`);
// }

// Objects
const myObject = {
  js: "JavaScript",
  cpp: "C++",
  rb: "Ruby on Rails",
  swift: "Swift",
};

for (const key in myObject) {
  //   console.log(`${key}: ${myObject[key]}`);
}

// It will gives you key and you have to do your work according to your need

for (const key in myArray) {
  //   console.log(myArray[key]);
}

// for in loop do not work on maps because maps are not iteratable

for (const key in map) {
  //   console.log(key);
}

// forEach loop
const arr = ["js", "ruby", "cpp", "python", "java"];

// it require a callback function that do not have a function name

// arr.forEach(function (lang) {
//   console.log(lang);
// });

// arr.forEach((lang) => {
//   console.log(lang);
// });

// arr.forEach(printMe);

// function printMe(item) {
//   console.log(item);
// }

// arr.forEach((item, index) => {
//   console.log(`Index: ${index} value => ${item}`);
// });

arr.forEach((item, index, coding) => {
  //   console.log(`Index: ${index} value => ${item}`);
});

const myCoding = [
  {
    langName: "JavaScript",
    extension: ".js",
  },
  {
    langName: "Java",
    extension: ".java",
  },
  {
    langName: "Python",
    extension: ".py",
  },
];

myCoding.forEach((item) => {
  console.log(`${item.langName} with extension: ${item.extension}`);
});
