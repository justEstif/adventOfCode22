// set:  good for working with duplicate values in data.
// used for finding the union, intersection, and difference between two sets of data.

const set = new Set();

// Add items to a Set
set.add("Beethoven");
set.add("Mozart");
set.add("Chopin");

// Initialize a Set from an Array
const set1 = new Set(["hi", "hello", "good day"]);

// Iterate a Set with forEach
set1.forEach((value) => console.log(value));

// Iterate a Set with forEach
set.forEach((value) => console.log(value));

// Delete an item
set.delete("Beethoven"); // true

// Check for the existence of an item
set.has("Beethoven"); // false

// Clear a Set
set.clear();

// Check the size of a Set
set.size; // 0

const uniqueArray = [...new Set([1, 1, 2, 2, 2, 3])]; // (3) [1, 2, 3]
console.log(uniqueArray);
