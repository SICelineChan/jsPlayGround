let sideWay = " ";
let ans = " ";
let output = " ";
timesTable(1);
timesTable(2);
timesTable(3);
timesTable(4);
timesTable(5);
timesTable(6);
timesTable(7);
timesTable(8);
timesTable(9);
timesTable(10);

function timesTable(num) {
  for (let a = 1; a <= 10; a++) {
    ans += a * num + " ";
  }
  //
}
// console.log(ans);

const cutNum = ans.split(" ");
console.log(cutNum);
