const fs = require('fs');
const data = fs.readFileSync('./input.txt', 'utf-8').split('\n')
data.forEach((str, i) => {
    data[i] = str.split(' ')
})
let points = 0;
let stratGuide = 0;
for (let i = 0; i < data.length; i++) {
    let j = 0;
    if (data[i][0] === 'A') {
        if (data[i][1] === 'X') {
            points += 4;
            stratGuide += 3
        } else if (data[i][1] === 'Y') {
            points += 8
            stratGuide += 4
        } else if (data[i][1] === 'Z') {
            points += 3
            stratGuide += 8
        }
    } else if (data[i][0] === 'B') {
        if (data[i][1] === 'X') {
            points += 1;
            stratGuide += 1;
        } else if (data[i][1] === 'Y') {
            points += 5
            stratGuide += 5;
        } else if (data[i][1] === 'Z') {
            points += 9
            stratGuide += 9;
        }
    } else if (data[i][0] === 'C') {
        if (data[i][1] === 'X') {
            points += 7;
            stratGuide += 2;
        } else if (data[i][1] === 'Y') {
            points += 2
            stratGuide += 6
        } else if (data[i][1] === 'Z') {
            points += 6
            stratGuide += 7;
        }
    }
}
console.log(`Total points: ${points}, Following strategic guide perfectly: ${stratGuide}`);