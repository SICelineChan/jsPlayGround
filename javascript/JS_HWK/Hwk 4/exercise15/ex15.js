function width(num) {
  let output = "";
  for (let i = 0; i < num; i++) {
    output += "*";
    console.log(output);
  }
}
function douTree(times) {
  for (let x = 0; x < times; x++) {
    width(5);
  }
}
douTree(3);
