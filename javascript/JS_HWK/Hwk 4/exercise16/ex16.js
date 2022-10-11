let xMastree = "";
let topStar = "";
let stem = "I";
// topBottom(1);
top1Star(1);
function width(num) {
  for (let i = 0; i < num; i++) {
    xMastree += "*";
    const printSpace = " ".repeat(num - i);
    // const extraStar = " ".repeat(num + 1);
    // console.log(extraStar + "$" + extraStar);
    console.log(printSpace + "*" + xMastree + xMastree);
  }
}
width(4);

function topBottom(num) {
  const extraStar = " ".repeat(5);
  for (let x = 1; x < num; x++) {
    stem += "I";
  }
  console.log(extraStar + stem);
}
topBottom(1);

function top1Star(num) {
  const extraStar = " ".repeat(5);
  for (let x = 1; x <= num; x++) {
    topStar += "*";
  }
  console.log(extraStar + topStar);
}
