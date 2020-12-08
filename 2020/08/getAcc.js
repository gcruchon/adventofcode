const getAcc = ( acc, instruction ) => {
    switch(instruction.cmd) {
        case 'jmp':
        case 'nop':
            return acc;
        case 'acc':
            return acc + instruction.arg;
        default: 
            throw `CMD not recognized in instruction "${JSON.stringify(instruction)}" on line ${currentLine}`;
    }
}

module.exports = getAcc;