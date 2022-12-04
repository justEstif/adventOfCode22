import { test } from "tap";
import fs from "fs";
import path from "path";

import { getOverlapCountTotal } from "./script.js";

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
