"use strict";

// ES6
class User {
  constructor(username, email, password) {
    this.username = username;
    this.email = email;
    this.password = password;
  }

  encryptPassword() {
    return `${this.password}abc`;
  }

  capitalize() {
    return `${this.username.toUpperCase()}`;
  }
}

const ali = new User("ali", "ali@gmail.com", "123");
console.log(ali);
console.log(ali.encryptPassword());
console.log(ali.capitalize());

console.log(`\n==================================\n`);

// Behind the scene
function user(username, email, password) {
  this.username = username;
  this.email = email;
  this.password = password;
}

user.prototype.encryptPassword = function () {
  return `${this.password}abc`;
};

user.prototype.capitalize = function () {
  return `${this.username.toUpperCase()}`;
};

const hassan = new user("hassan", "hassan@gmail.com", "123");
console.log(hassan);
console.log(hassan.encryptPassword());
console.log(hassan.capitalize());
