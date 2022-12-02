import fs from "fs";
import path from "path";

import { getRoundScore, getGameScore } from "./script_2";

import { it, expect } from "vitest";

it("must end in a draw", () => {
  expect(getRoundScore(["A", "Y"])).toBe(4);
});

it("round must end in lose", () => {
  expect(getRoundScore(["B", "X"])).toBe(1);
});

it("round must end in win", () => {
  expect(getRoundScore(["C", "Z"])).toBe(7);
});

it("returns game total", () => {
  expect(
    getGameScore([
      ["A", "Y"],
      ["B", "X"],
      ["C", "Z"],
    ])
  ).toBe(12);
});

it("returns the score of the game", () => {
  const filePath = path.join(process.cwd(), "day2", "input.txt");

  const fileContent = fs
    .readFileSync(filePath, "utf8")
    .split("\n")
    .map((el) => el.split(" "))
    .filter((el) => el.length > 1); // remove invalid values
  expect(getGameScore(fileContent)).toBe(12725);
});
