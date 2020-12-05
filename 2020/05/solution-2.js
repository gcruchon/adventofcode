const data = require("./data");
const { getSeatIdBin } = require("./getSeatId");

// start : 8 (second row, first seat) > 1015 (last but one row, last seat)

const seats = data.map(getSeatIdBin);
seats.sort();

for( let i = 1; i < seats.length ; i++ ){
    if( seats[i-1] + 2 === seats[i] ){
        console.log('seat : ' + (seats[i] - 1));
    }
}