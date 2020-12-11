const { FLOOR } = require("./const");

const isInTheRoom = (MAX_X, MAX_Y, row, col) => {
    return row >= 0 && col >= 0 && row < MAX_Y && col < MAX_X;
}

const getVisibleSeat = ({x, y}, seats, row, col) => {
    // console.log('------ getVisibleSeat', 'x', x, 'y', y, 'row', row, 'col', col);
    const MAX_Y = seats.length;
    const MAX_X = seats[col].length;
    let currentRow = row + y;
    let currentColl = col + x;
    while( isInTheRoom(MAX_X, MAX_Y, currentRow, currentColl) ) {
        // console.log('currentRow', currentRow, 'currentColl', currentColl, 'value', seats[currentRow][currentColl]);
        if( seats[currentRow][currentColl] === FLOOR ){
            // console.log('is Floor, next!');
            currentRow += y;
            currentColl += x;
        } else {
            // console.log("It's a seat");
            return seats[currentRow][currentColl];
        }
    }
    return FLOOR;
}

module.exports = (seats, row, col) => {
    return [
        getVisibleSeat({x: -1, y: -1}, seats, row, col),
        getVisibleSeat({x: 0, y: -1}, seats, row, col),
        getVisibleSeat({x: 1, y: -1}, seats, row, col),
        getVisibleSeat({x: -1, y: 0}, seats, row, col),
        getVisibleSeat({x: 1, y: 0}, seats, row, col),
        getVisibleSeat({x: -1, y: 1}, seats, row, col),
        getVisibleSeat({x: 0, y: 1}, seats, row, col),
        getVisibleSeat({x: 1, y: 1}, seats, row, col),
    ];
};