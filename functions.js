"use strict";

function myName() {
  console.log("A");
  console.log("l");
  console.log("i");
}

// myName();

// function sum(num1, num2) {
//   console.log(num1 + num2);
// }

function sum(num1, num2) {
  return num1 + num2;
}

const result = sum(3, 5);
// console.log(`Result: ${result}`);

function loginMessage(userName = "Hassan") {
  //   if (userName === undefined) {
  if (!userName) {
    console.log(`Please a username!`);
    return;
  } else {
    return `${userName} just logged in`;
  }
}

// console.log(`Login message: ${loginMessage("ali")}`);
// console.log(`Login message: ${loginMessage()}`);

// const LoggedIn = loginMessage("ali");
// console.log(`Login message: ${LoggedIn}`);

// function calcCartPrice(...num1) {
//   return num1;
// }

function calcCartPrice(val1, val2, ...num1) {
  return num1;
}

// console.log(calcCartPrice(200, 400, 500, 1000));

const user = {
  username: "ali",
  age: 22,
};

// function handleObject(...anyObject) {
//   return anyObject;
// }

// console.log(handleObject(user, user, user));

function handleObject(anyObject) {
  console.log(`Username is ${anyObject.username} and age is ${anyObject.age}`);
}

// handleObject(user);
// handleObject({
//   username: "Hassan",
//   age: 21,
// });

const newArray = [100, 300, 600, 200];

function returnSecondVal(getArray) {
  return getArray[1];
}

// console.log(returnSecondVal(newArray));
console.log(returnSecondVal([100, 300, 600, 200]));
