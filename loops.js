"use strict";

// for loop
// for (let i = 0; i <= 10; i++) {
//   if (i === 5) {
//     console.log(`${i} is best number`);
//     continue;
//   }
//   console.log(i);
// }

for (let i = 1; i <= 10; i++) {
  //   console.log(`outer loop value: ${i}`);

  for (let j = 1; j <= 10; j++) {
    // console.log(`outer loop ${i} with inner value: ${j}`);
    // console.log(`${i} * ${j} = ${i * j}`);
  }
}

const myArray = ["Flash", "Batman", "Superman"];
// console.log(`Array length: ${myArray.length}`);

for (let i = 0; i < myArray.length; i++) {
  //   console.log(myArray[i]);
}

// =========== While and Do While Loop ===========
let i = 0;
while (i < 10) {
  i++;
  //   console.log(i);
}

const myArr = ["Batman", "Superman", "Flash"];
let j = 0;
// while (j < myArr.length) {
//   console.log(myArr[j]);
//   j++;
// }

// Do while loop
let score = 11;
do {
  console.log(`Score is: ${score}`);
  score++;
} while (score <= 10);
