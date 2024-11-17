"use strict";

const button = document.querySelector("button");
const boxes = document.querySelectorAll(".box");
const canvas = document.querySelector(".canvas");

boxes.forEach((box) => {
  box.addEventListener("click", (e) => {
    // console.log(e);
    // console.log(e.target);
    if (e.target.id === "green") {
      canvas.style.backgroundColor = e.target.id;
      canvas.style.color = "white";
      button.style.color = "black";
      button.style.background = "white";
      e.target.style.border = "1px solid white";
    } else if (e.target.id === "blue") {
      canvas.style.backgroundColor = e.target.id;
      canvas.style.color = "white";
      button.style.color = "black";
      button.style.background = "white";
      e.target.style.border = "1px solid white";
    } else if (e.target.id === "white") {
      canvas.style.backgroundColor = e.target.id;
      canvas.style.color = "black";
      button.style.color = "white";
      button.style.background = "black";
      e.target.style.border = "1px solid black";
    } else if (e.target.id === "yellow") {
      canvas.style.backgroundColor = e.target.id;
      canvas.style.color = "black";
      button.style.color = "black";
      button.style.background = "white";
      e.target.style.border = "1px solid black";
    } else {
      const h1 = document.createElement("h1");
      h1.textContent = "Some went wrong";
      canvas.replaceWith(h1);
    }
  });
});

button.addEventListener("click", () => {
  location.reload();
});
