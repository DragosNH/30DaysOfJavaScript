// --------- Level 2 ---------
console.log("------ Level 2 ------");

// 1. Find a union b.
console.log("--- Ex 1 ---");

let a = [1, 2, 3, 4, 5]
let b = [3, 4, 5, 6]
let c = [...a, ...b]

let C = new Set(c);

console.log(C);

// 2. Find a intersection b.
console.log("--- Ex 2 ---");

let A = new Set(a)
let B = new Set(b)

c = a.filter((num) => B.has(num))
C = new Set(c)

console.log(C)