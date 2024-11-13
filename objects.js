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

// console.log(user);
// user.greeting();
// user.greeting2();

// ================== Part 2 ==================
// const olxUser = new Object();
const olxUser = {};
olxUser.id = "123";
olxUser.name = "Ali";
olxUser.isLoggedIn = false;

// console.log(olxUser);

const regularUser = {
  email: "ali@gmail.com",
  fullName: {
    userFullName: {
      firstName: "Ali",
      lastName: "Hassan",
    },
  },
};

// console.log(regularUser.fullName.userFullName.firstName);

const obj1 = { 1: "a", 2: "b" };
const obj2 = { 3: "c", 4: "d" };
const obj4 = { 5: "a", 6: "b" };

// const obj3 = { obj1, obj2 };

// const obj3 = Object.assign({}, obj1, obj2, obj4);
// const obj3 = Object.assign(obj1, obj2);

const obj3 = { ...obj1, ...obj2, ...obj4 };
// console.log(obj3);

const users = [
  {
    id: 1,
    email: "ali@gmail.com",
  },
  {
    id: 2,
    email: "ali@gmail.com",
  },
  {
    id: 3,
    email: "ali@gmail.com",
  },
];

// user[1].email;
console.log(olxUser);

console.log(Object.keys(olxUser));
console.log(Object.values(olxUser));
// console.log(Object.entries(olxUser));

console.log(olxUser.hasOwnProperty("isLoggedIn")); // output => true
console.log(olxUser.hasOwnProperty("isLogged")); // output => false
