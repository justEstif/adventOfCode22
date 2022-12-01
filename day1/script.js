const fs = require("fs");
const path = require("path");

// get file
const file = path.join(process.cwd(), "day1", "input.txt");

// read content into separate arrays
const content = fs
  .readFileSync(file, "utf-8") // read file
  .split("\n\n") // separate different into arrays
  .map(
    (data) =>
      data
        .split("\n") // split between numbers
        .map((el) => Number(el)) // change each el into number
        .reduce((a, b) => a + b, 0) // get sum
  )
  .sort((a, b) => a - b) // sort by total
  .reverse();

const largest = content[0];
const sumOfTop3 = content[0] + content[1] + content[2];
