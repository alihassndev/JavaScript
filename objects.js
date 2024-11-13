"use strict";

// singleton => create an object from constructor not by literals
// Object.create; // by the use of constructor

// Object literals

const mySym = Symbol("key1");

const user = {
  "full name": "Ali",
  [mySym]: "myKey1", // use symbol value in object
  age: 22,
  location: "Sialkot",
  email: "ali@gmail.com",
  isLoggedIn: false,
  lastLoginDays: ["Monday", "Friday"],
};

user.email = "ali@gpt.com";

// there are two ways to print the values of the object "dot method and [] method"

// console.log(user["full name"]);
// console.log(user.email);
// // to print symbol values using object
// console.log(user[mySym]);
// console.log(typeof user[mySym]);
// Alternative of above
// console.log(user["email"]);

// if we freeze the object then changes would not be applied
// Object.freeze(user);

// user.email = "ali@yahoo.com";
// console.log(user.email);

user.greeting = function () {
  console.log("Hello JS user");
};

user.greeting2 = function () {
  console.log(`Hello JS user, ${this["full name"]}`);
};

// console.log(user);
// user.greeting();
// user.greeting2();

// ================== Part 2 ==================
// const olxUser = new Object();
const olxUser = {};
olxUser.id = "123";
olxUser.name = "Ali";
olxUser.isLoggedIn = false;

// console.log(olxUser);

const regularUser = {
  email: "ali@gmail.com",
  fullName: {
    userFullName: {
      firstName: "Ali",
      lastName: "Hassan",
    },
  },
};

// console.log(regularUser.fullName.userFullName.firstName);

const obj1 = { 1: "a", 2: "b" };
const obj2 = { 3: "c", 4: "d" };
const obj4 = { 5: "a", 6: "b" };

// const obj3 = { obj1, obj2 };

// const obj3 = Object.assign({}, obj1, obj2, obj4);
// const obj3 = Object.assign(obj1, obj2);

const obj3 = { ...obj1, ...obj2, ...obj4 };
// console.log(obj3);

const users = [
  {
    id: 1,
    email: "ali@gmail.com",
  },
  {
    id: 2,
    email: "ali@gmail.com",
  },
  {
    id: 3,
    email: "ali@gmail.com",
  },
];

// user[1].email;
// console.log(olxUser);

// console.log(Object.keys(olxUser));
// console.log(Object.values(olxUser));
// console.log(Object.entries(olxUser));

// console.log(olxUser.hasOwnProperty("isLoggedIn")); // output => true
// console.log(olxUser.hasOwnProperty("isLogged")); // output => false

// Destructuring
const course = {
  course: "JS",
  price: 1000,
  instructor: "Ali",
};

// course.instructor
// destructuring of object
// we must use same name of key as we used in the object but we can rename it using ":"
const { instructor: inst } = course;
console.log(inst);

// json format
// {
//   "name": "Ali",
//   "course": "JS",
//   "price": "Free"
// }

{
  "results": [
    {
      "gender": "female",
      "name": {
        "title": "Miss",
        "first": "Jennie",
        "last": "Nichols"
      },
      "location": {
        "street": {
          "number": 8929,
          "name": "Valwood Pkwy",
        },
        "city": "Billings",
        "state": "Michigan",
        "country": "United States",
        "postcode": "63104",
        "coordinates": {
          "latitude": "-69.8246",
          "longitude": "134.8719"
        },
        "timezone": {
          "offset": "+9:30",
          "description": "Adelaide, Darwin"
        }
      },
      "email": "jennie.nichols@example.com",
      "login": {
        "uuid": "7a0eed16-9430-4d68-901f-c0d4c1c3bf00",
        "username": "yellowpeacock117",
        "password": "addison",
        "salt": "sld1yGtd",
        "md5": "ab54ac4c0be9480ae8fa5e9e2a5196a3",
        "sha1": "edcf2ce613cbdea349133c52dc2f3b83168dc51b",
        "sha256": "48df5229235ada28389b91e60a935e4f9b73eb4bdb855ef9258a1751f10bdc5d"
      },
      "dob": {
        "date": "1992-03-08T15:13:16.688Z",
        "age": 30
      },
      "registered": {
        "date": "2007-07-09T05:51:59.390Z",
        "age": 14
      },
      "phone": "(272) 790-0888",
      "cell": "(489) 330-2385",
      "id": {
        "name": "SSN",
        "value": "405-88-3636"
      },
      "picture": {
        "large": "https://randomuser.me/api/portraits/men/75.jpg",
        "medium": "https://randomuser.me/api/portraits/med/men/75.jpg",
        "thumbnail": "https://randomuser.me/api/portraits/thumb/men/75.jpg"
      },
      "nat": "US"
    }
  ],
  "info": {
    "seed": "56d27f4a53bd5441",
    "results": 1,
    "page": 1,
    "version": "1.4"
  }
}