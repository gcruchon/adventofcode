const example = '0,3,6';
const input = '17,1,3,16,19,0';

const numbers = input.split(',');
let spokenNumbers = {};

for(let i = 0; i < numbers.length; i++){
    spokenNumbers[parseInt(numbers[i], 10)] = i + 1;
}

console.log(spokenNumbers);
let lastSpokenNumber = 0;
for( let turn =  numbers.length + 2; turn <= 30000000; turn++){
    if(turn % 1000000 == 0) {
        console.log(`---- turn n°${turn} - lastSpoken: ${lastSpokenNumber}`);
    }
    // console.log(`---- turn n°${turn} - lastSpoken: ${lastSpokenNumber}`);
    if(spokenNumbers[lastSpokenNumber]) {
        // console.log(`already spoken at round n°${spokenNumbers[lastSpokenNumber]}`);
        const newNumber = turn - 1 - spokenNumbers[lastSpokenNumber];
        // console.log(`Said out loud: ${newNumber}`);
        spokenNumbers[lastSpokenNumber] = turn - 1;
        lastSpokenNumber = newNumber;
    } else {
        // console.log(`never told before`);
        spokenNumbers[lastSpokenNumber] = turn - 1;
        // console.log(`Said out loud: 0`);
        lastSpokenNumber = 0;
    }
}
// console.log('spokenNumbers', spokenNumbers);
console.log('lastSpokenNumber', lastSpokenNumber);