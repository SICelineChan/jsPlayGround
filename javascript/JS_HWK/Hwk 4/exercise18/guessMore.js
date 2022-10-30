let prompt = require("prompt-sync")();
function generateRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

let randomNum = generateRandomNumber(1, 10);

console.log(`The random number is ${randomNum}`);
let guess = prompt("Enter a number! ");
let misses = [];

if (guess == randomNum) {
  console.log(`You got it! `);
} else if (guess != randomNum) {
  misses.push(guess);
  console.log(misses);
}
// Use a function for the loop!
