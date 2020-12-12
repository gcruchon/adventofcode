const moveShipWithWaypoint = require("./moveShipWithWaypoint");

const shipOriginalPosition = {
  position: {
    eastWest: 0,
    northSouth: 0,
  },
  waypoint: {
    eastWest: 10,
    northSouth: 1,
  },
};

const shipAfterF10 = {
  position: {
    eastWest: 100,
    northSouth: 10,
  },
  waypoint: {
    eastWest: 10,
    northSouth: 1,
  },
};

const shipAfterN3 = {
  position: {
    eastWest: 100,
    northSouth: 10,
  },
  waypoint: {
    eastWest: 10,
    northSouth: 4,
  },
};

const shipAfterF7 = {
  position: {
    eastWest: 170,
    northSouth: 38,
  },
  waypoint: {
    eastWest: 10,
    northSouth: 4,
  },
};

const shipAfterR90 = {
  position: {
    eastWest: 170,
    northSouth: 38,
  },
  waypoint: {
    eastWest: 4,
    northSouth: -10,
  },
};

const shipAfterF11 = {
  position: {
    eastWest: 214,
    northSouth: -72,
  },
  waypoint: {
    eastWest: 4,
    northSouth: -10,
  },
};

test("moveShipWithWaypoint F10", () => {
  expect(
    moveShipWithWaypoint(shipOriginalPosition, { action: "F", value: 10 })
  ).toEqual(shipAfterF10);
});

test("moveShipWithWaypoint N3", () => {
  expect(
    moveShipWithWaypoint(shipAfterF10, { action: "N", value: 3 })
  ).toEqual(shipAfterN3);
});

test("moveShipWithWaypoint F7", () => {
  expect(
    moveShipWithWaypoint(shipAfterN3, { action: "F", value: 7 })
  ).toEqual(shipAfterF7);
});

test("moveShipWithWaypoint R90", () => {
  expect(
    moveShipWithWaypoint(shipAfterF7, { action: "R", value: 90 })
  ).toEqual(shipAfterR90);
});


test("moveShipWithWaypoint F11", () => {
  expect(
    moveShipWithWaypoint(shipAfterR90, { action: "F", value: 11 })
  ).toEqual(shipAfterF11);
});
