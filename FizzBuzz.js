let output = " ";

for (let counter = 1; counter <= 30; counter++) {
  output += " " + counter;
  if (counter % 3 == 0) {
    output += " Fizz";
  } else if (counter % 5 == 0){ output += "Buzz";}
}
console.log(output);