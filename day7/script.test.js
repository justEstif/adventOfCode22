import tap from "tap";
import fs from "fs";
import path from "path";

const filePath = path.join(process.cwd(), "day7", "sample.txt");
const fileContent = fs.readFileSync(filePath, "utf8").trim();

const possibleFileContent = fileContent.split("\n").map((el) => el.split(" "));

for (const line of possibleFileContent) {
  if (line[0] === "$") {
    if (line[1] === "cd") {
      // set tracker to this index
      if (line[2] === "..") {
        // set tracter to previous index
      } else {
        // set tracker to the input
      }
    }
  }
}

const trackter = "";
/**
 * @param {string} input
 */
const terminal = (input) => {
  const possibleInput = {
    cd: changeDir(input),
    ls: listFiles(input),
  };
};

/**
 * @param {string} input
 */
const changeDir = (input) => {
  // if (..) = array [i-1]
  // if()
};
const listFiles = (input) => {
  const diskStructure = ["/"];
  // if folder:
};
// tap.test("Trying to get the sample question", async (tap) => { })
