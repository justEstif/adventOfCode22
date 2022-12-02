const round2 = {
  X: { A: 3, B: 1, C: 2 },
  Y: { A: 4, B: 5, C: 6 },
  Z: { A: 8, B: 9, C: 7 },
};

export const getRoundScore = (arr) => round2[arr[1]][arr[0]];

export const getGameScore = function (arr) {
  return arr
    .map((el) => getRoundScore(el))
    .reduce((prev, curr) => prev + curr, 0); // sum of game
};
