import tap from "tap";
import { extractProcedures, getLastItems, move, multiMove } from "./script.js";
//
tap.test("Testing move function", async (tap) => {
  tap.test("move 1 from 2 to 1", async ({ same }) => {
    const given = [
      ["Z", "N"],
      ["M", "C", "D"],
    ];
    const expected = [
      ["Z", "N", "D"],
      ["M", "C"],
    ];
    const returned = move([1, 2, 1], given);
    same(returned, expected);
  });

  tap.test("move 3 from 1 to 3", async ({ same }) => {
    const given = [["Z", "N", "D"], ["M", "C"], ["P"]];
    const expected = [[], ["M", "C"], ["P", "D", "N", "Z"]];
    const returned = move([3, 1, 3], given);
    same(returned, expected);
  });
});
//
tap.test("Testing multimove function", async ({ same }) => {
  const givenOrders = [
    [1, 2, 1],
    [3, 1, 3],
    [2, 2, 1],
    [1, 1, 2],
  ];
  const givenArr = [["Z", "N"], ["M", "C", "D"], ["P"]];
  const expected = [["C"], ["M"], ["P", "D", "N", "Z"]];
  const returned = multiMove(givenOrders, givenArr);
  same(returned, expected);
});
//
//
// import fs from "fs";
// import path from "path";
// tap.test("Extract procedures from file", async (t) => {
//   const filePath = path.join(process.cwd(), "day5", "input");
//   const fileContent = fs.readFileSync(filePath, "utf-8").split("\n\n");
//   const returned = extractProcedures(fileContent[1].split("\n"));
//   t.pass(returned);
// });

// tap.test("Testing answer for question 1", async ({ equal }) => {});

tap.test("Testing getLastItem", async ({ equal }) => {
  const givenOrders = [
    "move 1 from 2 to 1",
    "move 3 from 1 to 3",
    "move 2 from 2 to 1",
    "move 1 from 1 to 2",
  ];
  const givenArr = [["Z", "N"], ["M", "C", "D"], ["P"]];
  const procedures = extractProcedures(givenOrders);
  const expected = "CMZ";
  const returned = getLastItems(multiMove(procedures, givenArr));
  equal(returned, expected);
});
