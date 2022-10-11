// Write a programa that asks the user for a size s and then outputs a triangle with the height and width of s
function width(num) {
  let output = "";
  for (let i = 0; i < num; i++) {
    output += "*";
    console.log(output);
  }
}
width(6);
