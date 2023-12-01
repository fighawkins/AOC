
let fs = require('fs');
let input = fs.readFileSync('./day-1.txt').toString();

let total=0;

for(let line of input.split('\n')) {
    const numbers = line.split('').filter(el => !isNaN(parseInt(el)));
    total+= parseInt(`${numbers[0]}${numbers[numbers.length-1]}`)

}

console.log(total)
