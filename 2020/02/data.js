const fs = require('fs');

const input = fs.readFileSync('./input.txt', {encoding: 'utf-8', flag:'r'});
const lines = input.split("\n");
const data = lines.map((value) => {
    const matches = value.match(/(\d+)-(\d+) (\S): (.+)/);
    if(matches) {
        return {
            min: matches[1],
            max: matches[2],
            letter: matches[3],
            password: matches[4],
        };
    } else {
        throw `Non compliant value: ${value} (${value.length})`;
    }
})

module.exports = data;
