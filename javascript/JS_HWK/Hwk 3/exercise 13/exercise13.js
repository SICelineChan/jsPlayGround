let greetings = "Welcome to this coding lesson! Have Fun!";
const splits = greetings.split(" ");

let print = [];
// let output = "";
// for (let i = 0; i < splits.length; i++) {
//   let stars = "*";
//   output += stars + " ";
// }
// console.log(output);
// for (let y = 0; y < 5; y++) {
//   let verticalstar = "*" + "                 " + "*";
//   console.log(verticalstar);
// }
printGreetings(splits);
// console.log(output);

function printGreetings(splits) {
  for (let i = 0; i < splits.length; i++) {
    print = "* " + splits[i] + " * ";
    console.log(print);
  }
}
