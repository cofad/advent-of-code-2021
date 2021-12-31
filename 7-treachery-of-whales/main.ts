import {
  calculateMinFuelForAlignment,
  FILE_NAME,
  readInCrabPositions,
} from "./lib.ts";

const crabPositions = await readInCrabPositions(FILE_NAME);
const minFuelForAlignment = calculateMinFuelForAlignment(crabPositions);

console.log("");
console.log("Part One: Min Fuel For Alignment = " + minFuelForAlignment);
console.log("");