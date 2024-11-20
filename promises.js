"use strict";

// const promise1 = new Promise(function (resolve, reject) {
//   // Do async task
//   // DB call, Cryptography, network

//   setTimeout(() => {
//     console.log(`Async task completed`);
//     resolve();
//   }, 2000);
// });

// // resolve related to then()

// promise1.then(function () {
//   console.log("Promise consumed");
// });

// ============== Promise 2 ==============
// new Promise(function (resolve, reject) {
//   setTimeout(() => {
//     console.log(`Async task 2`);
//     resolve();
//   }, 1000);
// }).then(function () {
//   console.log("Promise 2 resolved");
// });

// ============== Promise 3 ==============
// const promise3 = new Promise(function (resolve, reject) {
//   setTimeout(() => {
//     resolve({ username: "Ali", email: "ali@gmail.com" });
//   }, 1000);
// });

// promise3.then(function (user) {
//   console.log(user);
// });

// ============== Promise 4 ==============
// const promise4 = new Promise(function (resolve, reject) {
//   setTimeout(() => {
//     let error = true;
//     if (!error) resolve({ username: "ali", password: "123" });
//     else reject(`Something went wrong`);
//   }, 1000);
// });

// promise4
//   .then(function (user) {
//     console.log(user); // Logs { username: "ali", password: "123" } if resolved
//     return user.username; // Returns "ali"
//   })
//   .then(function (username) {
//     console.log(username); // Logs "Something went wrong" if rejected
//   })
//   .catch(function (error) {
//     console.error(error);
//   })
//   .finally(function () {
//     console.log(`Promise is finally executed`);
//   });

// Optional: Log `users` to check its value
//   users.then(username => console.log(username));

// ============== Promise 5 ==============
// const promise5 = new Promise(function (resolve, reject) {
//   setTimeout(() => {
//     let error = true;
//     if (!error) {
//       resolve({ user: "javascript", password: "123" });
//     } else {
//       reject("Error: JS went wrong");
//     }
//   }, 1000);
// });

// async function consumePromise5() {
//   try {
//     const response = await promise5;
//     console.log(response);
//   } catch (error) {
//     console.log(error);
//   }
// }

// consumePromise5();

// ===================================
// async function getUsers() {
//   try {
//     const response = await fetch("https://jsonplaceholder.typicode.com/users");

//     const data = await response.json();
//     console.log(data);
//   } catch (error) {
//     console.log(`Error: ${error}`);
//   }
// }

// getUsers();

// ===================================
fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => {
    return response.json();
  })
  .then((users) => {
    console.log(users);
  })
  .catch((error) => {
    console.error(error);
  });
