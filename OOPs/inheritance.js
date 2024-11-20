"use strict";

class User {
  constructor(username) {
    this.username = username;
  }

  logMe() {
    console.log(`Username -> ${this.username} is logged in`);
  }
}

class Teacher extends User {
  constructor(username, email, password) {
    // instead of using .call() we use super here
    super(username);
    this.email = email;
    this.password = password;
  }

  addCourse() {
    console.log(`new course was added by ${this.username}`);
  }
}

const user1 = new User("Ali Hassan");
// console.log(user1);
// user1.logMe();

const teacher1 = new Teacher("Hassan", "ali@gmail.com", "123");
// console.log(teacher1);
// teacher1.logMe();
// teacher1.addCourse();

console.log(teacher1 instanceof User);
