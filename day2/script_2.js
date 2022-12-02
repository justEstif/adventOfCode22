import fs from "fs";
import path from "path";

const winOpts = ["AY", "BZ", "CX"];
const lossOpts = ["AZ", "BX", "CY"];
const drawOpts = ["AX", "BY", "CZ"];

const results = {
  Z: winOpts,
  X: lossOpts,
  Y: drawOpts,
};

const resultsWorth = {
  X: 0,
  Y: 3,
  Z: 6,
};

const keyWorth = {
  X: 1,
  Y: 2,
  Z: 3,
};

export const getRoundScore = function(arr) {
  const myPick = `${arr[1]}`;
  const possibleResult = results[myPick]; // returns an array

  for (const el of possibleResult) {
    if (el.charAt(0) === arr[0]) {
      return resultsWorth[myPick] + keyWorth[el.charAt(1)];
    }
  }
};

export const getGameScore = function(arr) {
  return arr
    .map((el) => getRoundScore(el))
    .reduce((prev, curr) => prev + curr, 0); // sum of game
};

// const filePath = path.join(process.cwd(), "day2", "input.txt"); // read file
//
// const fileContent = fs
//   .readFileSync(filePath, "utf8") // read files
//   .split("\n") // read into array
//   .map((el) => el.split(" ")) // split lines to array elements
//   .filter((el) => el.length > 1); // remove invalid values
//
// const answer2 = getGameScore(fileContent);
// console.log(answer2);
