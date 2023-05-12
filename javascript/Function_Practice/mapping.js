let numbers = [3, 56, 2, 48, 5];

//Map -Create a new array by doing something with each item in an array.
// function double(x){
//   return x * 2;
// },
let output = numbers.map((y)=> {return y * 2})
console.log(output)


//Looping through the array and double each value in the array
let result = [];
for (let i = 0; i < numbers.length; i++) {
  result += " " + numbers[i]*2;
}
console.log(result);

//Use for Each function
const newNumbers = [];
numbers.forEach((x)=> newNumbers.push( x * 2))
console.log(newNumbers)



//Filter - Create a new array by keeping the items that return true.

//Reduce - Accumulate a value by doing something to each item in an array.

//Find - find the first item that matches from an array.

//FindIndex - find the index of the first item that matches.