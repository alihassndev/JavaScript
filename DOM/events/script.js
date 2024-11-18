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
