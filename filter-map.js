"use strict";

// const coding = ["js", "java", "python", "cpp", "ruby"];

// // forEach loop donnot return any values

// const values = coding.forEach((lang) => {
//   //   console.log(lang);
//   return lang;
// });

// console.log(values);

// const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const values = myNums.filter((num) => num > 5);

// const values = [];

// myNums.forEach((num) => {
//   if (num > 5) {
//     values.push(num);
//   }
// });

// console.log(values);

// filter
const books = [
  {
    title: "Book One",
    genre: "Fiction",
    publish: 2000,
    edition: 2004,
  },
  {
    title: "Book Two",
    genre: "History",
    publish: 1981,
    edition: 2004,
  },
  {
    title: "Book Three",
    genre: "Fiction",
    publish: 1981,
    edition: 2004,
  },
  {
    title: "Book Four",
    genre: "Non-Fiction",
    publish: 2001,
    edition: 2004,
  },
  {
    title: "Book Five",
    genre: "Scince",
    publish: 1981,
    edition: 2004,
  },
  {
    title: "Book Six",
    genre: "Science",
    publish: 2000,
    edition: 2004,
  },
  {
    title: "Book Seven",
    genre: "History",
    publish: 1981,
    edition: 2004,
  },
  {
    title: "Book Eight",
    genre: "Fiction",
    publish: 2003,
    edition: 2004,
  },
  {
    title: "Book Nine",
    genre: "History",
    publish: 1981,
    edition: 2004,
  },
  {
    title: "Book Ten",
    genre: "Non-Fiction",
    publish: 2001,
    edition: 2004,
  },
];

// let userBooks = books.filter((book) => book.genre == "History");

// userBooks = books.filter(
//   (book) => book.publish >= 2000 && book.genre == "Fiction"
// );

// console.log(userBooks);
// console.log(userBooks.length);

// ==============================

// Map method
// const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const newNums = myNums.map((num) => num + 10);

// Method Chaining
// const newNums = myNums
//   .map((num) => num * 10)
//   .map((num) => num + 1)
//   .filter((num) => num > 50);
// console.log(newNums);

// =============================
// Reduce method
const myNums = [1, 2, 3, 4, 5];

// const myTotal = myNums.reduce((acc, curVal) => {
//   console.log(`acc: ${acc} and curVal: ${curVal}`);
//   return acc + curVal;
// }, 0); // here 0 would be assigned to acc only once (first time)

// console.log(myTotal);

const shopingCart = [
  { itemName: "JS Course", price: 2999 },
  { itemName: "Python Course", price: 3999 },
  { itemName: "C# Course", price: 3999 },
  { itemName: "Java Course", price: 4999 },
  { itemName: "Ruby Course", price: 3999 },
];

const totalPrice = shopingCart.reduce((acc, item) => {
  return acc + item.price;
}, 0);

console.log(`Total price of course: ${totalPrice}`);
