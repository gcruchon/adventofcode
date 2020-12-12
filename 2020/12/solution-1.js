const instructions = require("./data");
const moveShip = require("./moveShip");
const { EAST } = require("./const");

const shipOriginalPosition = {
  position: {
    eastWest: 0,
    northSouth: 0,
  },
  direction: EAST,
};
const shipFinalPosition = instructions.reduce(
  (ship, instruction) => moveShip(ship, instruction),
  shipOriginalPosition
);

console.log("shipFinalPosition: ", shipFinalPosition);
console.log(
  "Manhattan distance: ",
  Math.abs(shipFinalPosition.position.eastWest) +
    Math.abs(shipFinalPosition.position.northSouth)
);
