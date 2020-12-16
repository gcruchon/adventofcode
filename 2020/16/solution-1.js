const { rules, myTicket, nearbyTickets } = require("./data");

const matchRuleRanges = (number, ranges) => {
    return ranges.some((range) => {
      return number >= range.min && number <= range.max;
    });
  };
  
  const matchesAtLeastOneRule = (number) => {
    return rules.some((rule) => {
      return matchRuleRanges(number, rule.ranges);
    });
  };

let nonMatchingValue = [];

nearbyTickets.forEach((fieldValues) => {
  fieldValues.forEach((fieldValue) => {
    if (!matchesAtLeastOneRule(fieldValue)) {
      nonMatchingValue.push(fieldValue);
    }
  });
});

console.log("nonMatchingValue", nonMatchingValue);
console.log("ticket scanning error rate", nonMatchingValue.reduce((acc, value) => acc + value, 0));
