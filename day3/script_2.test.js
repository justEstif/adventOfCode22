import { expect, it } from "vitest";
import fs from "fs";
import path from "path";
import { getAnswer } from "./script_2";

it("returns the answer of question 2", () => {
  const filePath = path.join(process.cwd(), "day3", "input");
  const fileContent = fs
    .readFileSync(filePath, "utf8")
    .toString()
    .split("\n")
    .slice(0, -1);

  let groups = [];
  for (var i = 0; i < fileContent.length; i += 3) {
    groups.push([fileContent[i], fileContent[i + 1], fileContent[i + 2]]);
  }
  expect(getAnswer(groups)).toBe(2631);
});
