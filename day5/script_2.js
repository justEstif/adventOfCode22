import fs from "fs";
import path from "path";

class ArrangeStacks {
  /**
   * @param {[string[]]} input
   * @param {string[]} directions
   */
  constructor(input, directions) {
    this.input = input;
    this.directions = directions;
  }
  /**
   * @description function to extract the procedures from the directions
   * @param {string[]} directions
   */
  procedures() {
    return this.directions.map((direction) =>
      direction
        .split(" ")
        .filter((el) => !isNaN(el))
        .map((el) => parseInt(el))
    );
  }
  /**
   * @description function to make one move
   */
  move() {
    for (const procedure of this.procedures()) {
      let count = procedure[0];
      let origin = this.input[procedure[1] - 1];
      let target = this.input[procedure[2] - 1];
      target.push(...origin.splice(origin.length - count, count).reverse()); // question1
      // target.push(...origin.splice(origin.length - count, count)); // question2
    }
  }

  /**
   * @description function to get el at top of stack
   */
  topOfStack() {
    return this.input.map((el) => el.pop()).join("");
  }

  /**
   * @description function to get answer
   */
  get answer() {
    this.move();
    return this.topOfStack();
  }
}
//
// const sampleDirections = [
//   "move 1 from 2 to 1",
//   "move 3 from 1 to 3",
//   "move 2 from 2 to 1",
//   "move 1 from 1 to 2",
// ];
// const sampleInput = [["Z", "N"], ["M", "C", "D"], ["P"]];
// const sample = new ArrangeStacks(sampleInput, sampleDirections);
// console.log(sample.answer);

const input = [
  ["C", "Z", "N", "B", "M", "W", "Q", "V"],
  ["H", "Z", "R", "W", "C", "B"],
  ["F", "Q", "R", "J"],
  ["Z", "S", "W", "H", "F", "N", "M", "T"],
  ["G", "F", "W", "L", "N", "Q", "P"],
  ["L", "P", "W"],
  ["V", "B", "D", "R", "G", "C", "Q", "J"],
  ["Z", "Q", "N", "B", "W"],
  ["H", "L", "F", "C", "G", "T", "J"],
];
const filePath = path.join(process.cwd(), "day5", "input");
const fileContent = fs.readFileSync(filePath, "utf-8").split("\n\n");
const directions = fileContent[1].split("\n").slice(0, -1);
const question2 = new ArrangeStacks(input, directions);
console.log(question2.answer);
