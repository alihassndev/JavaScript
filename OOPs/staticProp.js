"use strict";

class User {
  constructor(username) {
    this.username = username;
  }

  logMe() {
    console.log(`Username: ${this.username}`);
  }

  static createId() {
    return "123";
  }
}

class Teacher extends User {
  constructor(username, email) {
    super(username);
    this.email = email;
  }
}

const ali = new User("ali");

// to access the static methods or attributes we can directly access them by class name
// console.log(User.createId());

const hassan = new Teacher("hassan", "hassan@gmail.com");
hassan.logMe();
console.log(hassan.createId());
