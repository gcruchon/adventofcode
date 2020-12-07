const countBags = (rules, colorToBecounted) => {
  const colorRule = rules[colorToBecounted];
  if (colorRule.length === 0) {
    return 0;
  } else {
    return colorRule.reduce((acc, content) => {
      return acc + content.amount * (1 + countBags(rules, content.color));
    }, 0);
  }
};

module.exports = countBags;
