const calculate = require('./calculate');
const performAddition = require('./performAddition');

const calculateAdditionFirst = (expression) => {
  const matches = expression.match(/^(.*)\(([^\(\)]+)\)(.*)$/);
  if (matches) {
    const beforeParenthesis = matches[1];
    const insideParenthesis = matches[2];
    const afterParenthesis = matches[3];
    return calculateAdditionFirst( `${beforeParenthesis}${calculateAdditionFirst(insideParenthesis)}${afterParenthesis}` );
  } else {
    return calculate(performAddition(expression));
  }
};
module.exports = calculateAdditionFirst;