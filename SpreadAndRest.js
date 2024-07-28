// rest

// array destructuring
// const array = [1, 2, 3, 4, 5, 6];
// const [a, ...b] = array;
// console.log("a", a);
// console.log("b", b);

// object destructuring

// const person = {
//   "full name": "hassan masood",
//   age: 22,
//   gender: "male",
// };

// // const { "full name": fullName, ...user } = person; // in object you have to write the exact name of the property to call it before rest
// // console.log(fullName); // Output: fullName hassan masood
// // console.log(user); // Output: d { age: 22, gender: "male" }

// // functions

// const check = ({ "full name": fullName, ...user }) => {
//   console.log(fullName);
//   console.log(user);
// };
// check(person);

// Spread
// arrays

// const array = [1, 2, 3, 4, 5];
// const temp = [...array];
// temp[0] = "new value";
// console.log(temp);
// console.log(array);

// const array = [1, 2, 3, 4, 5];
// const [a, ...b] = [...array];
// console.log(a, b);

// objects
// const newOne = { ...obj };

// functions
// const array1 = [1, 2, 3, 4, 5];
// const myfunc = (a, b, c) => {
//   console.log(a);
//   console.log(b);
//   console.log(c);
// };
// myfunc(...array1);

// for nesting
const arr = [1, 2, 3, [4, 5, 6]];
const arr1 = JSON.parse(JSON.stringify(arr));
arr1[3][1] = 69;
console.log(arr, arr1);
