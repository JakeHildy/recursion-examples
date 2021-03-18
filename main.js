// COUNTING RECURSIVELY

function counter(n, upTo) {
  for (n; n <= upTo; n++) {
    console.log(n);
  }
}

function counter2(n, upTo) {
  while (n <= upTo) {
    console.log(n++);
  }
}

function recursiveCounter(n, upTo) {
  console.log(n);
  // base case
  if (n === upTo) return;

  // recursive case
  return recursiveCounter(++n, upTo);
}

recursiveCounter(0, 10);

// TREE
let categories = [
  { id: "animals", parent: null },
  { id: "mammals", parent: "animals" },
  { id: "cats", parent: "mammals" },
  { id: "dogs", parent: "mammals" },
  { id: "chihuahua", parent: "dogs" },
  { id: "labrador", parent: "dogs" },
  { id: "persian", parent: "cats" },
  { id: "siamese", parent: "cats" },
];

let makeTree = (categories, parent) => {
  let node = {};
  categories
    .filter((c) => c.parent === parent)
    .forEach((c) => (node[c.id] = makeTree(categories, c.id)));
  return node;
};

console.log(JSON.stringify(makeTree(categories, null), null, 2));
