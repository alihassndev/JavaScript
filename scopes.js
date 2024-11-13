"use strict";

if (true) {
  let a = 10;
  const b = 20;
  var c = 30;
}

// console.log(a, b, c);

function one() {
  const username = "Ali";

  function two() {
    const site = "youtube";
    console.log(username);
  }
  //   can't access site variable here
  //   console.log(site);

  two();
}

// one();

if (true) {
  const username = "Ali";
  if (username === "Ali") {
    const site = " youtube";
    // console.log(username + site);
  }
  //   console.log(site); // Error
}

// console.log(username); // Error

// ================ Interesting ================
console.log(increment(5));

function increment(num) {
  return num + 1;
}

// function expression
// console.log(addTwo(5)); // error like hoisting

const addTwo = function (num) {
  return num + 2;
};

console.log(addTwo(5));
