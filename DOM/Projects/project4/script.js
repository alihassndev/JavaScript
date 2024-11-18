"use strict";

const body = document.querySelector("body");
const start = document.querySelector("#start");
const stop = document.querySelector("#stop");
let interval = null;

// random color generator
const randomColor = function () {
  const hex = "0123456789ABCDEF";
  let color = "#";

  for (let i = 0; i < 6; i++) {
    color += hex[Math.floor(Math.random() * 16)];
  }
  return color;
};

const ChangingColor = function () {
  if (!interval) {
    interval = setInterval(() => {
      const color = randomColor();
      body.style.background = color;
    }, 2000);
  }
};

start.addEventListener("click", ChangingColor);

const stopChanging = function () {
  clearInterval(interval);
  interval = null;
};

stop.addEventListener("click", stopChanging);
