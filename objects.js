"use strict";

// singleton => create an object from constructor not by literals
// Object.create; // by the use of constructor

// Object literals

const mySym = Symbol("key1");

const user = {
  "full name": "Ali",
  [mySym]: "myKey1", // use symbol value in object
  age: 22,
  location: "Sialkot",
  email: "ali@gmail.com",
  isLoggedIn: false,
  lastLoginDays: ["Monday", "Friday"],
};

user.email = "ali@gpt.com";

// there are two ways to print the values of the object "dot method and [] method"

// console.log(user["full name"]);
// console.log(user.email);
// // to print symbol values using object
// console.log(user[mySym]);
// console.log(typeof user[mySym]);
// Alternative of above
// console.log(user["email"]);

// if we freeze the object then changes would not be applied
// Object.freeze(user);

// user.email = "ali@yahoo.com";
// console.log(user.email);

user.greeting = function () {
  console.log("Hello JS user");
};

user.greeting2 = function () {
  console.log(`Hello JS user, ${this["full name"]}`);
};

console.log(user);
user.greeting();
user.greeting2();
