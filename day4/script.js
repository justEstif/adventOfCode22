/**
 * @param {string} str
 * @description change string array to number array
 */
export const getNumArr = (str) => str.split("-").map((el) => Number(el));

/**
 * @param {number[][][]} arrs
 * @description return all the numbers in a range
 */
const getAllNumRange = (arrs) =>
  arrs.map((arr) =>
    arr.map((el) => [...Array(el[1] - el[0] + 1).keys()].map((x) => x + el[0]))
  );

// overlap function for question 1
export const isOverlap = (arr1, arr2) =>
  arr1.every((element) => arr2.indexOf(element) !== -1) ||
  arr2.every((element) => arr1.indexOf(element) !== -1);

// overlap function for question 2
export const isOverlap2 = (arr1, arr2) =>
  arr1.some((element) => arr2.indexOf(element) !== -1) ||
  arr2.some((element) => arr1.indexOf(element) !== -1);

/**
 * @param {[number[], number[]][]} arr
 * @description get sum of the total arrays that overlap
 */
export const getOverlapBoolArr = (arr) =>
  arr.map((el) => isOverlap(el[0], el[1]));

/**
 * @param {boolean[]} arr
 * @description returns the total true count
 */
export const getTrueCount = (arr) =>
  arr.reduce((prev, curr) => (curr ? prev + 1 : prev), 0);

/**
 * @param {string[][]} arrs
 * @description return array of num
 */
export const getArrofNumArr = (arrs) =>
  arrs.map((arr) => arr.map((str) => getNumArr(str)));

export const getOverlapCountTotal = (arr) =>
  getTrueCount(getOverlapBoolArr(getAllNumRange(getArrofNumArr(arr))));
