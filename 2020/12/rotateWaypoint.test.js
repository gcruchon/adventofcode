const rotateWaypoint = require("./rotateWaypoint");

test("rotateWaypoint LEFT 90", () => {
  expect(rotateWaypoint({ eastWest: 10, northSouth: 4 }, "L", 90)).toEqual({
    eastWest: -4,
    northSouth: 10,
  });
});

test("rotateWaypoint LEFT 180", () => {
  expect(rotateWaypoint({ eastWest: 10, northSouth: 4 }, "L", 180)).toEqual({
    eastWest: -10,
    northSouth: -4,
  });
});

test("rotateWaypoint LEFT 270", () => {
  expect(rotateWaypoint({ eastWest: 10, northSouth: 4 }, "L", 270)).toEqual({
    eastWest: 4,
    northSouth: -10,
  });
});

test("rotateWaypoint RIGHT 90", () => {
  expect(rotateWaypoint({ eastWest: 10, northSouth: 4 }, "R", 90)).toEqual({
    eastWest: 4,
    northSouth: -10,
  });
});

test("rotateWaypoint RIGHT 180", () => {
  expect(rotateWaypoint({ eastWest: 10, northSouth: 4 }, "R", 180)).toEqual({
    eastWest: -10,
    northSouth: -4,
  });
});

test("rotateWaypoint RIGHT 270", () => {
  expect(rotateWaypoint({ eastWest: 10, northSouth: 4 }, "R", 270)).toEqual({
    eastWest: -4,
    northSouth: 10,
  });
});
