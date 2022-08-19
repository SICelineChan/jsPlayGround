let w = "withdraw";
w = w.toUpperCase();
let d = "deposit";
d = d.toUpperCase();

var userKonto = 500; 

let firstReq = prompt("Press W to WITHDRAW or D to DEPOSIT.");
if (firstReq === "w") {
  let howMuch = prompt("How much?");
    if (howMuch % 10 !== 0) {
    console.log("Only enter number in x10 is given.");
  } else if (userKonto > howMuch) {
    console.log("You have " + (userKonto - (howMuch)) + " left in your account.");
  } else if (userKonto < howMuch) {
    console.log("insufficient fund.");
  }
} 
else if (firstReq === "d") {
  console.log("To deposit, please wait...");
  var addFund = parseInt(prompt("Enter deposit amount?"));
  console.log("You have " + (userKonto + addFund) + " now in you account.");
}