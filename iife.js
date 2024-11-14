// Immediately Invoked Function Expressions (IIFE)

// Normal function

// function user() {
//   console.log(`DB Connected`);
// }

// user();

// Named IIFE
(function user() {
  console.log(`DB Connected`);
})();

// // IIFE
((name) => {
  console.log(`DB Connected ${name}`);
})("Ali");
