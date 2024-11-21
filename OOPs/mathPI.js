"use strict";

const pi = Object.getOwnPropertyDescriptor(Math, "PI");
pi.writable = true;
pi.value = 4;

// console.log(pi);
// console.log(Math.PI);

// Math.PI = 4;
// console.log(Math.PI.toFixed(2));

const ali = {
  username: "ali",
  isAvailable: true,

  order: function () {
    console.log(`${this.username} ordered`);
  },
};

// console.log(ali);
console.log(Object.getOwnPropertyDescriptor(ali, "username"));

Object.defineProperty(ali, "username", {
  //   writable: false,
  enumerable: false,
});

console.log(Object.getOwnPropertyDescriptor(ali, "username"));

for (let [key, value] of Object.entries(ali)) {
  if (typeof value !== "function") console.log(`${key}: ${value}`);
}
