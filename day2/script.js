const round1 = {
  X: { A: 4, B: 1, C: 7 },
  Y: { A: 8, B: 5, C: 2 },
  Z: { A: 3, B: 9, C: 6 },
};

export const getRoundScore = (arr) => round1[arr[1]][arr[0]];

export const getGameScore = function (arr) {
  return arr
    .map((el) => getRoundScore(el))
    .reduce((prev, curr) => prev + curr, 0); // sum of game
};
