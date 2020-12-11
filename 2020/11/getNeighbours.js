const hasRowAbove = (row) => {
    return row > 0;
}

const hasRowBelow = (seats, row) => {
    return row < seats.length - 1;
}

const hasColOnLeft = (col) => {
    return col > 0;
}

const hasColOnRight = (cols, col) => {
    return col < cols.length - 1;
}

const getNeighbours = (seats, row, col) => {
    let neighbours = [];

    /* Row above */
    if(hasRowAbove(row) && hasColOnLeft(col)) {
        neighbours.push(seats[row - 1][col - 1]);
    }
    if(hasRowAbove(row)) {
        neighbours.push(seats[row - 1][col]);
    }
    if(hasRowAbove(row) && hasColOnRight(seats[row], col)) {
        neighbours.push(seats[row - 1][col + 1]);
    }
    /* left / right */
    if(hasColOnLeft(col)) {
        neighbours.push(seats[row][col - 1]);
    }
    if(hasColOnRight(seats[row], col)) {
        neighbours.push(seats[row][col + 1]);
    }
    /* Row below */
    if(hasRowBelow(seats, row) && hasColOnLeft(col)) {
        neighbours.push(seats[row + 1][col - 1]);
    }
    if(hasRowBelow(seats, row)) {
        neighbours.push(seats[row + 1][col]);
    }
    if(hasRowBelow(seats, row) && hasColOnRight(seats[row], col)) {
        neighbours.push(seats[row + 1][col + 1]);
    }

    return neighbours;
}

module.exports = getNeighbours;