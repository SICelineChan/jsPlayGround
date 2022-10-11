let greetings = "Welcome to this coding lesson!";
const splits = greetings.split(" ");
let longWord = 0;
for (let i = 0; i < splits.length; i++) {
  if (splits[i].length > longWord) {
    longWord = splits[i].length;
    console.log(longWord);
  }
}
console.log("*".repeat(longWord + 4));

for (let i = 0; i < splits.length; i++) {
  const currentword = splits[i].length;
  const printPad = " ".repeat(longWord - currentword);

  console.log("* " + splits[i] + printPad + " *");
}
console.log("*".repeat(longWord + 4));
