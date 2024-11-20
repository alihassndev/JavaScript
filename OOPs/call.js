"use strict";

function setUserName(username) {
  // DB request
  this.username = username;
  console.log("Called ...");
}

function createUser(username, email, password) {
  setUserName.call(this, username);
  this.email = email;
  this.password = password;
}

const ali = new createUser("ali", "ali@gmail.com", "123");

console.log(ali);
