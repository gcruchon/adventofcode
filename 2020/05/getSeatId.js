const { getColumnPartOfBoardingPass, getColumnNumber } = require("./getColumn");
const { getRowPartOfBoardingPass, getRowNumber } = require("./getRow");

const getSeatId = (boardingPass) => {
  const rowPart = getRowPartOfBoardingPass(boardingPass);
  const columnPart = getColumnPartOfBoardingPass(boardingPass);
  const row = getRowNumber(rowPart);
  const column = getColumnNumber(columnPart);
  console.debug(`rowPart = ${rowPart} | columnPart = ${columnPart} | row = ${row} | rowPart = ${column}`);
  return row * 8 + column;
};

const getSeatIdBin = (boardingPass) => {
    const binaryStr = boardingPass.replace(/[FL]/gi, '0').replace(/[BR]/gi, '1');
    return parseInt(binaryStr, 2);
};

module.exports = { getSeatId, getSeatIdBin };
