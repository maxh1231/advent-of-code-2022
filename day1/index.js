const fs = require('fs')
let numberArr = fs.readFileSync("./input.txt", "utf-8").split("\n").map(Number);
let newArr = []
let count = 0;
for (let i = 0; i < numberArr.length; i++) {
    count += numberArr[i]
    if (numberArr[i] === 0) {
        newArr.push(count)
        count = 0;
    }
}
const sortedArr = newArr.sort((a, b) => b - a);
const sumOfThreeHighest = sortedArr[0] + sortedArr[1] + sortedArr[2]
console.log(`Highest Calories: ${sortedArr[0]}, Sum of 3 Highest Elves: ${sumOfThreeHighest}`)