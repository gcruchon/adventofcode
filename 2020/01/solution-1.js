const input = require('./input.json');
const sorted = input.sort((a, b) => a - b);
const len = sorted.length;

let found = false;
sorted.some((number, index) => {
    for( let i = index+1; i < len; i++ ){
        const sum = number + sorted[i];
        if( sum === 2020 ){
            console.log(`A: ${number} | B: ${sorted[i]}`);
            console.log(`A * B: ${number * sorted[i]}`);
            found = true;
            break;
        } else {
            if(sum > 2020) {
                break;
            }
        }
    }
    return found
});