"use strict";

// document.getElementById("nature-2").onclick = function (e) {
//   alert(`${e.target.id} is click`);
// };

// type, timestamp, defaultPrevent
// target,toElement, source, currentTarget
// clientX, clientY, screenX, screenY
// altkey, ctrlkey, shiftkey, keycode

// event propogation
// 1. event bubbling (default case => false (third parameter of event Listner))
// 2. Event capturint (third parameter => true)

// document.getElementById("images").addEventListener(
//   "click",
//   (e) => {
//     //   alert(`${e.target.id} is click`);
//     console.log(`Clicked inside the ul`);
//   },
//   false
// );

// document.getElementById("nature-2").addEventListener(
//   "click",
//   (e) => {
//     //   alert(`${e.target.id} is click`);
//     console.log(`nature-2 is clicked`);
//     // e.stopPropagation();
//   },
//   false
// );

// document.getElementById("google").addEventListener("click", (e) => {
//   console.log("google clicked");
//   e.preventDefault();
//   e.stopPropagation();
// });

// const parent = document.querySelector("#images");

// parent.addEventListener("click", function (e) {
//   //   console.log(e.target.parentNode);

//   if (e.target.tagName === "IMG") {
//     const removeIt = e.target.parentNode;
//     removeIt.remove();
//   }

//   //   removeIt.parentNode.removeChild(removeIt);
// });

// set time out

// console.log(1);
// setTimeout(() => {
//   console.log(2);
// }, 0);
// console.log(3);

// ============ Part 2 ============
// Handler => Callback => function oftenly (without name) -> reference

const stop = document.querySelector("#stop");
const start = document.querySelector("#start");
let intervalID;
const sayDate = function () {
  intervalID = setInterval(
    (str) => {
      console.log(str, Date.now());
    },
    1000,
    "Ali Hassan"
  );
};

start.addEventListener("click", sayDate);

const stopRun = function () {
  console.log(`Stopped`);
  clearInterval(intervalID);
};

stop.addEventListener("click", stopRun);

// const sayName = function () {
//   console.log("Ali Hassan");
// };

// sayName();

// const changeText = function () {
//   document.querySelector("h1").innerHTML = "Best of luck";
//   console.log(`${document.querySelector("h1").innerHTML}`);
// };

// const changeMe = setTimeout(changeText, 2000);

// stop.addEventListener("click", () => {
//   clearTimeout(changeMe);
// });

// const sayDate = function (str) {
//   console.log(str, Date.now());
// };

// // setInterval(sayDate, 2000);
// const intervalID = setInterval(sayDate, 2000, `Ali`);

// clearInterval(intervalID);
