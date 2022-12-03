/**
 * @param {string} str
 */
export const getLetter = (str) => {
  for (const letter of str.trim()) {
    if (str.lastIndexOf(letter) > (str.length - 1) / 2) return letter;
  }
};

/**
 * @param {string} str
 */
export const getCode = (str) => {
  const asciiCode = str.charCodeAt(0);
  switch (asciiCode >= 65 && asciiCode <= 90) {
    case true:
      return asciiCode - 38;
    default:
      return asciiCode - 96;
  }
};

/**
 * @param {string[]} arr
 */
export const getCodes = (arr) => arr.map((el) => getCode(el));

/**
 * @param {string[]} arr
 */
export const getLetters = (arr) => arr.map((el) => getLetter(el));

/**
 * @param {string[]} arr
 */
const getSum = (arr) => arr.reduce((partial, a) => partial + a, 0);

/**
 * @param {string[]} arr
 */
export const getAnswer = (arr) => getSum(getCodes(getLetters(arr)));
