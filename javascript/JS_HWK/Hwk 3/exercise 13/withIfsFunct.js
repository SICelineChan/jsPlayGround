let greetings = "Welcome to this coding lesson!";
const splits = greetings.split(" ");
// console.log(splits[0].length);
// console.log(splits);
let newArray = [];
printGreetings(splits);

console.log(splits);
for (let i = 0; i < splits.length; i++) {
  wordCount = splits[i].length;
  console.log(wordCount);
}

function printGreetings(splits) {
  for (let i = 0; i < splits.length; i++) {
    newArray = "*" + splits[i];
    console.log(newArray);
    // console.log(newArray.length);
    // let nothing = undefined;
    // nothing = " ";
    // if (newArray[i] === nothing) {
    //   newArray += "*";
    //   console.log(newArray[i]);}
  }
}
