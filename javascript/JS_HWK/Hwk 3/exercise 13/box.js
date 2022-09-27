let vertStar = "";
for (let i = 0; i <= 3; i++) {
  vertStar += "#";
}
console.log(vertStar);
sideStars();
function sideStars() {
  for (let i = 0; i <= 3; i++) {
    console.log(vertStar[1] + "  " + vertStar[2]);
  }
}
console.log(vertStar);
