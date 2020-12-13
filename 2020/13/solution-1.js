const notes = require("./data");

const buses = notes.buses
  .split(",")
  .filter((busId) => busId != "x")
  .map((busId) => parseInt(busId, 10));

const waitingTimes = buses.map((busId) => {
  return {
    busId,
    timeToWait:
      (Math.floor(notes.departureTimestamp / busId) + 1) * busId -
      notes.departureTimestamp,
  };
});

waitingTimes.sort( (a, b) => a.timeToWait - b.timeToWait );

console.log("waitingTimes", waitingTimes);

console.log('result', waitingTimes[0].busId * waitingTimes[0].timeToWait);
