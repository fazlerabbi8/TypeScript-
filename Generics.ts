export {};

// a function that takes any value and just returns it wrapped in an array

function wrapInArray<T>(value: T) {
  return [value];
}

const nums = wrapInArray(5);
const strs = wrapInArray("rabii");
const bools = wrapInArray(true);

// console.log(nums);
// console.log(strs);
// console.log(bools);

// One more example, showing why this matters more with multiple params

function firstElement<T>(arr: T[]): T {
  return arr[0];
}

const first = firstElement([1, 2, 3]);
const firstWord = firstElement(["rabi", "maza"]);

// console.log(first);
// console.log(firstWord);

// practice example
function getLastElement<T>(arr: T[]): T {
  return arr[arr.length - 1];
}

const lastElement = getLastElement([1, 2, 3]);
const lastWord = getLastElement(["rabi", "maza"]);

// console.log(lastElement)
// console.log(lastWord)

// if T anything then what can we do

// function getLength<T>(item: T) {
// //   return item.length;  it gives error.
// }

function getLength<T extends { length: number }>(item: T) {
  return item.length;
}

const l = getLength("hello world");
// console.log(l);
const nl = getLength([1, 2, 3]);
// console.log(nl)
// getLength(5); number dont have any length

// practice example

function getFirstChar<T extends { charAt: (index: number) => string }>(
  item: T,
) {
  return item.charAt(0);
}

const fstr = getFirstChar("hello");
// console.log(fstr)