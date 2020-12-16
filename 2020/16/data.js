const fs = require("fs");

const input = fs.readFileSync("./2020/16/input.txt", {
  encoding: "utf-8",
  flag: "r",
});

const getRule = (rule) => {
  const matches = rule.match(/^(.*): (\d+)-(\d+) or (\d+)-(\d+)$/);
  if(matches) {
      return {
          name: matches[1],
          ranges: [{
            min: parseInt(matches[2],10),
            max: parseInt(matches[3],10),
          },{
            min: parseInt(matches[4],10),
            max: parseInt(matches[5],10),
          },]
      };
    } else {
      throw 'Not compliant rule:' + rule
    }
  }

const strings = input.split('your ticket:');
const rules = strings[0].trim().split('\n').map(getRule);
const tickets = strings[1].split('nearby tickets:');
const myTicket = tickets[0].trim().split(',').map(value => parseInt(value, 10));
const nearbyTickets = tickets[1].trim().split('\n').map(ticket => ticket.split(',').map(value => parseInt(value, 10)));


module.exports = {
  rules,
  myTicket,
  nearbyTickets
};