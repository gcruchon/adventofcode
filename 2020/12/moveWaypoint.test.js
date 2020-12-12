const moveWaypoint = require("./moveWaypoint");

test("moveWaypoint NORTH", () => {
  expect(moveWaypoint({ eastWest: 10, northSouth: 4 }, "N", 5)).toEqual({
    eastWest: 10,
    northSouth: 9,
  });
});

test("moveWaypoint EAST", () => {
  expect(moveWaypoint({ eastWest: 10, northSouth: 4 }, "E", 3)).toEqual({
    eastWest: 13,
    northSouth: 4,
  });
});

test("moveWaypoint SOUTH", () => {
  expect(moveWaypoint({ eastWest: 10, northSouth: 4 }, "S", 7)).toEqual({
    eastWest: 10,
    northSouth: -3,
  });
});

test("moveWaypoint WEST", () => {
  expect(moveWaypoint({ eastWest: 10, northSouth: 4 }, "W", 4)).toEqual({
    eastWest: 6,
    northSouth: 4,
  });
});