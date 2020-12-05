const getColumnPartOfBoardingPass = (boardingPass) => {
    return boardingPass.substring(7, 10);
}
const getColumnNumber = (ColumnPart) => {
    const binaryStr = ColumnPart.replace(/L/gi, '0').replace(/R/gi, '1');
    return parseInt(binaryStr, 2);
}

module.exports = { getColumnPartOfBoardingPass, getColumnNumber };