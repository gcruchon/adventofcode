const processInstructions = require("./processInstructions");

let finished = [];
let originalInstructions = require("./data");
const LENGTH = originalInstructions.length;

const getInstructionWithSwitchAtIndex = (index, instructions) => {
  const copy = JSON.parse(JSON.stringify(instructions));
  if (copy[index].cmd !== "acc") {
    copy[index].cmd = copy[index].cmd === "nop" ? "jmp" : "nop";
  }
  return copy;
};

for (let i = 0; i < LENGTH; i++) {
  const instructions = getInstructionWithSwitchAtIndex(i, originalInstructions);
  /*
  console.log("---- Attempt : i", i);
  console.log("original instructions", originalInstructions);
  console.log("modified instructions", instructions);
  console.log("Old cmd", originalInstructions[i]);
  console.log("New cmd", instructions[i]);
  */
  if (
    instructions[i].cmd === "acc" ||
    (instructions[i].cmd === "jmp" && instructions[i].arg === 0)
  ) {
    // console.log("Skipped!!");
    continue;
  }
  const { acc, lastLine } = processInstructions(instructions);
  /*
  console.log("Last line", lastLine);
  console.log("Acc", acc);
  */
  if (lastLine === instructions.length - 1) {
    console.log("Last line", lastLine);
    console.log("TERMINÉ!! -- Acc", acc);
    finished.push(acc);
    // break;
  }
}

console.log(finished);
