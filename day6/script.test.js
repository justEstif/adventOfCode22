import tap from "tap";
import { isCharRepeated } from "./script.js";

tap.test("check if there  letter is repeated in string", async ({ same }) => {
  const givenStr = "abcda";
  const givenLetter = "a";
  const expected = true;
  const result = isCharRepeated(givenLetter, givenStr);
  same(result, expected);
});

tap.test("sample data", async ({ same }) => {
  const given = "mjqjpqmgbljsphdztnvjfqwrcgsmlb";
  const expected = 7;
  const result = isCharRepeated(given);
  same(result, expected);
});

/*
tap.test("Question 1", async (t) => {
  t.runOnly = true;
  t.test("check if there is a repeated char in string", async ({ same }) => {
    const given = "abcda";
    const expected = false;
    const result = isRepeatedChar(given);
    same(result, expected);
  });
  t.test("sample data", async ({ same }) => {
    const given = "mjqjpqmgbljsphdztnvjfqwrcgsmlb";
    const expected = 7;
    const result = getStartMarker(given);
    same(result, expected);
  });
  t.test("sample data", async ({ same }) => {
    const given = "bvwbjplbgvbhsrlpgdmjqwftvncz";
    const expected = 5;
    const result = getStartMarker(given);
    same(result, expected);
  });
  t.test("sample data", async ({ same }) => {
    const given = "nppdvjthqldpwncqszvftbrmjlhg";
    const expected = 6;
    const result = getStartMarker(given);
    same(result, expected);
  });
  t.test("sample data", async ({ same }) => {
    const given = "nznrnfrfntjfmvfwmzdfjlvtqnbhcprsg";
    const expected = 10;
    const result = getStartMarker(given);
    same(result, expected);
  });
  t.test("sample data", async ({ same }) => {
    const given = "zcfzfwzzqfrljwzlrfnpqdbhtmscgvjw";
    const expected = 11;
    const result = getStartMarker(given);
    same(result, expected);
  });
});
*/
