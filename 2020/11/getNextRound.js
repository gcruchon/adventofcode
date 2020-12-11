const getNextValue = require("./getNexTValue");

const getNextRound = (seats, getNeighbours, threshold = 3) => {
  // console.log(' ------ getNextRound : seats', seats);
  let newSeats = [];
  for (let row = 0; row < seats.length; row++) {
    let newCols = "";
    const cols = seats[row];
    // console.log('cols', cols);
    for (let col = 0; col < cols.length; col++) {
      const neighbours = getNeighbours(seats, row, col);
      newCols += getNextValue(cols[col], neighbours, threshold);
    }
    // console.log('newCols', newCols);
    newSeats.push(newCols);
  }
  return newSeats;
};

module.exports = getNextRound;
