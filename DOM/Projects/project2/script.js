"use strict";

// Select DOM elements
const calculate = document.querySelector("#calc");
const reload = document.querySelector("#reload");
const show = document.querySelector(".result");

// Event listener for calculation
calculate.addEventListener("click", function () {
  const height = parseFloat(document.querySelector("#height").value); // Changed parseInt to parseFloat for precision
  const weight = parseFloat(document.querySelector("#weight").value);

  // Validation checks
  if (!height || height <= 0 || isNaN(height)) {
    show.innerText = `Please enter a valid height`; // Changed replaceWith to innerText
    show.style.color = "red"; // Highlight error messages
  } else if (!weight || weight <= 0 || isNaN(weight)) {
    show.innerText = `Please enter a valid weight`;
    show.style.color = "red"; // Highlight error messages
  } else {
    // Calculate BMI and display result
    const result = (weight / (((height / 100) * height) / 100)).toFixed(2); // Added toFixed for a cleaner result
    show.innerText = `Your BMI is: ${result}`;
    show.style.color = "green"; // Highlight valid result
  }
});

// Event listener for reload
reload.addEventListener("click", () => {
  document.querySelector("#height").value = ""; // Clear height input
  document.querySelector("#weight").value = ""; // Clear weight input
  show.innerText = ""; // Clear result message
});
