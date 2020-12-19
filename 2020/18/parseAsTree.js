const parseAsTree = (expression) => {
  if (expression === "") return 0;

  let currentOperation = [{ operands: [] }];
  let currentValue = [""];
  let currentValueType = [null];
  let currentLevel = 0;
  for (let i = 0; i < expression.length; i++) {
    if (expression[i] === "(") {
      currentLevel++;
      currentOperation[currentLevel] = { operands: [] };
      currentValue[currentLevel] = "";
      currentValueType[currentLevel] = "parenthesis";
    } else if (expression[i] === ")") {
      if (currentValueType[currentLevel] === "digit") {
        currentOperation[currentLevel].operands.push(
          currentValue[currentLevel]
        );
        if (currentOperation[currentLevel].operands.length == 2) {
          currentValue[currentLevel] = currentOperation[currentLevel];
        }
      }
      currentValue[currentLevel - 1] = currentValue[currentLevel];
      currentValueType[currentLevel - 1] = "parenthesis";
      currentOperation[currentLevel] = null;
      currentValue[currentLevel] = null;
      currentValueType[currentLevel] = null;
      currentLevel--;
      if (currentOperation[currentLevel].operands.length == 1) {
        currentOperation[currentLevel].operands.push(
          currentValue[currentLevel]
        );
        currentValue[currentLevel] = currentOperation[currentLevel];
        currentOperation[currentLevel] = { operands: [] };
      }
    } else if (expression[i] === " ") {
      if (currentValueType[currentLevel] === "digit") {
        if (currentOperation[currentLevel].operands.length == 1) {
          currentOperation[currentLevel].operands.push(
            currentValue[currentLevel]
          );
          currentValue[currentLevel] = currentOperation[currentLevel];
          currentOperation[currentLevel] = { operands: [] };
        }
      }
      currentValueType[currentLevel] = "blanck";
    } else if (expression[i] === "+" || expression[i] === "*") {
      currentOperation[currentLevel].operands.push(currentValue[currentLevel]);
      currentOperation[currentLevel].operator = expression[i];
      currentValue[currentLevel] = "";
      currentValueType[currentLevel] = "operator";
    } else {
      //It's a digit
      currentValue[currentLevel] = parseInt(
        `${currentValue[currentLevel]}${expression[i]}`
      );
      currentValueType[currentLevel] = "digit";
    }
  }

  if (
    currentValueType[0] === "digit" ||
    currentValueType[0] === "parenthesis"
  ) {
    currentOperation[0].operands.push(currentValue[0]);
    if (currentOperation[0].operands.length == 2) {
      currentValue[0] = currentOperation[0];
    }
  }
  return currentValue[0];
};

module.exports = parseAsTree;