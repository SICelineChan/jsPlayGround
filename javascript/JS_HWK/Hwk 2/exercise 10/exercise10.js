const show = document.querySelector("#show");

let names = ["Josie", "Cathrin", "Bob", "Max", "Hannah", "Alex"];

let longName = "";
for (let i = 0; i < names.length; i++) {
  if (names[i].length > longName.length) {
    longName = names[i];
  }
}
console.log(longName + " " + longName.length);
show.innerHTML = ` ${longName} has the longest name with ${longName.length}`;
