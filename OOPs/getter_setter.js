"use strict";

// class User {
//   constructor(email, password) {
//     this.email = email;
//     this.password = password;
//   }

//   get email() {
//     return this._email.toUpperCase();
//   }

//   set email(email) {
//     this._email = email;
//   }

//   get password() {
//     return `${this._password}ali`.toUpperCase();
//   }

//   set password(password) {
//     this._password = password;
//   }
// }

// const ali = new User("ali@gmail.com", "123");

// console.log(ali.email);
// console.log(ali.password);

// ============================================
// Properties getters and setters
// function User(email, password) {
//   this._email = email;
//   this._password = password;

//   Object.defineProperty(this, "email", {
//     get: function () {
//       return this._email.toUpperCase();
//     },
//     set: function (email) {
//       this._email = email;
//     },
//   });

//   Object.defineProperty(this, "password", {
//     get: function () {
//       return this._password.toUpperCase();
//     },
//     set: function (password) {
//       this._password = password;
//     },
//   });
// }

// const hassan = new User("Chai@chai.com", "chai");
// console.log(hassan.email);
// console.log(hassan.password);

// ============================================
// Object based Getter and Setter
const User = {
  _email: "ali@ali.com",
  _password: "abc",

  get email() {
    return this._email.toUpperCase();
  },

  set email(email) {
    this._email = email;
  },

  get password() {
    return this._password.toUpperCase();
  },

  set email(password) {
    this._password = password;
  },
};

// Factory Function
const tea = Object.create(User);

console.log(tea.email); // Output => ALI@ALI.COM
console.log(tea.password); // Output => ABC
console.log(tea._password); // Output => abc
