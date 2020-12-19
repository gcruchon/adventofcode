const calculateTree = (operation) => {
  if (typeof operation == "number") return operation;
  if (operation.operator === "+") {
    return (
      calculateTree(operation.operands[0]) +
      calculateTree(operation.operands[1])
    );
  }
  if (operation.operator === "*") {
    return (
      calculateTree(operation.operands[0]) *
      calculateTree(operation.operands[1])
    );
  }
  throw `Can't manage operation (${JSON.stringify(operation)})`;
};

module.exports = calculateTree;
