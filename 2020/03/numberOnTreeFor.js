
const isOnATreeSquare = (treeLine, positionX) => treeLine.includes(positionX);

const numberOnTreeFor = ({ right, down }, data) => {
  const MAP_WIDTH = data.mapWidth;
  const MAP = data.map;
  const MAP_FINISH_LINE = MAP.length;

  let sledgePositionX = 0;
  let nbOnTree = 0;
  for (
    let sledgePositionY = 0;
    sledgePositionY < MAP_FINISH_LINE;
    sledgePositionY += down
  ) {
    if (isOnATreeSquare(MAP[sledgePositionY], sledgePositionX)) {
      nbOnTree++;
    }
    sledgePositionX += right;
    //manage scrolling
    sledgePositionX %= MAP_WIDTH;
  }
  console.log(`numberOnTreeFor(${right},${down})`, nbOnTree);
  return nbOnTree;
};
  
  module.exports = numberOnTreeFor;
  