import { describe, expect, it } from "vitest";
import fs from "fs";
import path from "path";
import { getAnswer, getCode, getCodes, getLetter } from "./script";

describe("returns the letter that is repeated ", () => {
  it("returns p(16)", () => {
    const str = "vJrwpWtwJgWrhcsFMMfFFhFp";
    expect(getLetter(str)).toBe("p");
  });

  it("returns L(38)", () => {
    const str = "jqHRNqRjqzjGDLGLrsFMfFZSrLrFZsSL";
    expect(getLetter(str)).toBe("L");
  });
  it("returns P(42)", () => {
    const str = "PmmdzqPrVvPwwTWBwg";
    expect(getLetter(str)).toBe("P");
  });
  it("returns v(22)", () => {
    const str = "wMqvLMZHhHMvwLHjbvcjnnSBnvTQFn";
    expect(getLetter(str)).toBe("v");
  });
  it("returns t(20)", () => {
    const str = "ttgJtRGJQctTZtZT";
    expect(getLetter(str)).toBe("t");
  });
  it("returns s(19)", () => {
    const str = "CrZsJsPPZsGzwwsLwLmpwMDw";
    expect(getLetter(str)).toBe("s");
  });
});

describe("returns the code of the char", () => {
  it("returns 16", () => {
    expect(getCode("p")).toBe(16);
  });

  it("returns 38", () => {
    expect(getCode("L")).toBe(38);
  });

  it("returns 42", () => {
    expect(getCode("P")).toBe(42);
  });

  it("returns 22", () => {
    expect(getCode("v")).toBe(22);
  });

  it("returns 20", () => {
    expect(getCode("t")).toBe(20);
  });
  it("returns 19", () => {
    expect(getCode("s")).toBe(19);
  });
});

describe("returns the array of priority code", () => {
  it("returns the priority letters of the array ", () => {
    const arr = [
      "vJrwpWtwJgWrhcsFMMfFFhFp",
      "jqHRNqRjqzjGDLGLrsFMfFZSrLrFZsSL",
      "PmmdzqPrVvPwwTWBwg",
      "wMqvLMZHhHMvwLHjbvcjnnSBnvTQFn",
      "ttgJtRGJQctTZtZT",
      "CrZsJsPPZsGzwwsLwLmpwMDw",
    ];
    const answer = [22, 10, 42, 23, 20, 29];
    expect(getCodes(arr)).toStrictEqual(answer);
  });
});

describe("returns the sum of the repeated characters", () => {
  it("returns 157", () => {
    expect(
      getAnswer([
        "vJrwpWtwJgWrhcsFMMfFFhFp",
        "jqHRNqRjqzjGDLGLrsFMfFZSrLrFZsSL",
        "PmmdzqPrVvPwwTWBwg",
        "wMqvLMZHhHMvwLHjbvcjnnSBnvTQFn",
        "ttgJtRGJQctTZtZT",
        "CrZsJsPPZsGzwwsLwLmpwMDw",
      ])
    ).toBe(157);
  });
  it("returns the answer of question 1", () => {
    const filePath = path.join(process.cwd(), "day3", "input");
    const fileContent = fs
      .readFileSync(filePath, "utf8")
      .toString()
      .split("\n")
      .slice(0, -1);
    expect(getAnswer(fileContent)).toBe(8243);
  });
});

it("returns the answer of question 1", () => {
  const filePath = path.join(process.cwd(), "day3", "input");
  const fileContent = fs
    .readFileSync(filePath, "utf8")
    .toString()
    .split("\n")
    .slice(0, -1);
  expect(getAnswer(fileContent)).toBe(8243);
});
