// Cannot read properties of undefined (reading 'forEach')

// EXAMPLE 1 - Initialize the variable to an empty array

const fromDb = undefined;

const arr = fromDb || [];
console.log(arr); // 👉️ []

arr.forEach(element => {
  console.log(element);
});

// ------------------------------------------------------------------

// // EXAMPLE 2 - Use an `if` statement to solve the error

// const arr = undefined;

// if (arr) {
//   arr.forEach(element => {
//     console.log(element);
//   });
// }

// ------------------------------------------------------------------

// // EXAMPLE 3 - Checking if the variable stores an array

// const arr = undefined;

// if (Array.isArray(arr)) {
//   arr.forEach(element => {
//     console.log(element);
//   });
// }

// ------------------------------------------------------------------

// // EXAMPLE 4 - Using the optional chaining (?.) operator

// const arr = undefined;

// arr?.forEach(element => {
//   console.log(element);
// });

// ------------------------------------------------------------------

// // EXAMPLE 5 - Solve the error when working with arrays

// const arr = [];

// arr[0]?.forEach(element => {
//   console.log(element);
// });
