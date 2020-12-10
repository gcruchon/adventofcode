const adapters = require("./data");

let sortedAdapters = [0, ...adapters.sort((a, b) => a - b)];
console.log("sortedAdapters", sortedAdapters);

const numberOfPaths = (numberOfDigits) => {
  switch (numberOfDigits) {
    case 1:
    case 2:
      return 1;
    case 3:
      return 2;
    case 4:
      return 4;
    case 5:
      return 7;
    default:
      throw "numberOfPaths -- Not managed: " + numberOfDigits;
  }
};

let numbersOflocalPath = [];
let numberOfConsecutiveJolts = 1;
for (let i = 1; i < sortedAdapters.length; i++) {
  if (sortedAdapters[i] - sortedAdapters[i - 1] === 1) {
    numberOfConsecutiveJolts++;
  } else {
    numbersOflocalPath.push(numberOfPaths(numberOfConsecutiveJolts));
    numberOfConsecutiveJolts = 1;
  }
}
numbersOflocalPath.push(numberOfPaths(numberOfConsecutiveJolts));
console.log('numbersOflocalPath', numbersOflocalPath);
console.log(
  'result',
  numbersOflocalPath.reduce((acc, num) => acc * num, 1)
);

/*

# 0, 1,  2,  3,  4
>> 7


# 7,  8,  9, 10, 11
7, 8, 11
7, 9, 11
7, 10, 11
7, 8, 9, 11
7, 8, 10, 11
7, 9, 10, 11
7,  8,  9, 10, 11
>> 7

#17, 18, 19, 20
>> 4

#23, 24, 25
>> 2

#31, 32, 33, 34, 35
>> 7

#45, 46, 47, 48, 49
>> 7

*/
