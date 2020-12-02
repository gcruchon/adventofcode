const isGoalReached = (goal, currentNumber, input, depth) => {
  // console.debug(`isGoalReached(${goal}, ${currentNumber}, input, ${depth})`);
  if (depth <= 0) {
    if (goal === currentNumber) {
      return [];
    } else {
      return false;
    }
  } else {
    let result = false;
    input.some((number, index) => {

      if( number > goal ) {
        return false;
      }
      const localResult = isGoalReached(
        goal - currentNumber,
        number,
        input.slice(index + 1),
        depth - 1
      );
      if (localResult) {
        result = [number, ...localResult];
        return true;
      } else {
        return false;
      }
    });
    return result;
  }
};

const recursif = ( goal, depth ) => {
  const input = require("./input.json");
  const sorted = input.sort((a, b) => a - b);
  const numbers = isGoalReached(goal, 0, sorted, depth);
  console.log("\n---- Recursif ----");
  console.log('numbers', numbers);
  console.log('result', numbers.reduce((accumulator, currentValue) => accumulator * currentValue, 1));
}

module.exports = recursif;
