const getPredecessors = require("./getPredecessors");
const getPossibleSums = require("./getPossibleSums");

module.exports = (numbers, nbOfPredecessors) => {
  for (let i = nbOfPredecessors; i < numbers.length; i++) {
    const num = numbers[i];
    const predecessors = getPredecessors(numbers, i - nbOfPredecessors, nbOfPredecessors);
    const possibleSums = getPossibleSums(predecessors);
    //console.debug('num', num);
    //console.debug('predecessors', predecessors);
    //console.debug('possibleSums', possibleSums);
    if (!possibleSums.includes(num)) {
      return { notMatchingNumber: num, notMatchingIndex: i };
    }
  }
};
