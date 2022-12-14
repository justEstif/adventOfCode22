// https://github.com/johnbeech/advent-of-code-2022/tree/main/solutions
import fs from "fs";
import path from "path";

const terminal = {
  /**
   * @param {number} index
   */
  ls: (index) => {
    const arr = [];
    for (let i = index + 1; i < fileContent.length; i++) {
      if (fileContent[i][0] === "$") {
        // console.log(fileContent);
        break;
      } else {
        arr.push[fileContent[i]];
      }
    }
    // console.log(arr);
  },
};

const filePath = path.join(process.cwd(), "day7", "sample.txt");
const fileContent = fs
  .readFileSync(filePath, "utf8")
  .trim()
  .split("\n")
  .map((el) => el.split(" "));

const disk = {};
let tracker = "";

for (let line in fileContent) {
  if (fileContent[line][0] === "$") {
    if (fileContent[line][1] === "cd") {
      if (fileContent[line][2] === "..") {
        line--;
        continue;
      } else {
        if (!disk[`${fileContent[line][2]}`])
          disk[`${fileContent[line][2]}`] = {};
        tracker = `${fileContent[line][2]}`;
      }
    } else if (fileContent[line][1] === "ls") {
      // listFiles()
      terminal.ls(line);
    }
  } else {
    if (fileContent[line][0] === "dir") {
      if (!fileContent[line][1]) fileContent[line][1] = {};
    } else {
      const fileName = `${fileContent[line][1]}`;
      const fileSize = Number(fileContent[line][0]);
      if (!fileContent[line].hasOwnProperty(fileName)) {
        disk[fileName] = fileSize;
      }
    }
  }
}

// console.log(disk);

/*
const disk = {
  "/": {
    a: {
      e: {
        i: 584,
      },
      f: 584,
      g: 2557,
      "h.lst": 62596,
    },
    "b.txt": 14848514,
    "c.dat": 8504156,
    d: {
      j: 4060174,
      "d.log": 8033020,
      "d.ext": 5626152,
      k: 7214296,
    },
  },
};

*/

const friends = ["Rachel", "Joey", "Ross", "Phoebe", "Monica", "Chandler"];

const iterator = friends.entries(); // Array Iterator {}

for (let friend of iterator) {
  console.log(friend);
}

const getEven = (number) => number % 2 === 0;

const numbers = [55, 2, 3, 16];

console.log(numbers.find(getEven));
