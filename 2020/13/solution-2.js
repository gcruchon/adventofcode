const notes = require("./data");

const timeBeforeTheyMeet = require("./timeBeforeTheyMeet");

const buses = notes.buses
  .split(",")
  .map((busId, minutesAfter) => {
    return { busId, minutesAfter: minutesAfter };
  })
  .filter((bus) => bus.busId != "x")
  .map((bus) => {
    return {
      startTime: 0,
      busId: parseInt(bus.busId, 10),
      minutesAfter: bus.minutesAfter,
    };
  });

const lastBus = buses.reduce((firstBus, secondBus) => {
  if (firstBus === null) {
    return secondBus;
  } else {
    return {
      busId: firstBus.busId * secondBus.busId, // works because only prime numbers
      startTime: timeBeforeTheyMeet(firstBus, secondBus),
      minutesAfter: 0,
    };
  }
}, null);
console.log("Time to be found", lastBus.startTime);
