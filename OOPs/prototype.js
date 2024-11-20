"use strict";

// Prototypes

// String.prototype.trueLength = function () {
//   return this.trim().length;
// };

// let myname = "Ali Hassan    ";

// console.log(myname.trueLength());

// ============================
let myhero = ["thor", "spiderman"];

let heroPower = {
  thor: "hammer",
  spiderman: "sling",

  getSpiderPower: function () {
    console.log(`Spidy power is: ${this.spiderman}`);
  },
};

Object.prototype.ali = function () {
  console.log(`Ali is present in all objects`);
};

// heroPower.ali();
// myhero.ali();

Array.prototype.heyAli = function () {
  console.log(`Ali says Hello`);
};

// myhero.heyAli();
// heroPower.heyAli();

// ============================
// inheritance (Prototypical Inheritance)

const user = {
  name: "chai",
  email: "chai@gmail.com",
};

const teacher = {
  makeVideos: true,
};

const teachingSupport = {
  isAvailable: false,
};

const TASupport = {
  makeAssignment: "Js Assignment",
  fullTime: true,
  __proto__: teachingSupport,
};

teacher.__proto__ = user;

// Modern Syntax
Object.setPrototypeOf(teachingSupport, teacher);

// ============================
let anotherUser = "Ali Hassan     ";
String.prototype.trueLength = function () {
  console.log(this);
  console.log(`True length: ${this.trim().length}`);
};

anotherUser.trueLength();
"ali yousuf  ".trueLength();
" yousuf  ".trueLength();

// ============================
