"use strict";

// dates usually measured in miliseconds in JS
// which is helpful in comparing the dates in JS
let myDate = new Date();

// console.log(myDate);
// console.log(myDate.toString());
// console.log(myDate.toLocaleString());
// console.log(myDate.toUTCString());
// console.log(myDate.toISOString());
// console.log(myDate.toDateString());
// console.log(typeof myDate);

// let myCreated = new Date(2002, 3, 25);
let myCreated = new Date("2002-04-25");
// console.log(myCreated.toDateString());
// console.log(myCreated.getTime());

// console.log(myCreated.toDateString());

let myTimeStamp = Date.now();
// console.log(myTimeStamp);

// console.log(myCreated < myTimeStamp);
// console.log(Math.floor(Date.now() / 1000)); // find time in seconds

let newDate = new Date();

// console.log(newDate.getDay());
console.log(
  newDate.toLocaleString("default", {
    weekday: "long",
    // timeZone: "Karachi",
  })
);
