// Loop looping through another loop for comparison

let bobsFollowers = ["Annie", "Jimmy", "Johny", "Tammy"];
let tinasFollowers = ["Jimmy", "Tom", "Tammy"];
let mutualFollowers = [];
for (let i = 0; i < bobsFollowers.length; i++) {
  for (let t = 0; t < tinasFollowers.length; t++){
    if (bobsFollowers[i] === tinasFollowers[t]) {
    mutualFollowers.push(tinasFollowers[t]);
      console.log(mutualFollowers);
    }
  }
}

// this is for while loop
const cards = ['diamond', 'spade', 'heart', 'club'];

let currentCard = "";
while (currentCard !=="spade"){
  currentCard = cards[Math.floor(Math.random() * 4)];
  console.log(currentCard);
} 

// Using do...while, do something while this while loop is doing something
let cupsOfSugarNeeded = 2;
let cupsAdded = 0;

do {
  cupsAdded = cupsAdded + 1
  console.log(cupsAdded)
} while (cupsAdded < cupsOfSugarNeeded );

// Using break
const rapperArray = ["Lil' Kim", "Jay-Z", "Notorious B.I.G.", "Tupac"];

// Write your code below
for (let i = 0; i < rapperArray.length; i++){
  console.log(rapperArray[i]);
  if (rapperArray[i] ==="Notorious B.I.G."){
    break;
  }
}
console.log("this is where to break!")
console.log("And if you don't know, now you know.");

// Use this example to play with more loops
let groceryList = ['orange juice', 'bananas', 'coffee beans', 'brown rice', 'pasta', 'coconut oil', 'plantains'];