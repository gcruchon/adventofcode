const seats = require("./data");
const allSeatsAreTheSame = require("./allSeatsAreTheSame");
const getNextRound = require("./getNextRound");
const getVisibleNeighbours = require("./getVisibleNeighbours");
const countOccupied = require("./countOccupied");

let prevSeats = [];
let currentSeats = seats;

while (!allSeatsAreTheSame(currentSeats, prevSeats)) {
  prevSeats = currentSeats;
  currentSeats = getNextRound(currentSeats, getVisibleNeighbours, 4);
}
console.log("result: ", countOccupied(currentSeats));
