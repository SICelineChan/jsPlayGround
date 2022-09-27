let greetings = "Welcome to this coding lesson!";
const splits = greetings.split(" ");
// console.log(splits.length);
// console.log(splits);

let print = [];
// let output = "";
// for (let i = 0; i < splits.length; i++) {
//   let stars = "*";
//   output += stars;
// }
// console.log(output);

printGreetings(splits);

function printGreetings(splits) {
  let someStars = "*";
  for (let i = 0; i < splits.length; i++) {
    print = "*" + splits[i];
    console.log(print);
    let moreStars = "*";
    someStars += moreStars;
  }
  console.log(someStars);
}
