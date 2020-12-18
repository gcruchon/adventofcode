const performAddition = (expression) => {
    const matches = expression.match(/^(.* )?((\d+) \+ (\d+))(.*)$/);
    if (matches) {
      const beforeAddition = matches[1] ? matches[1] : '';
      const num1 = parseInt(matches[3], 10);
      const num2 = parseInt(matches[4], 10);
      const afterAddition = matches[5];
      return performAddition(`${beforeAddition}${num1 + num2}${afterAddition}`);
    } else {
      return expression;
    }
  };

  module.exports = performAddition;