const moveWaypoint = require("./moveWaypoint");
const rotateWaypoint = require("./rotateWaypoint");

const moveShipWithWaypoint = (ship, instruction) => {
  const newShip = JSON.parse(JSON.stringify(ship));
  switch (instruction.action) {
    case "L":
    case "R":
      newShip.waypoint = rotateWaypoint(
        ship.waypoint,
        instruction.action,
        instruction.value
      );
      break;
    case "F":
      newShip.position = getPosition(
        newShip.position,
        newShip.waypoint,
        instruction.value
      );
      break;
    default:
      newShip.waypoint = moveWaypoint(
        ship.waypoint,
        instruction.action,
        instruction.value
      );

      break;
  }
  return newShip;
};

const getPosition = (position, waypoint, value) => {
  const { eastWest, northSouth } = position;
  return {
    eastWest: eastWest + waypoint.eastWest * value,
    northSouth: northSouth + waypoint.northSouth * value,
  };
};

module.exports = moveShipWithWaypoint;
