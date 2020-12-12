const moveWaypoint = (waypoint, direction, value) => {
  switch (direction) {
    case "N":
      return {
        eastWest: waypoint.eastWest,
        northSouth: waypoint.northSouth + value,
      };
    case "E":
      return {
        eastWest: waypoint.eastWest + value,
        northSouth: waypoint.northSouth,
      };
    case "S":
      return {
        eastWest: waypoint.eastWest,
        northSouth: waypoint.northSouth - value,
      };
    case "W":
      return {
        eastWest: waypoint.eastWest - value,
        northSouth: waypoint.northSouth,
      };
    default:
      throw "Strange move!";
  }
};

module.exports = moveWaypoint;
