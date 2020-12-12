const { NORTH, EAST, SOUTH, WEST } = require('./const');
const moveShip = require("./moveShip");

const shipEast = {
  position: {
    eastWest: 0,
    northSouth: 0,
  },
  direction: EAST,
};
const shipSouth = {
  position: {
    eastWest: 0,
    northSouth: 0,
  },
  direction: SOUTH,
};
const shipWest = {
  position: {
    eastWest: 0,
    northSouth: 0,
  },
  direction: WEST,
};
const shipNorth = {
  position: {
    eastWest: 0,
    northSouth: 0,
  },
  direction: NORTH,
};

const instructionLeft90 = {
  action: 'L',
  value: 90
}
const instructionLeft180 = {
  action: 'L',
  value: 180
}
const instructionLeft270 = {
  action: 'L',
  value: 270
}

const instructionRight90 = {
  action: 'R',
  value: 90
}
const instructionRight180 = {
  action: 'R',
  value: 180
}
const instructionRight270 = {
  action: 'R',
  value: 270
}

const fowrward10 = {
  action: 'F',
  value: 10
}
const north10 = {
  action: 'N',
  value: 10
}
const east10 = {
  action: 'E',
  value: 10
}
const south10 = {
  action: 'S',
  value: 10
}
const west10 = {
  action: 'W',
  value: 10
}

test("moveShip LEFT 90", () => {
  expect(moveShip(shipEast, instructionLeft90)).toEqual({
    position: {
      eastWest: 0,
      northSouth: 0,
    },
    direction: NORTH,
  });
});
test("moveShip LEFT 180", () => {
  expect(moveShip(shipEast, instructionLeft180)).toEqual({
    position: {
      eastWest: 0,
      northSouth: 0,
    },
    direction: WEST,
  });
});
test("moveShip LEFT 270", () => {
  expect(moveShip(shipEast, instructionLeft270)).toEqual({
    position: {
      eastWest: 0,
      northSouth: 0,
    },
    direction: SOUTH,
  });
});


test("moveShip RIGHT 90", () => {
  expect(moveShip(shipEast, instructionRight90)).toEqual({
    position: {
      eastWest: 0,
      northSouth: 0,
    },
    direction: SOUTH,
  });
});
test("moveShip RIGHT 180", () => {
  expect(moveShip(shipEast, instructionRight180)).toEqual({
    position: {
      eastWest: 0,
      northSouth: 0,
    },
    direction: WEST,
  });
});
test("moveShip RIGHT 270", () => {
  expect(moveShip(shipEast, instructionRight270)).toEqual({
    position: {
      eastWest: 0,
      northSouth: 0,
    },
    direction: NORTH,
  });
});

test("moveShip FORWARD", () => {
  expect(moveShip(shipNorth, fowrward10)).toEqual({
    position: {
      eastWest: 0,
      northSouth: 10,
    },
    direction: NORTH,
  });
  expect(moveShip(shipEast, fowrward10)).toEqual({
    position: {
      eastWest: 10,
      northSouth: 0,
    },
    direction: EAST,
  });
  expect(moveShip(shipSouth, fowrward10)).toEqual({
    position: {
      eastWest: 0,
      northSouth: -10,
    },
    direction: SOUTH,
  });
  expect(moveShip(shipWest, fowrward10)).toEqual({
    position: {
      eastWest: -10,
      northSouth: 0,
    },
    direction: WEST,
  });
});

test("moveShip NORTH", () => {
  expect(moveShip(shipNorth, north10)).toEqual({
    position: {
      eastWest: 0,
      northSouth: 10,
    },
    direction: NORTH,
  });
  expect(moveShip(shipEast, north10)).toEqual({
    position: {
      eastWest: 0,
      northSouth: 10,
    },
    direction: EAST,
  });
  expect(moveShip(shipSouth, north10)).toEqual({
    position: {
      eastWest: 0,
      northSouth: 10,
    },
    direction: SOUTH,
  });
  expect(moveShip(shipWest, north10)).toEqual({
    position: {
      eastWest: 0,
      northSouth: 10,
    },
    direction: WEST,
  });
});

test("moveShip EAST", () => {
  expect(moveShip(shipNorth, east10)).toEqual({
    position: {
      eastWest: 10,
      northSouth: 0,
    },
    direction: NORTH,
  });
  expect(moveShip(shipEast, east10)).toEqual({
    position: {
      eastWest: 10,
      northSouth: 0,
    },
    direction: EAST,
  });
  expect(moveShip(shipSouth, east10)).toEqual({
    position: {
      eastWest: 10,
      northSouth: 0,
    },
    direction: SOUTH,
  });
  expect(moveShip(shipWest, east10)).toEqual({
    position: {
      eastWest: 10,
      northSouth: 0,
    },
    direction: WEST,
  });
});

test("moveShip SOUTH", () => {
  expect(moveShip(shipNorth, south10)).toEqual({
    position: {
      eastWest: 0,
      northSouth: -10,
    },
    direction: NORTH,
  });
  expect(moveShip(shipEast, south10)).toEqual({
    position: {
      eastWest: 0,
      northSouth: -10,
    },
    direction: EAST,
  });
  expect(moveShip(shipSouth, south10)).toEqual({
    position: {
      eastWest: 0,
      northSouth: -10,
    },
    direction: SOUTH,
  });
  expect(moveShip(shipWest, south10)).toEqual({
    position: {
      eastWest: 0,
      northSouth: -10,
    },
    direction: WEST,
  });
});

test("moveShip WEST", () => {
  expect(moveShip(shipNorth, west10)).toEqual({
    position: {
      eastWest: -10,
      northSouth: 0,
    },
    direction: NORTH,
  });
  expect(moveShip(shipEast, west10)).toEqual({
    position: {
      eastWest: -10,
      northSouth: 0,
    },
    direction: EAST,
  });
  expect(moveShip(shipSouth, west10)).toEqual({
    position: {
      eastWest: -10,
      northSouth: 0,
    },
    direction: SOUTH,
  });
  expect(moveShip(shipWest, west10)).toEqual({
    position: {
      eastWest: -10,
      northSouth: 0,
    },
    direction: WEST,
  });
});