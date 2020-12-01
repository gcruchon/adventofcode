const input = require("./input.json");
const sorted = input.sort((a, b) => a - b);
const len = sorted.length;

let found = false;
sorted.some((number, index) => {
  for (let i = index + 1; i < len; i++) {
    for (let j = i + 1; j < len; j++) {
      const sum = number + sorted[i] + sorted[j];
      if (sum === 2020) {
        console.log(`A: ${number} | B: ${sorted[i]} | C: ${sorted[j]}`);
        console.log(`A * B * C: ${number * sorted[i] * sorted[j]}`);
        found = true;
        break;
      } else {
        if (sum > 2020) {
          break;
        }
      }
    }
  }
  return found;
});
