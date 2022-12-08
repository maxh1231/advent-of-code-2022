const fs = require('fs');
const data = fs.readFileSync('input.txt', 'utf-8').split('\n')
global.arr1 = ['F', 'T', 'C', 'L', 'R', 'P', 'G', 'Q']
global.arr2 = ['N', 'Q', 'H', 'W', 'R', 'F', 'S', 'J']
global.arr3 = ['F', 'B', 'H', 'W', 'P', 'M', 'Q']
global.arr4 = ['V', 'S', 'T', 'D', 'F']
global.arr5 = ['Q', 'L', 'D', 'W', 'V', 'F', 'Z']
global.arr6 = ['Z', 'C', 'L', 'S']
global.arr7 = ['Z', 'B', 'M', 'V', 'D', 'F']
global.arr8 = ['T', 'J', 'B']
global.arr9 = ['Q', 'N', 'B', 'G', 'L', 'S', 'P', 'H']
global.partArr1 = global.arr1
global.partArr2 = global.arr2
global.partArr3 = global.arr3
global.partArr4 = global.arr4
global.partArr5 = global.arr5
global.partArr6 = global.arr6
global.partArr7 = global.arr7
global.partArr8 = global.arr8
global.partArr9 = global.arr9
data.forEach((item, i) => {
    data[i] = item.split('from')
})
for (let i = 0; i < data.length; i++) {
    let howManyToMove = parseInt(data[i][0].match(/\d+/)[0])
    let moveFrom = data[i][1][1]
    let moveTo = parseInt(data[i][1][data[i][1].length - 1])
    k = howManyToMove;
    for (let j = 0; j < howManyToMove; j++) {
        global[`arr${moveTo}`].push(global[`arr${moveFrom}`][global[`arr${moveFrom}`].length - 1])
        global[`arr${moveFrom}`].pop();
        global[`partArr${moveTo}`].push(global[`partArr${moveFrom}`][global[`partArr${moveFrom}`].length - k])
        global[`partArr${moveFrom}`].splice(global[`partArr${moveFrom}`].length - k, 1)
        k--;
    }
}
console.log(`${global.arr1[global.arr1.length - 1]}${global.arr2[global.arr2.length - 1]}${global.arr3[global.arr3.length - 1]}${global.arr4[global.arr4.length - 1]}${global.arr5[global.arr5.length - 1]}${global.arr6[global.arr6.length - 1]}${global.arr7[global.arr7.length - 1]}${global.arr8[global.arr8.length - 1]}${global.arr9[global.arr9.length - 1]}`)
console.log('---------')
console.log(`${global.partArr1[global.partArr1.length - 1]}${global.partArr2[global.partArr2.length - 1]}${global.partArr3[global.partArr3.length - 1]}${global.partArr4[global.partArr4.length - 1]}${global.partArr5[global.partArr5.length - 1]}${global.partArr6[global.partArr6.length - 1]}${global.partArr7[global.partArr7.length - 1]}${global.partArr8[global.partArr8.length - 1]}${global.partArr9[global.partArr9.length - 1]}`)