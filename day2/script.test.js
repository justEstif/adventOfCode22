import fs from "fs";
import path from "path";

import { getRoundScore, getGameScore } from "./script";

import { it, expect, expectTypeOf } from "vitest";

it("returns the score of the round", () => {
  expect(getRoundScore(["A", "Y"])).toBe(8);
});

it("returns the score of the round", () => {
  expect(getRoundScore(["B", "X"])).toBe(1);
});

it("returns the score of the round", () => {
  expect(getRoundScore(["C", "Z"])).toBe(6);
});

it("returns the score of the game", () => {
  expect(
    getGameScore([
      ["A", "Y"],
      ["B", "X"],
    ])
  ).toBe(9);
});

it("returns the score of the game", () => {
  expect(
    getGameScore([
      ["A", "Y"],
      ["C", "Z"],
    ])
  ).toBe(14);
});

it("returns the score of the game", () => {
  expect(
    getGameScore([
      ["B", "X"],
      ["C", "Z"],
    ])
  ).toBe(7);
});

it("returns the score of the game", () => {
  expect(
    getGameScore([
      ["A", "Y"],
      ["B", "X"],
      ["C", "Z"],
    ])
  ).toBe(15);
});

it("returns the score of the game", () => {
  const filePath = path.join(process.cwd(), "day2", "input.txt");

  const fileContent = fs
    .readFileSync(filePath, "utf8")
    .split("\n")
    .map((el) => el.split(" "));
  expectTypeOf(getGameScore(fileContent)).toBeNumber();
});
