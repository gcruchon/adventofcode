const { EMPTY, OCCUPIED } = require("./const");

const hasNoSeatsOccupiedAround = (neighbours) => !neighbours.includes(OCCUPIED);
const isTooBusy = (neighbours,threshold) => neighbours.filter(state => state === OCCUPIED).length > threshold;

module.exports = (currentValue, neighbours, threshold = 3) => {
  if (currentValue === EMPTY && hasNoSeatsOccupiedAround(neighbours)) {
    return OCCUPIED;
  }
  if (currentValue === OCCUPIED && isTooBusy(neighbours, threshold)) {
    return EMPTY;
  }
  return currentValue;
};
