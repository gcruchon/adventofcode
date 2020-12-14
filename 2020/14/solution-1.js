const instructions = require("./data");
const getValueWithMask = require("./getValueWithMask");

const { memory } = instructions.reduce((acc, instruction) => {
  if(instruction.type === 'mask') {
    acc.mask = instruction.value;
    return acc;
  } else {
    if(instruction.type === 'mem') {
      acc.memory[instruction.address] = getValueWithMask(instruction.value, acc.mask);
      return acc;
    } else {
      throw 'Unknown instruction type ' + instruction.type;
    }
  }
}, { mask: null, memory: {} });

console.log('Sum', Object.keys(memory).reduce( (acc, key) => acc + memory[key], 0));
