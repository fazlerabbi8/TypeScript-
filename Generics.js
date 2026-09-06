// a function that takes any value and just returns it wrapped in an array
function wrapInArray(value) {
    return [value];
}
const nums = wrapInArray(5);
const strs = wrapInArray("rabii");
const bools = wrapInArray(true);
console.log(nums);
console.log(strs);
console.log(bools);
// One more example, showing why this matters more with multiple params
function firstElement(arr) {
    return arr[0];
}
const first = firstElement([1, 2, 3]);
const firstWord = firstElement(['rabi', 'maza']);
console.log(first);
console.log(firstWord);
// practice example
function getLastElement(arr) {
    return arr[arr.length - 1];
}
const lastElement = getLastElement([1, 2, 3]);
const lastWord = getLastElement(['rabi', 'maza']);
console.log(lastElement);
console.log(lastWord);
export {};
