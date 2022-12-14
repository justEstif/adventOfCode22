// Maps: ordered collections of key/value pairs
// Sets: collections of unique values

const map = new Map([
  ["firstName", "Luke"],
  ["lastName", "Skywalker"],
  ["occupation", "Jedi Knight"],
]);

// set values
// map.set("firstName", "Luke");
// map.set("lastName", "Skywalker");
// map.set("occupation", "Jedi Knight");

// console.log(map);

map.forEach((value, key) => {
  console.log(value, key);
});
