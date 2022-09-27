let greetings = "Write a sentence here please!";

const splits = greetings.split(" ");

console.log(splits.length);
console.log(splits);
let print = [];

function printGreetings(splits) {
  for (let i = 0; i < splits.length; i++) {
    print = splits[i];
    console.log(print);
  }
}

printGreetings(splits);
