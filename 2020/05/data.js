const fs = require("fs");
const validateBoardingPass = require("./validateBoardingPass");


const input = fs.readFileSync("./2020/05/input.txt", { encoding: "utf-8", flag: "r" });
const lines = input.split("\n");
const data = lines.map((boardingPass) => {
  if( !validateBoardingPass(boardingPass) ) {
    throw 'Not a boarding pass: ' + boardingPass;
  }
  return boardingPass;
});

module.exports = data;
