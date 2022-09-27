let star = "";
function vertical(value1) {
  console.log(value1);
}
function horizontal() {
  star += "*";
}
horizontal();
for (let left = 0; left < 2; left++) {
  for (let right = 0; right < 2; right++) {
    vertical("#");
    horizontal();
  }
}
console.log(star);
