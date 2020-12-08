
const isLineAlreadyPlayed = (allLinesPlayed, currentLine) => {
    return allLinesPlayed.includes(currentLine);
}
module.exports = isLineAlreadyPlayed;