/**
 * @param {number} count
 * @param {number} origin
 * @param {number} targetIndex
 * @param {Array} arr
 */
export const move = ([count, origin, target], arr) => {
  try {
    const removed = arr[origin - 1].splice(-1 * count).reverse();
    arr[target - 1].push(...removed);
    return arr;
  } catch (e) {
    console.log(arr);
  }
};

/**
 * @param {number[][]} procedures
 * @param {Array} arr
 */
export const multiMove = (procedures, arr) => {
  for (const el of procedures) {
    arr = move(el, arr);
  }
  return arr;
};

/**
 * @param {Array[]} arr
 */
export const getLastItems = (arr) =>
  arr.reduce((partial, curr) => partial.concat(curr.pop()), "");

/**
 * @param {string[]} arr
 * @description function from extracting procedures
 */
export const extractProcedures = (arr) =>
  arr.map((str) =>
    str
      .split(" ")
      .filter((el) => !isNaN(el))
      .map((el) => parseInt(el))
  );

const input = [
  ["C", "Z", "N", "B", "M", "W", "Q", "V"],
  ["H", "Z", "R", "W", "C", "B"],
  ["F", "Q", "R", "J"],
  ["Z", "S", "W", "H", "F", "N", "M", "T"],
  ["G", "F", "W", "L", "N", "Q", "P"],
  ["L", "P", "W"],
  ["V", "B", "D", "R", "G", "C", "Q", "J"],
  ["Z", "Q", "N", "B", "W"],
  ["H", "L", "F", "C", "G", "T", "J"],
];

import fs from "fs";
import path from "path";
const filePath = path.join(process.cwd(), "day5", "input");
const fileContent = fs
  .readFileSync(filePath, "utf-8")
  .split("\n\n")
  .slice(0, -1);
const procedures = extractProcedures(fileContent[1].split("\n"));
const ans = getLastItems(multiMove(procedures, input));
console.log(ans);
