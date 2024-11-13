// "use strict";
// feature of ES6 => Arrow function

const user = {
  username: "Ali",
  age: 22,

  welcomeMessage: function () {
    console.log(`${this.username}, welcome to website.`);
    console.log(this);
  },
};

// user.welcomeMessage();
// user.username = "Hassan";
// user.welcomeMessage();
// console.log(this);

function chai() {
  let username = "ali";
  console.log(this.username);
}

chai();
