"use strict";

// OOPs
// Programming Paradigm

// What is Objects?
// A collection of variable (attribute) and method

// Why use OOPs?
// To achieve reusability of components

// parts of OOPs
// Object Literals

// constructor function
// ProtoTypes
// Classes
// Instances (new, this)

// four pillars
//  1. Encapsulation
//  2. Inheritance
//  3. Polymorphism
//  4. Abstraction

// ===============================
// Object Literal

// const user = {
//   username: "Ali",
//   loginCount: 5,
//   signedIn: true,

//   getDetails: function () {
//     // console.log(`Got user details !`);
//     // console.log(`Username: ${this.username}`);
//     console.log(this);
//   },
// };

// console.log(user.username);
// console.log(user["username"]);
// user.getDetails();

// ===============================
// Constructor function

// Here new is the constructor function

// const promise = new Promise();
// const date = new Date();

// function userDetail(username, loginCount, isLoggedIn) {
//   this.username = username;
//   this.loginCount = loginCount;
//   this.isLoggedIn = isLoggedIn;

//   this.greeting = function () {
//     console.log(`Welcome ${this.username}`);
//   };

//   //   either you return this function or not you always get these properties
//   //   return this; // it is returned implicitly
// }

// const user1 = new userDetail("Ali", 5, true);
// console.log(user1);
// console.log(user.username);

// const user2 = new userDetail("Hassan", 3, false);
// console.log(user2.constructor);

// console.log(user2 instanceof userDetail);

// ===============================
// Object

function multiply(num) {
  return num * 5;
}

multiply.ali = 2;

// console.log(multiply(5));
// console.log(multiply.ali);
// console.log(multiply.prototype);

function createUser(username, score) {
  this.username = username;
  this.score = score;
}

createUser.prototype.increment = function () {
  this.score++;
};

createUser.prototype.printMe = function () {
  console.log(`Score: ${this.score}`);
};

const ali = new createUser("ali", 50);
const hassan = new createUser("hassan", 200);

ali.printMe();
ali.increment();
ali.printMe();

hassan.printMe();
hassan.increment();
hassan.printMe();
