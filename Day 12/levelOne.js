// --------- Level 1 ---------
console.log("------ Level 1 ------");

// 1. Calculate the total annual income of the person from the following text. ‘He earns 4000 euro from salary per month, 10000 euro annual bonus, 5500 euro online courses per month.’.
console.log("--- Ex 1 ---");

let text = "He earns 4000 euro from salary per month, 10000 euro annual bonus, 5500 euro online courses per month.";

let pattern = /\d+/g;
let income = text.match(pattern).map(x => parseFloat(x)).reduce((sum, x) => sum + x, 0);
console.log(income)

// 2. The position of some particles on the horizontal x-axis -12, -4, -3 and -1 in the negative direction, 0 at origin, 4 and 8 in the positive direction. Extract these numbers and find the distance between the two furthest particles.
console.log("--- Ex 2 ---");

const str = "The position of some particles on the horizontal x-axis -12, -4, -3 and -1 in the negative direction, 0 at origin, 4 and 8 in the positive direction.";

const numbers = str.match(/-?\d+/g).map(Number);

const sorted = numbers.sort((a, b) => a - b);

const distance = sorted[sorted.length - 1] - sorted[0];

console.log(sorted);
console.log(distance);