const results = {
  X: ["AZ", "BX", "CY"], // loss
  Y: ["AX", "BY", "CZ"], // draw
  Z: ["AY", "BZ", "CX"], // win
};

const resultPoints = {
  X: 0,
  Y: 3,
  Z: 6,
};

const keyPoints = {
  X: 1,
  Y: 2,
  Z: 3,
};

export const getRoundScore = function(arr) {
  const myPick = `${arr[1]}`;
  const possibleResult = results[myPick]; // returns an array

  for (const el of possibleResult) {
    if (el.charAt(0) === arr[0]) {
      return resultPoints[myPick] + keyPoints[el.charAt(1)];
    }
  }
};

export const getGameScore = function(arr) {
  return arr
    .map((el) => getRoundScore(el))
    .reduce((prev, curr) => prev + curr, 0); // sum of game
};
