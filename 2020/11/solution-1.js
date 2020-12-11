const seats = require("./data");
const allSeatsAreTheSame = require("./allSeatsAreTheSame");
const getNextRound = require("./getNextRound");
const getNeighbours = require("./getNeighbours");
const countOccupied = require("./countOccupied");

let prevSeats = [];
let currentSeats = seats;

while (!allSeatsAreTheSame(currentSeats, prevSeats)) {
  prevSeats = currentSeats;
  currentSeats = getNextRound(currentSeats, getNeighbours);
}
console.log("result: ", countOccupied(currentSeats));
