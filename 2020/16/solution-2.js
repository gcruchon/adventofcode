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

const onlyValidTickets = nearbyTickets.filter((fieldValues) =>
  fieldValues.every((fieldValue) => matchesAtLeastOneRule(fieldValue))
);

let ruleClarification = rules.map((rule) => {
  let listOfPossibleIndexes = [];
  let fieldNumber = 0;
  while (fieldNumber < myTicket.length) {
    if (
      onlyValidTickets.every((fieldValues) =>
        matchRuleRanges(fieldValues[fieldNumber], rule.ranges)
      )
    ) {
      listOfPossibleIndexes.push(fieldNumber);
    }
    fieldNumber++;
  }
  return {
    name: rule.name,
    indexes: listOfPossibleIndexes,
  };
  // throw "No fieldNumber for rule = " + rule.name;
});

// Needs to reduce the array
const hasOnlySingleIndexes = ( rules ) => {
  return rules.every(rule => rule.indexes.length === 1);
}
const getSingleIndexes = (rules) => {
  let singleIndexes = [];
  rules.forEach(rule => {
    if(rule.indexes.length === 1){
      singleIndexes.push(rule.indexes[0]);
    }
  });
  return singleIndexes;
}
const cleanIndexes = (indexes, number) => {
  return indexes.filter( index => index !== number);
}
const cleanRules = (rules, number) => {
  return rules.map(rule => {
    if(rule.indexes.length === 1){
      return rule;
    } else {
      return {
        name: rule.name,
        indexes: cleanIndexes(rule.indexes, number),
      }
    }
  });
}

while(!hasOnlySingleIndexes(ruleClarification)) {
  const singleIndexes = getSingleIndexes(ruleClarification);
  singleIndexes.forEach(singleIndex => {
    ruleClarification = cleanRules(ruleClarification, singleIndex);
  })
}

const values = ruleClarification.map((rule) => {
  return {
    name: rule.name,
    value: myTicket[rule.indexes[0]],
  };
});
console.log('myTicket', values);
console.log('product', values.filter(field => field.name.substring(0, 9) === 'departure').reduce((acc, field) => acc * field.value, 1));
