let prompt = require("prompt-sync")();
function generateRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
let randomNum = generateRandomNumber(1, 10);

let guess = prompt(`Enter a number!`);
// let count = guess.push("");
// let timeOfGuess =
if (guess > randomNum) {
  console.log(`Your Number was larger than the correct answer`);
} else if (guess < randomNum) {
  console.log(`Your Number was too small`);
} else if (guess === randomNum) {
  console.log(`Yay you got it right!`);
}
console.log(guess);
console.log(`The random number was ${randomNum}`);
