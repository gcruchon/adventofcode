const calulateWithoutParenthesis = (expression) => {
  const matches = expression.match(/^(\d+) ([\+\*]) (\d+)(.*)$/);
  if (matches) {
    const leftNumber = parseInt(matches[1], 10);
    const operator = matches[2];
    const rightNumber = parseInt(matches[3], 10);
    const remainingExpression = matches[4];
    let result = 0;
    if(operator === '+') {
        result = leftNumber + rightNumber;
    } else {
        result = leftNumber * rightNumber;
    }
    if(remainingExpression === ''){
        return result;
    } else {
        return calulateWithoutParenthesis( `${result}${remainingExpression}` );
    }
  } else {
    if( expression.match(/^\d+$/) ){
      return parseInt(expression, 10);
    } else {
      throw "Not compliant expression:" + expression;
    }    
  }
};
module.exports = calulateWithoutParenthesis;
