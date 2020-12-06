const data = require("./data");

const aggregateGroupeAnswers = (accumulator, currentValue) => {
  for (let i = 0; i < currentValue.length; i++) {
    const currentLetter = currentValue[i];
    if (!accumulator.includes(currentLetter)) {
      accumulator.push(currentLetter);
    }
  }
  return accumulator;
};

const countAnswers = (accumulator, currentGroupAnswers) => {
  const aggregatedGroupeAnswer = currentGroupAnswers.reduce(
    aggregateGroupeAnswers,
    []
  );
  return accumulator + aggregatedGroupeAnswer.length;
};

const result = data.reduce(countAnswers, 0);
console.log(result);