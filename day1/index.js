const fs = require('fs')
let numberArr = fs.readFileSync("./input.txt", "utf-8").split("\n").map(Number);
let newArr = []
function calculate(arr) {
    let count = 0;
    let groupCount = 1;
    for (let i = 0; i < arr.length; i++) {
        count = count + arr[i]
        if (arr[i] === 0) {
            newArr.push({ groupCount, count })
            groupCount++;
            count = 0;
        }
    }
    return newArr
}
let calculatedArr = calculate(numberArr);
const max = calculatedArr.reduce(function (prev, current) {
    return (prev.count > current.count) ? prev : current
})
const sortedArr = calculatedArr.sort((a, b) => b.count - a.count);
const sumOfThreeHighest = sortedArr[0].count + sortedArr[1].count + sortedArr[2].count
console.log(`Highest Calories: ${max.count}, Sum of 3 Highest Elves: ${sumOfThreeHighest}`)

