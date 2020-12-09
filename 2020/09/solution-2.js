const numbers = require("./data");
const getNotMatchingNumber = require('./getNotMatchingNumber');

const { notMatchingNumber, notMatchingIndex } = getNotMatchingNumber(numbers, 25);

console.log('Not matching number : ', notMatchingNumber);
console.log('Not matching index : ', notMatchingIndex);

let lastIndex = -1;
let firstIndex = -1;
for( let i = notMatchingIndex -1; i >= 0 ; i--){
    let currentSum = 0;
    for( let j = i; j >= 0 ; j--){
        currentSum += numbers[j];
        if( currentSum === notMatchingNumber ){
            console.log('Bingo!');
            lastIndex = i;
            firstIndex = j;
            break;
        }
        if( currentSum > notMatchingNumber ){
            break;
        }
    }
    if( currentSum === notMatchingNumber ){
        break;
    }
}

// console.log(`firstIndex=${firstIndex} | value=${numbers[firstIndex]}`);
// console.log(`lastIndex=${lastIndex} | value=${numbers[lastIndex]}`);
const tableWeekness = numbers.slice(firstIndex, lastIndex + 1);
const min = Math.min(...tableWeekness);
const max = Math.max(...tableWeekness);
console.log(`min=${min} | max=${max}`);
console.log(`Weakness : `, min + max);

