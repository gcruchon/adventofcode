const bourrin = (goal) => {
  const input = require("./input.json");
  const sorted = input.sort((a, b) => a - b);
  const len = sorted.length;

  let nbOfRests = 0;
  sorted.some((number, index) => {
    for (let i = index + 1; i < len; i++) {
      for (let j = i + 1; j < len; j++) {
        // console.debug(`number: ${number} | index: ${index} | i: ${i} | i: ${j}`);
        const sum = number + sorted[i] + sorted[j];
        nbOfRests++;
        if (sum === 2020) {
          console.log(`---- Bourrin ----`);
          console.log(`A: ${number} | B: ${sorted[i]} | C: ${sorted[j]}`);
          console.log(`A * B * C: ${number * sorted[i] * sorted[j]}`);
          console.log(`number of tests: ${nbOfRests}`);
          return true;
        } else {
          nbOfRests++;
          if (sum > 2020) {
            break;
          }
        }
      }
    }
    return false;
  });
};

const recursif = require("./recursif");

bourrin(2020);
recursif(2020, 3);
