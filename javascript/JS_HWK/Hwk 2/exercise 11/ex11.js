const arrayNum = [4, 7, 10, 12, 1, 8, 20, 16];
let outputSum = 0;
function addingNum() {
  for (let i = 0; i < arrayNum.length; i++) {
    outputSum += arrayNum[i];
  }
  return outputSum;
}
addingNum();
function averageNum(array) {
  let outputAverage = outputSum / array.length;
  return outputAverage;
}
let average = averageNum(arrayNum);

let highestNumber = 0;
let lowestNumber = arrayNum[0];
for (let i = 0; i < arrayNum.length; i++) {
  if (arrayNum[i] > highestNumber) {
    highestNumber = arrayNum[i];
  }
  if (arrayNum[i] < lowestNumber) {
    lowestNumber = arrayNum[i];
  }
}
calculation.innerHTML = `The sum of all the number in the array is ${outputSum} and the average of the array is ${average} `;
comparison.innerHTML = `The highest value of all the number in the array is ${highestNumber} and the lowest value of the array is ${lowestNumber} `;
