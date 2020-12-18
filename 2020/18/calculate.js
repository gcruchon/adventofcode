const calulateWithoutParenthesis = require('./calulateWithoutParenthesis');

const calculate = (expression) => {
  const matches = expression.match(/^(.*)\(([^\(\)]+)\)(.*)$/);
  if (matches) {
    const beforeParenthesis = matches[1];
    const insideParenthesis = matches[2];
    const afterParenthesis = matches[3];
    return calculate( `${beforeParenthesis}${calulateWithoutParenthesis(insideParenthesis)}${afterParenthesis}` );
  } else {
    return calulateWithoutParenthesis(expression);
  }
};
module.exports = calculate;
