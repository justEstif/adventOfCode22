/**
 * @param {string} str
 * @description change string array to number array
 */
export const getNumArr = (str) => str.split("-").map((el) => Number(el));

/**
 * @param {string[][]} arrs
 * @description return array of num
 */
export const getNumArrs = (arrs) =>
  arrs.map((arr) => arr.map((str) => getNumArr(str)));

/**
 * @param {number} start
 * @param {number} end
 * @description return all the numbers in a range
 */
export const getRange = ([start, end]) =>
  [...Array(end - start + 1).keys()].map((x) => x + start);

/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @description overlap for question 1
 */
export const isOverlap = ([arr1, arr2]) =>
  getRange(arr1).every((element) => getRange(arr2).includes(element)) ||
  getRange(arr2).every((element) => getRange(arr1).includes(element));

/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @description overlap for question 2
 */
export const isOverlap2 = ([arr1, arr2]) =>
  getRange(arr1).some((element) => getRange(arr2).includes(element)) ||
  getRange(arr2).some((element) => getRange(arr1).includes(element));

/**
 * @param {[number[], number[]][]} arrs
 * @description get sum of the total arrays that overlap
 */
export const getOverlapCount = (arrs, question2) =>
  question2
    ? arrs.map((arr) => isOverlap2(arr)).filter((el) => el === true).length
    : arrs.map((arr) => isOverlap(arr)).filter((el) => el === true).length;

/**
 * @param {string[][]} arr
 * @param {boolean} question2
 * @description get answer for question 1 or question 2
 */
export const getOverlapCountTotal = (arr, question2 = false) =>
  getOverlapCount(getNumArrs(arr), question2);
