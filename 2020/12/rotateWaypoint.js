const rotateWaypoint = (waypoint, direction, value) => {
  if (value === 0) {
    return waypoint;
  } else if (value === 180) {
    return {
      eastWest: -1 * waypoint.eastWest,
      northSouth: -1 * waypoint.northSouth,
    };
  } else if (
    (direction === "R" && value == 90) ||
    (direction === "L" && value == 270)
  ) {
    return {
      eastWest: waypoint.northSouth,
      northSouth: -1 * waypoint.eastWest,
    };
  } else if (
    (direction === "L" && value == 90) ||
    (direction === "R" && value == 270)
  ) {
    return {
      eastWest: -1 * waypoint.northSouth,
      northSouth: waypoint.eastWest,
    };
  } else {
      throw 'Strange move!'
  }
};

module.exports = rotateWaypoint;
