let prompt = require("prompt-sync")();

let fruits = ["apple", "pear", "grape", "kiwi"];

for (let i = 0; i < 3; i++) {
  let addMore = prompt("Enter a fruit! ");
  console.log([i]);
  fruits.push(addMore);
}
console.log(fruits);
// Working codes for pushing 5 fruits, showing rounds of loop and displaying all in the Array
// for (let i = 0; i <= 4; i++) {
//   fruits.push(prompt(`Enter a fruit! `));
//   console.log([i]);
// }
// console.log(fruits);

// Working code for pushing a new fruit in the Array!!!
// let addMore = prompt("Enter a fruit! ");
// // console.log(addMore);
// fruits.push(addMore);
// console.log(fruits);
