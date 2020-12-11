const { OCCUPIED } = require("./const");

const countOccupiedInRow = (cols) => {
    return cols.split('').filter( seat => seat === OCCUPIED).length;
}
module.exports = (seats) => {
    return seats.reduce( (acc, row) => acc + countOccupiedInRow(row), 0);
}
