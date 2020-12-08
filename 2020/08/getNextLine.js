const getNextLine = ( currentLine, instruction ) => {
    switch(instruction.cmd) {
        case 'acc':
        case 'nop':
            return currentLine + 1;
        case 'jmp':
            const newLine = currentLine + instruction.arg;
            if( newLine < 0 ){
                throw `Negative line after instruction "${JSON.stringify(instruction)}" on line ${currentLine}`;
            }
            if( newLine === currentLine ){
                throw `Infinite loop at instruction "${JSON.stringify(instruction)}" on line ${currentLine}`;
            }
            return newLine;
        default: 
            throw `CMD not recognized in instruction "${JSON.stringify(instruction)}" on line ${currentLine}`;
    }
}

module.exports = getNextLine;