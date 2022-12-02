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
