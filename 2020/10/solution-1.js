const adapters = require("./data");

const sortedAdapters = adapters.sort((a, b) => a - b);
const { one, two, three, other, currentOutput } = sortedAdapters.reduce(
  (acc, output) => {
    console.log("acc", acc);
    switch (output - acc.currentOutput) {
      case 1:
        acc.one = acc.one + 1;
        break;
      case 2:
        acc.two = acc.two + 1;
        break;
      case 3:
        acc.three = acc.three + 1;
        break;
      default:
        acc.other = acc.other + 1;
        break;
    }
    acc.currentOutput = output;
    return acc;
  },
  { one: 0, two: 0, three: 0, other: 0, currentOutput: 0 }
);

console.log("one: ", one);
console.log("two: ", two);
console.log("three: ", three + 1);
console.log("other: ", other);
console.log("Answer: ", one * (three + 1));
