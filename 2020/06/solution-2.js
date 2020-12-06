const data = require("./data");

const aggregateGroupeAnswers = (accumulator, currentValue) => {
  let newValue = "";
  if (accumulator === undefined) {
    newValue = currentValue;
  } else {
    for (let i = 0; i < accumulator.length; i++) {
      const currentLetter = accumulator[i];
      if (currentValue.indexOf(currentLetter) > -1) {
        newValue += currentLetter;
      }
    }
  }
  return newValue;
};

const countAnswers = (accumulator, currentGroupAnswers) => {
  const aggregatedGroupeAnswer = currentGroupAnswers.reduce(
    aggregateGroupeAnswers,
  );
  console.log(currentGroupAnswers, aggregatedGroupeAnswer, aggregatedGroupeAnswer.length);
  return accumulator + aggregatedGroupeAnswer.length;
};

const result = data.reduce(countAnswers, 0);
console.log(result);


