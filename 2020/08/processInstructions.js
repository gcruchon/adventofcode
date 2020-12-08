const getAcc = require("./getAcc");
const getNextLine = require("./getNextLine");
const isLineAlreadyPlayed = require("./isLineAlreadyPlayed");

module.exports = (instructions) => {
  // console.log(`--------- NEW TEST ---------`);
  let currentLine = 0;
  let lastLine = null;
  let allLinesPlayed = [];
  let acc = 0;
  while (
    !isLineAlreadyPlayed(allLinesPlayed, currentLine) &&
    currentLine < instructions.length
  ) {
    allLinesPlayed.push(currentLine);
    const instruction = instructions[currentLine];
    acc = getAcc(acc, instruction);
    // console.log(`Line: ${currentLine} -- instruction: ${JSON.stringify(instruction)} -- acc = ${acc}`);
    lastLine = currentLine;
    currentLine = getNextLine(currentLine, instruction);
  }
  return { acc, lastLine };
};
