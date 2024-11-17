"use strict";

// Select the canvas element
const canvas = document.querySelector(".canvas");

// Create elements for time and date
const clock = document.createElement("div");
clock.className = "clock"; // Add a class for consistency (optional)
const today = document.createElement("div");
today.className = "date";

// Append both elements to the canvas
canvas.appendChild(clock);
canvas.appendChild(today);

// Update time and date every second
setInterval(() => {
  const date = new Date();

  // Update the time in 12-hour format with AM/PM
  const options = {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: true,
  };
  clock.innerText = date.toLocaleTimeString(undefined, options);

  // Update the date
  today.innerText = date.toDateString();
}, 1000);
