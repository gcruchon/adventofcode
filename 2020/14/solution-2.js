const instructions = require("./data");
const getAddressesWithMask = require("./getAddressesWithMask");

const { memory } = instructions.reduce((acc, instruction) => {
  if(instruction.type === 'mask') {
    acc.mask = instruction.value;
    return acc;
  } else {
    if(instruction.type === 'mem') {
      const addresses = getAddressesWithMask(instruction.address, acc.mask);
      addresses.forEach(address => {
        acc.memory[address] = instruction.value;
      });
      return acc;
    } else {
      throw 'Unknown instruction type ' + instruction.type;
    }
  }
}, { mask: null, memory: {} });

console.log('Sum', Object.keys(memory).reduce( (acc, key) => acc + memory[key], 0));
