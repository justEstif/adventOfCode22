/**
 * @param {number} count
 * @param {number} origin
 * @param {number} targetIndex
 * @param {Array} arr
 */
export const move = ([count, origin, targetIndex], arr) => {
  while (count > 0) {
    let el = arr[origin - 1].pop();
    arr[targetIndex - 1].push(el);
    count--;
  }
  return arr;
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

import fs from "fs";
import path from "path";

/**
 * @param {string} str
 */
export const extractArray = (str) => {
  return str;
};

const filePath = path.join(process.cwd(), "day5", "input");
const fileContent = fs.readFileSync(filePath, "utf-8").split("\n\n");
const arr = extractArray(fileContent[0]);
console.log(arr);
