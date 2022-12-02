import fs from "fs";
import path from "path";

const winOpts = ["AY", "BZ", "CX"];
const lossOpts = ["AZ", "BX", "CY"];
const keyWorth = {
  X: 1,
  Y: 2,
  Z: 3,
};

export const getRoundScore = function(arr) {
  if (winOpts.includes(arr.join(""))) {
    return 6 + keyWorth[`${arr[1]}`];
  } else if (lossOpts.includes(arr.join(""))) {
    return keyWorth[`${arr[1]}`];
  } else {
    return 3 + keyWorth[`${arr[1]}`];
  }
};

export const getGameScore = function(arr) {
  return arr
    .map((el) => getRoundScore(el))
    .reduce((prev, curr) => prev + curr, 0); // sum of game
};

const filePath = path.join(process.cwd(), "day2", "input.txt"); // read file

const fileContent = fs
  .readFileSync(filePath, "utf8") // read files
  .split("\n") // read into array
  .map((el) => el.split(" ")) // split lines to array elements
  .filter((el) => el.length > 1); // remove invalid values

const answer1 = getGameScore(fileContent);
