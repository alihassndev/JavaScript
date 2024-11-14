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

// function chai() {
//   let username = "ali";
//   console.log(this.username);
// }

// chai();

// const coffee = function () {
//   const username = "Ali";
//   console.log(this.username); // Output => undefined
// };

// coffee();

// const coffee = () => {
//   const username = "Ali";
//   console.log(this.username); // Output => undefined
// };

// coffee();

// const addNums = (num1, num2) => {
// return num1 + num2; // Explicit return
// };

// Implicit Return
// const addNums = (num1, num2) => num1 + num2;

const addNums = (num1, num2) => ({ username: "Ali" });

console.log(addNums(3, 5));

// Array Iteration
// const myArray = [1, 5, 6, 3, 2];

// myArray.forEach((element) => {
//   console.log(element);
// });
