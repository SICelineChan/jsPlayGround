function width(num, times) {
  let output = "";
  for (let i = 0; i < num; i++) {
    output += "*";
    for (let x = 0; x < times; x++) {
      //   output += "*";
      console.log(output);
    }
    console.log(output);
  }
  //   console.log(output);
}
width(4, 3);
