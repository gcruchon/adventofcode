const instructions = require("./data");
const moveShipWithWaypoint = require("./moveShipWithWaypoint");

const shipOriginalPosition = {
  position: {
    eastWest: 0,
    northSouth: 0,
  },
  waypoint: {
    eastWest: 10,
    northSouth: 1,
  }
};
const shipFinalPosition = instructions.reduce(
  (ship, instruction) => moveShipWithWaypoint(ship, instruction),
  shipOriginalPosition
);

console.log("shipFinalPosition: ", shipFinalPosition);
console.log(
  "Manhattan distance: ",
  Math.abs(shipFinalPosition.position.eastWest) +
    Math.abs(shipFinalPosition.position.northSouth)
);
