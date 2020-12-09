module.exports = (numbers, index, numOfElements = 25) => {
    return numbers.slice(index, index + numOfElements);
}