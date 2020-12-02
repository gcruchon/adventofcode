const bourrin = (goal) => {
  const input = require("./input.json");
  const sorted = input.sort((a, b) => a - b);
  let nbOfRests = 0;
  sorted.some((number, index) => {
    for (let i = index + 1; i < sorted.length; i++) {
      // console.debug(`number: ${number} | index: ${index} | i: ${i}`);
      const sum = number + sorted[i];
      nbOfRests++;
      if (sum === goal) {
        console.log(`---- Bourrin ----`);
        console.log(`A: ${number} | B: ${sorted[i]}`);
        console.log(`A * B: ${number * sorted[i]}`);
        console.log(`number of tests: ${nbOfRests}`);
        return true;
      } else {
        nbOfRests++;
        if (sum > 2020) {
          break;
        }
      }
    }
    return false;
  });
};

const recursif = require("./recursif");

bourrin(2020);
recursif(2020, 2);
