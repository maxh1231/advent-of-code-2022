const fs = require('fs');
const arr = fs.readFileSync('./input.txt', 'utf-8').split('\n');
const rubric = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
let newArr = [];
for (let i = 0; i < arr.length; i++) {
    let firstHalf = arr[i].slice(0, arr[i].length / 2)
    let secondHalf = arr[i].slice(arr[i].length / 2, arr[i].length)
    for (let j = 0; j < arr[i].length; j++) {
        if (secondHalf.includes(firstHalf[j])) {
            newArr.push(firstHalf[j])
            break;
        }
    }
}
let total = 0;
for (let i = 0; i < newArr.length; i++) {
    total += rubric.indexOf(newArr[i]) + 1
}
let scoreArr = []
for (let i = 2; i < arr.length; i += 3) {
    let firstStr = arr[i - 2]
    let secondStr = arr[i - 1]
    let thirdStr = arr[i]
    for (let j = 0; j < firstStr.length; j++) {
        if (thirdStr.includes(firstStr[j]) && secondStr.includes(firstStr[j])) {
            scoreArr.push(firstStr[j])
            break;
        }
    }
}
let groupTotal = 0;
for (let i = 0; i < scoreArr.length; i++) {
    groupTotal += rubric.indexOf(scoreArr[i]) + 1
}
console.log(`Sum of priorities: ${total}, Sum of group badges: ${groupTotal}`)