import { test } from "tap";
import fs from "fs";
import path from "path";

import {
  isOverlap,
  getNumArr,
  getNumArrs,
  getOverlapCountTotal,
  getRange,
} from "./script.js";

test("Testing for first question", async ({ test }) => {
  test("get range given endpoints", async ({ same }) => {
    same(getRange([2, 5]), [2, 3, 4, 5]);
  });

  test("change str to num arr", async ({ same }) => {
    same(getNumArr("2-4"), [2, 4], "Get num arr");
    same(getNumArr("6-8"), [6, 8], "Get num arr");
  });

  test("check if overlap", async ({ equal }) => {
    const given = [
      [1, 3],
      [1, 6],
    ];
    equal(isOverlap(given), true);
  });

  test("get range", async ({ same }) => {
    const given = [1, 3];
    const expected = [1, 2, 3];
    same(getRange(given), expected, "get range 1-3");
  });

  test("arr of string to arr of number arr", async ({ same }) => {
    const given = [
      ["1-3", "3-4"],
      ["1-3", "1-6"],
    ];
    const expected = [
      [
        [1, 3],
        [3, 4],
      ],
      [
        [1, 3],
        [1, 6],
      ],
    ];

    same(getNumArrs(given), expected);
  });

  test("expect the answer for sample data", async ({ equal }) => {
    const given = [
      ["2-4", "6-8"],
      ["2-3", "4-5"],
      ["5-7", "7-9"],
      ["2-8", "3-7"],
      ["6-6", "4-6"],
      ["2-6", "4-8"],
    ];
    const expected = 2;
    equal(getOverlapCountTotal(given), expected);
  });

  test("expect the answer of question 1", async ({ equal }) => {
    const filePath = path.join(process.cwd(), "day4", "input");
    const fileContent = fs
      .readFileSync(filePath, "utf8")
      .toString()
      .split("\n")
      .map((el) => el.split(","))
      .slice(0, -1);
    const given = getOverlapCountTotal(fileContent);
    const expected = 509;
    equal(given, expected);
  });
});

test("expect the answer of question 2", async ({ equal }) => {
  const filePath = path.join(process.cwd(), "day4", "input");
  const fileContent = fs
    .readFileSync(filePath, "utf8")
    .toString()
    .split("\n")
    .map((el) => el.split(","))
    .slice(0, -1);
  const given = getOverlapCountTotal(fileContent, true);
  const expected = 870;
  equal(given, expected);
});
