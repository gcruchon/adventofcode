const getRowPartOfBoardingPass = (boardingPass) => {
    return boardingPass.substring(0, 7);
}
const getRowNumber = (rowPart) => {
    const binaryStr = rowPart.replace(/F/gi, '0').replace(/B/gi, '1');
    return parseInt(binaryStr, 2);
    /*
    let rowMin = 0;
    let rowMax = 127;
    for( let i = 0 ; i < rowPart.length ; i++ ){
        const half = rowPart[i];
        if(half === 'F') {
            rowMax = ((rowMin + rowMax + 1) / 2) - 1;
        } else {
            rowMin = ((rowMin + rowMax + 1) / 2);
        }
        console.debug(`half = '${half}' ==> rowMin = ${rowMin} | rowMax = ${rowMax}`);
    }
    return rowMin;
    */
}

module.exports = { getRowPartOfBoardingPass, getRowNumber };