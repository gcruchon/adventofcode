const data = require("./data");

const isNotCurrentCube = ({ x, y, z, w }, cube) => {
  return x !== cube.x || y !== cube.y || z !== cube.z || w !== cube.w;
};

const isCubeActive = ({ x, y, z, w }, activeCubes) => {
  return activeCubes.some((cube) => {
    return x === cube.x && y === cube.y && z === cube.z && w === cube.w;
  });
};

const getActiveNeighbours = ({ x, y, z, w }, activeCubes) => {
  return activeCubes.filter((cube) => {
    return (
      isNotCurrentCube({ x, y, z, w }, cube) &&
      x >= cube.x - 1 &&
      x <= cube.x + 1 &&
      y >= cube.y - 1 &&
      y <= cube.y + 1 &&
      z >= cube.z - 1 &&
      z <= cube.z + 1 &&
      w >= cube.w - 1 &&
      w <= cube.w + 1
    );
  });
};

const willBeActive = ({ x, y, z, w }, activeCubes) => {
  const activeNeighbours = getActiveNeighbours({ x, y, z, w }, activeCubes);
  if (isCubeActive({ x, y, z, w }, activeCubes)) {
    return activeNeighbours.length === 2 || activeNeighbours.length === 3;
  } else {
    return activeNeighbours.length === 3;
  }
};
const getBoundery = (cubes, axis) => {
  return cubes.reduce(
    (acc, cube) => [Math.min(cube[axis], acc[0]), Math.max(cube[axis], acc[1])],
    [0, 0]
  );
};
const getBounderies = (cubes) => {
  return {
    x: getBoundery(cubes, "x"),
    y: getBoundery(cubes, "y"),
    z: getBoundery(cubes, "z"),
    w: getBoundery(cubes, "w"),
  };
};

let currentActiveCubes = data;

for (let tour = 1; tour <= 6; tour++) {
  let bounderies = getBounderies(currentActiveCubes);
  let nextActiveCubes = [];
  for (let z = bounderies.z[0] - 1; z <= bounderies.z[1] + 1; z++) {
    for (let w = bounderies.w[0] - 1; w <= bounderies.w[1] + 1; w++) {
      for (let x = bounderies.x[0] - 1; x <= bounderies.x[1] + 1; x++) {
        for (let y = bounderies.y[0] - 1; y <= bounderies.y[1] + 1; y++) {
          if (willBeActive({ x, y, z, w }, currentActiveCubes)) {
            nextActiveCubes.push({ x, y, z, w });
          }
        }
      }
    }
  }
  currentActiveCubes = nextActiveCubes;
}

console.log("final", currentActiveCubes);
console.log("result", currentActiveCubes.length);
