const { NORTH, EAST, SOUTH, WEST } = require("./const");

const moveShip = (ship, instruction) => {
  const newShip = JSON.parse(JSON.stringify(ship));
  switch (instruction.action) {
    case "L":
      newShip.direction -= instruction.value;
      newShip.direction += 360; // Don't want a negative value
      newShip.direction %= 360;
      break;
    case "R":
      newShip.direction += instruction.value;
      newShip.direction %= 360;
      break;
    case "F":
      newShip.position = getPosition(
        newShip.position,
        newShip.direction,
        instruction.value
      );
      break;
    default:
      newShip.position = getPosition(
        newShip.position,
        getInstructionDirection(instruction.action),
        instruction.value
      );
      break;
  }
  return newShip;
};

const getInstructionDirection = (action) => {
  switch (action) {
    case 'N': return NORTH;
    case 'E': return EAST;
    case 'S': return SOUTH;
    case 'W': return WEST;
    default:
      throw "getInstructionDirection - Unknown direction: " + action;
  }
};

const getPosition = (position, direction, value) => {
  const { eastWest, northSouth } = position;
  switch (direction) {
    case NORTH:
      return {
        eastWest,
        northSouth: northSouth + value,
      };
    case EAST:
      return {
        eastWest: eastWest + value,
        northSouth,
      };
    case SOUTH:
      return {
        eastWest,
        northSouth: northSouth - value,
      };
    case WEST:
      return {
        eastWest: eastWest - value,
        northSouth,
      };
    default:
      throw "getPosition - Unknown direction: " + direction;
  }
};

module.exports = moveShip;
