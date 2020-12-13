const timeBeforeTheyMeet = (bus1, bus2) => {
  let meetingTime = bus1.startTime + bus2.minutesAfter;

  for (let i = 0; i < bus2.busId; i++) {
    if (meetingTime % bus2.busId === 0) {
      return (meetingTime - bus2.minutesAfter);
    }
    meetingTime += bus1.busId;
  }
  throw "Buses never meet!";
};

module.exports = timeBeforeTheyMeet;
