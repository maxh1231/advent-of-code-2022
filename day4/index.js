const fs = require('fs')
const data = fs.readFileSync('input.txt', 'utf-8').split('\n')
data.forEach((item, i) => {
    data[i] = item.split(',');
})
let total = 0;
let overlap = 0;
for (let i = 0; i < data.length; i++) {
    let numOne = parseInt(data[i][0].slice(0, data[i][0].indexOf('-')))
    let numTwo = parseInt(data[i][0].slice(data[i][0].indexOf('-') + 1, data[i][0].length))
    let numThree = parseInt(data[i][1].slice(0, data[i][1].indexOf('-')))
    let numFour = parseInt(data[i][1].slice(data[i][1].indexOf('-') + 1, data[i][1].length))
    if (numOne >= numThree && numTwo <= numFour) {
        total++;
    } else if (numThree >= numOne && numFour <= numTwo) {
        total++;
    }
    if (numThree <= numTwo && numFour >= numOne) {
        overlap++
    }
}
console.log(`${total} asssignments fully contain the other, ${overlap} assignments overlap`);
